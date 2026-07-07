/*  Lale AI proxy — Cloudflare Worker
 *  Forwards the app's chat requests to Google Gemini (free tier),
 *  keeping your API key hidden on the server (never in the browser).
 *
 *  SETUP (one time, ~5 min):
 *  1. Get a free Gemini key: https://aistudio.google.com/apikey  (no card needed)
 *  2. Go to https://dash.cloudflare.com → Workers & Pages → Create → Worker.
 *  3. Replace the worker code with this file, click Deploy.
 *  4. Worker → Settings → Variables and Secrets → add a Secret:
 *        name  = GEMINI_KEY
 *        value = <your Gemini key>
 *     Save, then Deploy again.
 *  5. Copy your Worker URL (e.g. https://lale-ai.<you>.workers.dev)
 *     and paste it in the app: Profile → AI conversation → "AI endpoint".
 *
 *  If you host the app somewhere other than hishamhao.github.io,
 *  change ALLOW_ORIGIN below (or set it to "*" to allow any site).
 */
const MODEL = "gemini-2.5-flash";
const ALLOW_ORIGIN = "https://hishamhao.github.io";

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": ALLOW_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "content-type",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST")
      return json({ error: "POST only" }, 405, cors);
    if (!env.GEMINI_KEY)
      return json({ error: "Server missing GEMINI_KEY secret" }, 500, cors);

    let payload;
    try { payload = await request.json(); }
    catch { return json({ error: "Bad JSON" }, 400, cors); }

    const { system, messages, max_tokens } = payload || {};
    const contents = (messages || [])
      .filter(m => m && m.content)
      .map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: String(m.content) }],
      }));

    const body = {
      contents,
      generationConfig: {
        maxOutputTokens: Math.min(Number(max_tokens) || 400, 800),
        temperature: 0.8,
      },
    };
    if (system) body.system_instruction = { parts: [{ text: String(system) }] };

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/" +
      MODEL + ":generateContent?key=" + env.GEMINI_KEY;

    let r, j;
    try {
      r = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      j = await r.json();
    } catch (e) {
      return json({ error: "Upstream error: " + e }, 502, cors);
    }

    if (!r.ok) {
      const msg = (j && j.error && j.error.message) || ("HTTP " + r.status);
      return json({ error: msg }, r.status, cors);
    }

    const text = ((j.candidates && j.candidates[0] &&
      j.candidates[0].content && j.candidates[0].content.parts) || [])
      .map(p => p.text || "").join("").trim();

    return json({ text }, 200, cors);
  },
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...cors, "content-type": "application/json" },
  });
}
