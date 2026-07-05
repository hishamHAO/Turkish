/* Lale — Turkish grammar course.
   Sequenced A1 → B1. Each lesson: id, level, title, English subtitle,
   sections (explanation blocks), examples [tr,en], and exercises.
   Exercise types: "choose" (pick correct), "fill" (type answer, lenient),
   "build" (tap words in order). Kept deliberately correct over flashy. */
window.LALE_GRAMMAR = [
  {
    id:"g01", level:"A1", title:"Ünlü uyumu", sub:"Vowel harmony — the master rule",
    sections:[
      "Almost every Turkish suffix changes its vowel to match the last vowel of the word. Get this and the whole language becomes predictable.",
      "TWO-WAY harmony (e/a): after e i ö ü → use e; after a ı o u → use a. Example: ev→evler, kız→kızlar.",
      "FOUR-WAY harmony (i/ı/u/ü): after e i → i; after a ı → ı; after o u → u; after ö ü → ü. Example: ev→evim, okul→okulum, göz→gözüm, kız→kızım.",
      "You'll see suffixes written like -lAr (two-way) or -(I)m (four-way). The capital letter just means 'the vowel that harmony picks'."
    ],
    examples:[["ev → evler","house → houses"],["kız → kızlar","girl → girls"],["göz → gözüm","eye → my eye"],["okul → okulum","school → my school"]],
    ex:[
      {t:"choose", q:"Plural of 'kitap' (book)?", opts:["kitaplar","kitapler"], a:0, why:"Last vowel 'a' → two-way harmony picks -lar."},
      {t:"choose", q:"Plural of 'ev' (house)?", opts:["evlar","evler"], a:1, why:"Last vowel 'e' → -ler."},
      {t:"choose", q:"'my eye' — göz + ?", opts:["gözim","gözüm"], a:1, why:"Last vowel 'ö' → four-way picks ü."},
      {t:"choose", q:"Plural of 'çocuk' (child)?", opts:["çocuklar","çocukler"], a:0, why:"Last vowel 'u' → -lar."}
    ]
  },
  {
    id:"g02", level:"A1", title:"Ben, sen, o…", sub:"Pronouns and 'to be'",
    sections:[
      "Pronouns: ben (I), sen (you), o (he/she/it), biz (we), siz (you plural/formal), onlar (they).",
      "'To be' isn't a separate word — it's a suffix on the end. -(y)Im, -sIn, -, -(y)Iz, -sInIz, -lAr.",
      "Örnek with 'öğretmen' (teacher): öğretmenim (I am a teacher), öğretmensin (you are), öğretmen (he/she is), öğretmeniz (we are), öğretmensiniz (you are), öğretmenler (they are).",
      "The 'y' appears only after a vowel: Türk → Türküm, but araba → arabayım."
    ],
    examples:[["Ben doktorum.","I am a doctor."],["Sen mutlusun.","You are happy."],["O yorgun.","He/She is tired."],["Biz arkadaşız.","We are friends."]],
    ex:[
      {t:"choose", q:"'I am a student' — öğrenci + ?", opts:["öğrenciyim","öğrencisin"], a:0, why:"1st person 'I' → -(y)Im, and vowel harmony → -yim."},
      {t:"fill", q:"Complete: 'You are tired' — Sen yorgun___", a:["sun"], why:"2nd person → -sIn; last vowel 'u' → -sun."},
      {t:"choose", q:"'We are ready' — hazır + ?", opts:["hazırız","hazırsınız"], a:0, why:"'We' → -(y)Iz → hazırız."},
      {t:"build", q:"Build: 'He is a teacher.'", tokens:["O","öğretmen"], a:["O","öğretmen"], why:"3rd person singular takes no suffix."}
    ]
  },
  {
    id:"g03", level:"A1", title:"Var / Yok", sub:"There is / there isn't — and 'have'",
    sections:[
      "var = there is / there are. yok = there isn't / aren't. Simple, and used constantly.",
      "Masada kitap var. = There is a book on the table. Burada kimse yok. = There's no one here.",
      "'Having' something uses the same words with a possessive: Benim bir arabam var = I have a car (literally: my car exists). Param yok = I have no money."
    ],
    examples:[["Sorun yok.","No problem. / There's no problem."],["Bir fikrim var.","I have an idea."],["Zaman var mı?","Is there time?"],["Evde süt yok.","There's no milk at home."]],
    ex:[
      {t:"choose", q:"'There is water' — Su ___", opts:["var","yok"], a:0, why:"var = there is."},
      {t:"choose", q:"'I have no time' — Zamanım ___", opts:["var","yok"], a:1, why:"yok = there isn't."},
      {t:"build", q:"Build: 'Is there a problem?'", tokens:["Sorun","var","mı"], a:["Sorun","var","mı"], why:"Question particle mı goes at the end."}
    ]
  },
  {
    id:"g04", level:"A1", title:"Soru: mı, mi, mu, mü", sub:"Yes/no questions",
    sections:[
      "To make a yes/no question, add a separate little word: mı / mi / mu / mü (four-way harmony), written apart.",
      "Statement: Sen Türksün (You are Turkish). Question: Sen Türk müsün? (Are you Turkish?)",
      "The particle attaches its 'to be' suffix: Hazır mısın? (Are you ready?), Doktor mu? (Is he a doctor?)."
    ],
    examples:[["Bu doğru mu?","Is this correct?"],["Geliyor musun?","Are you coming?"],["Aç mısın?","Are you hungry?"],["O evde mi?","Is he at home?"]],
    ex:[
      {t:"choose", q:"Which particle after 'güzel' (nice)?", opts:["mı","mi","mu","mü"], a:1, why:"Last vowel 'e' → mi."},
      {t:"choose", q:"Which particle after 'okul'?", opts:["mı","mi","mu","mü"], a:2, why:"Last vowel 'u' → mu."},
      {t:"build", q:"Build: 'Are you a student?' (sen)", tokens:["Öğrenci","misin"], a:["Öğrenci","misin"], why:"mi + sin (you) → misin, at the end."}
    ]
  },
  {
    id:"g05", level:"A1", title:"Çokluk: -lar / -ler", sub:"Making plurals",
    sections:[
      "Plural = add -lar or -ler by two-way harmony. That's the whole rule.",
      "After e i ö ü → -ler; after a ı o u → -lar.",
      "Note: after a number you do NOT add the plural. üç kitap (three books), not üç kitaplar."
    ],
    examples:[["araba → arabalar","car → cars"],["ev → evler","house → houses"],["gün → günler","day → days"],["beş elma","five apples"]],
    ex:[
      {t:"fill", q:"Plural of 'öğretmen' (teacher)", a:["öğretmenler"], why:"Last vowel 'e' → -ler."},
      {t:"fill", q:"Plural of 'kapı' (door)", a:["kapılar"], why:"Last vowel 'ı' → -lar."},
      {t:"choose", q:"'Two houses' —", opts:["iki ev","iki evler"], a:0, why:"After a number, no plural suffix."}
    ]
  },
  {
    id:"g06", level:"A1", title:"Bu, şu, o", sub:"This, that, that (over there)",
    sections:[
      "bu = this (near me). şu = that (nearby, pointing). o = that / he / she / it (further/known).",
      "Plurals: bunlar (these), şunlar, onlar (those/they).",
      "Bu ne? = What is this? Şu kim? = Who is that? O benim. = That's mine."
    ],
    examples:[["Bu çay.","This is tea."],["Şu kim?","Who is that?"],["O ev büyük.","That house is big."],["Bunlar senin mi?","Are these yours?"]],
    ex:[
      {t:"choose", q:"'This is a book' —", opts:["Bu kitap.","O kitap."], a:0, why:"bu = this (near)."},
      {t:"build", q:"Build: 'What is this?'", tokens:["Bu","ne"], a:["Bu","ne"], why:"Bu ne? — literally 'this what?'"}
    ]
  },
  {
    id:"g07", level:"A1", title:"Şimdiki zaman: -iyor", sub:"Present continuous (-ing / doing now)",
    sections:[
      "The everyday 'I am doing' tense. Take the verb stem (drop -mek/-mak) and add -iyor + person ending.",
      "Vowel harmony on -iyor: -ıyor / -iyor / -uyor / -üyor. If the stem ends in a vowel, that vowel usually drops (bekle- → bekliyor).",
      "gelmek (to come): geliyorum (I'm coming), geliyorsun, geliyor, geliyoruz, geliyorsunuz, geliyorlar.",
      "This tense also covers near-future and current habits, like English 'I'm working these days'."
    ],
    examples:[["Geliyorum.","I'm coming."],["Ne yapıyorsun?","What are you doing?"],["Kitap okuyor.","He's reading a book."],["Türkçe öğreniyoruz.","We're learning Turkish."]],
    ex:[
      {t:"fill", q:"'I am coming' — gel + iyor + um =", a:["geliyorum"], why:"gel-iyor-um."},
      {t:"choose", q:"'What are you doing?' —", opts:["Ne yapıyorsun?","Ne yapıyorum?"], a:0, why:"-sun = you (2nd person)."},
      {t:"build", q:"Build: 'We are learning Turkish.'", tokens:["Türkçe","öğreniyoruz"], a:["Türkçe","öğreniyoruz"], why:"öğren-iyor-uz = we are learning."}
    ]
  },
  {
    id:"g08", level:"A1", title:"Olumsuz: -me / -ma", sub:"Making verbs negative",
    sections:[
      "Negative = insert -me / -ma between the stem and the ending (two-way harmony).",
      "In the -iyor tense the negative vowel shifts: gelmiyorum (I'm not coming), yapmıyor (he isn't doing).",
      "Pattern: gel- + me + iyor + um → gelmiyorum. The -me's e becomes i before -iyor."
    ],
    examples:[["Gelmiyorum.","I'm not coming."],["Anlamıyorum.","I don't understand."],["O çalışmıyor.","He isn't working."],["Bilmiyorum.","I don't know."]],
    ex:[
      {t:"choose", q:"'I don't understand' —", opts:["Anlıyorum","Anlamıyorum"], a:1, why:"Negative -ma before -ıyor → anlamıyorum."},
      {t:"fill", q:"Make negative: 'I'm not coming' (gelmek)", a:["gelmiyorum"], why:"gel-mi-yor-um."},
      {t:"build", q:"Build: 'He isn't working.'", tokens:["O","çalışmıyor"], a:["O","çalışmıyor"], why:"çalış-ma-ıyor → çalışmıyor."}
    ]
  },
  {
    id:"g09", level:"A1", title:"-de / -da", sub:"Locative case: in, on, at",
    sections:[
      "To say where something is, add -de / -da (two-way harmony) to the place.",
      "ev → evde (at home), okul → okulda (at school), İstanbul → İstanbul'da (in Istanbul — proper nouns take an apostrophe).",
      "After the hard consonants p,ç,t,k,s,ş,h,f the suffix hardens to -te / -ta: sokak → sokakta (on the street)."
    ],
    examples:[["Evdeyim.","I'm at home."],["Okulda.","At school."],["Masada.","On the table."],["İş yerinde.","At the workplace."]],
    ex:[
      {t:"fill", q:"'at home' — ev + ?", a:["evde"], why:"Last vowel 'e' → -de."},
      {t:"choose", q:"'at school' — okul + ?", opts:["okulde","okulda"], a:1, why:"Last vowel 'u' → -da."},
      {t:"choose", q:"'on the street' — sokak + ?", opts:["sokakda","sokakta"], a:1, why:"After 'k' (hard) → -ta."}
    ]
  },
  {
    id:"g10", level:"A1", title:"-i / -ı / -u / -ü", sub:"Accusative — the definite object",
    sections:[
      "When the object is specific ('the book', not 'a book'), mark it with -i/-ı/-u/-ü (four-way).",
      "Kitabı okuyorum = I'm reading THE book. Kitap okuyorum = I'm reading A book (no suffix, general).",
      "After a vowel, insert 'y': araba → arabayı. Note 'kitap' softens: kitabı (p→b)."
    ],
    examples:[["Kapıyı aç.","Open the door."],["Onu görüyorum.","I see him/it."],["Filmi izledik.","We watched the film."],["Seni seviyorum.","I love you."]],
    ex:[
      {t:"choose", q:"'I'm reading THE book' —", opts:["Kitap okuyorum","Kitabı okuyorum"], a:1, why:"Specific object → accusative -ı."},
      {t:"fill", q:"'the car' (object) — araba + ?", a:["arabayı"], why:"Ends in vowel → buffer y → arabayı."},
      {t:"build", q:"Build: 'I love you.'", tokens:["Seni","seviyorum"], a:["Seni","seviyorum"], why:"sen → seni (you, as object)."}
    ]
  },
  {
    id:"g11", level:"A2", title:"-e / -a", sub:"Dative — to / toward",
    sections:[
      "Direction 'to' a place or person = -e / -a (two-way). After a vowel insert 'y'.",
      "ev → eve (to home / home-ward), okul → okula (to school), İstanbul'a (to Istanbul).",
      "Used with many verbs: bakmak-a (look at), gitmek-e (go to), vermek-e (give to). Bana bak = look at me."
    ],
    examples:[["Eve gidiyorum.","I'm going home."],["Okula gitti.","He went to school."],["Bana ver.","Give it to me."],["Sana bir şey söyleyeceğim.","I'll tell you something."]],
    ex:[
      {t:"fill", q:"'to school' — okul + ?", a:["okula"], why:"Last vowel 'u' → -a."},
      {t:"choose", q:"'I'm going home' —", opts:["Evde gidiyorum","Eve gidiyorum"], a:1, why:"Direction 'to home' → dative eve."},
      {t:"fill", q:"'to me' — ben becomes ?", a:["bana"], why:"ben is irregular in the dative → bana."}
    ]
  },
  {
    id:"g12", level:"A2", title:"-den / -dan", sub:"Ablative — from / out of",
    sections:[
      "'From' a place or source = -den / -dan (two-way); hardens to -ten/-tan after p,ç,t,k,s,ş,h,f.",
      "ev → evden (from home), İstanbul'dan (from Istanbul), uçak → uçaktan (from the plane).",
      "Also used for 'because of' and comparisons (senden uzun = taller than you)."
    ],
    examples:[["Evden çıktım.","I left home."],["Nereden geliyorsun?","Where are you coming from?"],["İştahtan öldüm.","I'm starving."],["Benden büyük.","Older than me."]],
    ex:[
      {t:"fill", q:"'from home' — ev + ?", a:["evden"], why:"Last vowel 'e' → -den."},
      {t:"choose", q:"'from the plane' — uçak + ?", opts:["uçakdan","uçaktan"], a:1, why:"After 'k' → hardens to -tan."},
      {t:"build", q:"Build: 'Where are you coming from?'", tokens:["Nereden","geliyorsun"], a:["Nereden","geliyorsun"], why:"nere+den = from where."}
    ]
  },
  {
    id:"g13", level:"A2", title:"İyelik", sub:"Possessive suffixes: my, your, his…",
    sections:[
      "Turkish shows 'my/your/his' with suffixes on the noun (four-way harmony).",
      "-(I)m my, -(I)n your, -(s)I his/her/its, -(I)mIz our, -(I)nIz your(pl), -lArI their.",
      "ev → evim (my house), evin (your house), evi (his house), evimiz (our house).",
      "After a vowel: araba → arabam (my car), arabası (his car)."
    ],
    examples:[["Adım Ali.","My name is Ali."],["Annen nasıl?","How is your mother?"],["Arabası yeni.","His car is new."],["Evimiz küçük.","Our house is small."]],
    ex:[
      {t:"fill", q:"'my house' — ev + ?", a:["evim"], why:"1st person → -im."},
      {t:"fill", q:"'your name' — ad(ı) → ?", a:["adın"], why:"'your' → -ın → adın."},
      {t:"choose", q:"'his car' — araba + ?", opts:["arabam","arabası"], a:1, why:"3rd person after vowel → -sı."}
    ]
  },
  {
    id:"g14", level:"A2", title:"Belirtili ad tamlaması", sub:"Noun-of-noun (genitive)",
    sections:[
      "'X's Y' / 'the Y of X' uses two suffixes: the owner takes -in (genitive), the thing takes -i (possessed).",
      "öğretmenin arabası = the teacher's car (öğretmen+in araba+sı).",
      "Türkiye'nin başkenti = Turkey's capital. This double-marking is very common."
    ],
    examples:[["Ali'nin evi","Ali's house"],["okulun bahçesi","the school's garden"],["kızın adı","the girl's name"],["günün sonu","the end of the day"]],
    ex:[
      {t:"build", q:"Build: 'the teacher's car'", tokens:["öğretmenin","arabası"], a:["öğretmenin","arabası"], why:"owner+in, thing+sı."},
      {t:"choose", q:"'the girl's name' —", opts:["kız ad","kızın adı"], a:1, why:"Both parts marked: kız-ın ad-ı."}
    ]
  },
  {
    id:"g15", level:"A2", title:"Geçmiş zaman: -di", sub:"Simple past (did / was)",
    sections:[
      "Definite past = -di/-dı/-du/-dü (four-way), hardening to -ti/-tı/-tu/-tü after p,ç,t,k,s,ş,h,f.",
      "gelmek → geldim (I came), geldin, geldi, geldik, geldiniz, geldiler.",
      "gitmek → gittim (I went — t hardens). This is a certain, witnessed past."
    ],
    examples:[["Geldim.","I came."],["Ne oldu?","What happened?"],["Dün çalıştım.","I worked yesterday."],["Onu gördük.","We saw him."]],
    ex:[
      {t:"fill", q:"'I came' — gel + ?", a:["geldim"], why:"gel-di-m."},
      {t:"choose", q:"'I went' (gitmek) —", opts:["gitdim","gittim"], a:1, why:"After 't' hardens → gittim."},
      {t:"build", q:"Build: 'What happened?'", tokens:["Ne","oldu"], a:["Ne","oldu"], why:"ol-du = happened/became."}
    ]
  },
  {
    id:"g16", level:"A2", title:"Geniş zaman: -ir / -er", sub:"Aorist — habits & general truths",
    sections:[
      "The aorist is for habits, general facts, and offers/promises. Endings: -r after a vowel, otherwise -ir/-ır/-ur/-ür or -er/-ar.",
      "içmek → içerim (I drink), gelmek → gelirim (I come), yapmak → yaparım (I do).",
      "Negative is irregular: -mem/-mez. gelmem (I don't come), gelmez (he doesn't come).",
      "Use it for 'Would you like…?' offers: Çay içer misin? = Would you like tea?"
    ],
    examples:[["Her sabah kahve içerim.","I drink coffee every morning."],["O sigara içmez.","He doesn't smoke."],["Yardım ederim.","I'll help."],["Çay içer misin?","Would you like tea?"]],
    ex:[
      {t:"choose", q:"'I drink coffee every day' —", opts:["Kahve içiyorum","Her gün kahve içerim"], a:1, why:"Habit → aorist içerim."},
      {t:"fill", q:"'he doesn't come' — gel + negative aorist", a:["gelmez"], why:"Aorist negative 3rd person → -mez."}
    ]
  },
  {
    id:"g17", level:"A2", title:"Gelecek zaman: -ecek", sub:"Future (will / going to)",
    sections:[
      "Future = -ecek / -acak (two-way) + person ending. After a vowel insert 'y'.",
      "gelmek → geleceğim (I will come — k softens to ğ before a vowel), geleceksin, gelecek, geleceğiz…",
      "gitmek → gideceğim (t→d softening). Common and essential for plans."
    ],
    examples:[["Yarın geleceğim.","I'll come tomorrow."],["Ne yapacaksın?","What will you do?"],["Görüşeceğiz.","We'll see each other."],["Yağmur yağacak.","It's going to rain."]],
    ex:[
      {t:"fill", q:"'I will come' — gel + ecek + im", a:["geleceğim"], why:"k→ğ before the vowel → geleceğim."},
      {t:"choose", q:"'What will you do?' —", opts:["Ne yapıyorsun?","Ne yapacaksın?"], a:1, why:"-acak = future."},
      {t:"build", q:"Build: 'It's going to rain.'", tokens:["Yağmur","yağacak"], a:["Yağmur","yağacak"], why:"yağ-acak = will rain."}
    ]
  },
  {
    id:"g18", level:"A2", title:"-ebilmek", sub:"Can / to be able to",
    sections:[
      "Ability = stem + -ebil / -abil + tense/person. gelmek → gelebilirim (I can come).",
      "Negative 'cannot' uses -eme/-ama: gelemem (I can't come), yapamıyorum (I can't do it right now).",
      "Also expresses possibility and permission: Girebilir miyim? = May I come in?"
    ],
    examples:[["Yüzebilirim.","I can swim."],["Gelemem.","I can't come."],["Yardım edebilir misin?","Can you help?"],["Bunu yapabilirsin.","You can do this."]],
    ex:[
      {t:"choose", q:"'I can swim' —", opts:["Yüzerim","Yüzebilirim"], a:1, why:"-ebil = ability → yüzebilirim."},
      {t:"fill", q:"'I can't come' — gel + negative ability", a:["gelemem"], why:"Negative ability → -eme + -m → gelemem."}
    ]
  },
  {
    id:"g19", level:"A2", title:"İstemek", sub:"Wanting to do something",
    sections:[
      "'Want to (verb)' = the full infinitive + istemek. gitmek istiyorum = I want to go.",
      "'Want (a noun)' uses the accusative + istemek: Su istiyorum = I want water.",
      "Negative: gitmek istemiyorum = I don't want to go."
    ],
    examples:[["Gitmek istiyorum.","I want to go."],["Ne yemek istersin?","What would you like to eat?"],["Uyumak istiyor.","He wants to sleep."],["Kalmak istemiyorum.","I don't want to stay."]],
    ex:[
      {t:"build", q:"Build: 'I want to go.'", tokens:["Gitmek","istiyorum"], a:["Gitmek","istiyorum"], why:"infinitive + istiyorum."},
      {t:"choose", q:"'He wants to sleep' —", opts:["Uyuyor","Uyumak istiyor"], a:1, why:"want to sleep = uyumak istiyor."}
    ]
  },
  {
    id:"g20", level:"A2", title:"Emir & rica", sub:"Commands and polite requests",
    sections:[
      "Command to one person = the bare stem: Gel! (Come!), Bak! (Look!), Otur! (Sit!).",
      "Polite plural / formal = -in / -ın / -un / -ün: Buyurun (Please/Go ahead), Bekleyin (Please wait).",
      "Softer requests use the aorist question: Kapıyı açar mısın? = Could you open the door?"
    ],
    examples:[["Gel!","Come!"],["Lütfen bekleyin.","Please wait."],["Buraya bak.","Look here."],["Yardım eder misiniz?","Could you help?"]],
    ex:[
      {t:"choose", q:"Polite 'please wait' (formal) —", opts:["Bekle","Bekleyin"], a:1, why:"-in = polite/plural imperative."},
      {t:"build", q:"Build: 'Could you open the door?'", tokens:["Kapıyı","açar","mısın"], a:["Kapıyı","açar","mısın"], why:"aorist + question = soft request."}
    ]
  },
  {
    id:"g21", level:"B1", title:"-meli", sub:"Must / should (necessity)",
    sections:[
      "Obligation = stem + -meli / -malı + person. gitmeliyim = I must/should go.",
      "Alternative with 'lazım' or 'gerek': Gitmem lazım = I need to go.",
      "Negative: gitmemeliyim = I shouldn't go."
    ],
    examples:[["Gitmeliyim.","I must go."],["Dinlenmelisin.","You should rest."],["Çalışmam lazım.","I need to study."],["Beklememelisin.","You shouldn't wait."]],
    ex:[
      {t:"fill", q:"'I must go' — git + meli + yim", a:["gitmeliyim"], why:"git-meli-yim."},
      {t:"choose", q:"'You should rest' —", opts:["Dinleniyorsun","Dinlenmelisin"], a:1, why:"-meli = should → dinlenmelisin."}
    ]
  },
  {
    id:"g22", level:"B1", title:"Karşılaştırma", sub:"Comparatives & superlatives",
    sections:[
      "'More X' = daha + adjective. 'Most X' = en + adjective.",
      "daha büyük = bigger, en büyük = the biggest.",
      "'Than' uses the ablative -den: Benden uzun = taller than me. Ali Ayşe'den hızlı = Ali is faster than Ayşe."
    ],
    examples:[["Bu daha iyi.","This is better."],["En güzel şehir.","The most beautiful city."],["Senden büyüğüm.","I'm older than you."],["Daha yavaş konuş.","Speak more slowly."]],
    ex:[
      {t:"choose", q:"'the biggest house' —", opts:["daha büyük ev","en büyük ev"], a:1, why:"en = most/-est."},
      {t:"build", q:"Build: 'taller than me' (uzun)", tokens:["benden","uzun"], a:["benden","uzun"], why:"than me = benden (ablative)."}
    ]
  },
  {
    id:"g23", level:"B1", title:"Koşul: -se / -sa", sub:"If — conditionals",
    sections:[
      "'If' = -se / -sa on the verb. gelirsen = if you come, gidersem = if I go.",
      "Often paired with the aorist or future in the main clause: Vaktim olursa gelirim = If I have time, I'll come.",
      "'eğer' can start the sentence for emphasis but the -se suffix does the real work."
    ],
    examples:[["Yağmur yağarsa gelmem.","If it rains, I won't come."],["İstersen gidelim.","If you want, let's go."],["Zamanım olsa…","If only I had time…"],["Görürsen söyle.","If you see him, tell me."]],
    ex:[
      {t:"fill", q:"'if you come' — gel + ir + se + n", a:["gelirsen"], why:"gel-ir-se-n."},
      {t:"choose", q:"'If you want, let's go' —", opts:["İstersen gidelim","İstiyorsun gidelim"], a:0, why:"-sen = if you → istersen."}
    ]
  },
  {
    id:"g24", level:"B1", title:"Sıfat-fiil: -en", sub:"Relative clauses (the … who/that)",
    sections:[
      "To say 'the man WHO came' Turkish puts a participle before the noun: gelen adam = the man who came.",
      "For subjects use -en/-an on the verb: çalışan kadın = the woman who works; ağlayan çocuk = the crying child.",
      "This replaces English 'who/which/that' clauses — the verb becomes an adjective in front of the noun."
    ],
    examples:[["gelen adam","the man who came"],["konuşan kişi","the person speaking"],["satılan ev","the house that's sold"],["beni arayan kim?","who is the one calling me?"]],
    ex:[
      {t:"choose", q:"'the crying child' —", opts:["ağlıyor çocuk","ağlayan çocuk"], a:1, why:"-an participle → ağlayan."},
      {t:"build", q:"Build: 'the man who came'", tokens:["gelen","adam"], a:["gelen","adam"], why:"participle before the noun."}
    ]
  }
];
