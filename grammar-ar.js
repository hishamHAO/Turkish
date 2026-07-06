/* Lale — دورة قواعد اللغة التركية بالعربية
   مقتبسة ومعدّة استنادا إلى منهج كتاب "الشامل في قواعد اللغة التركية".
   كل درس: عنوان، شرح بالعربية، أمثلة [تركي، عربي]، وتمارين.
   أنواع التمارين: choose (اختيار)، fill (إكمال)، build (ترتيب). */
window.LALE_GRAMMAR_AR = [
  {
    id:"a01", level:"A1", title:"الحروف الخاصة", sub:"ç ş ğ ı ö ü",
    sections:[
      "الأبجدية التركية لاتينية وفيها ستة حروف لا نظير لها في الإنجليزية، وأغلبها قريب من أصوات عربية.",
      "ç تُلفظ مثل «تش» كما في çay (شاي). ş تُلفظ «ش» كما في şeker (سكر). c تُلفظ «ج» كما في cadde (شارع).",
      "الحرف ı (بدون نقطة) صوت خفيف بين الفتحة والكسرة، ويختلف عن i (بنقطة). و ö و ü صوتان مضمومان مرقّقان كما في göz (عين) و ücret (أجرة).",
      "ğ (يوموشاك گ) لا يأتي في أول الكلمة، وغالبا يمدّ الحرف الذي قبله، كما في dağ (جبل) و değil (ليس)."
    ],
    examples:[["çay","شاي"],["şeker","سكر"],["göz","عين"],["dağ","جبل"]],
    ex:[
      {t:"choose", q:"أي كلمة تبدأ بصوت «تش»؟", opts:["şeker","çay"], a:1, why:"الحرف ç يُلفظ «تش»."},
      {t:"choose", q:"ما لفظ الحرف ş؟", opts:["ش","ج","تش"], a:0, why:"ş تقابل «ش» العربية."},
      {t:"choose", q:"الحرف ğ في كلمة dağ:", opts:["يُلفظ جيما","يمدّ ما قبله"], a:1, why:"ğ غالبا يُطيل الحركة قبله."}
    ]
  },
  {
    id:"a02", level:"A1", title:"قاعدة التوافق الصوتي", sub:"Ünlü uyumu",
    sections:[
      "أهم قاعدة في التركية: حركة اللاحقة تتغيّر لتوافق آخر حركة في الكلمة. بإتقانها تصبح اللغة منتظمة ومتوقّعة.",
      "التوافق الثنائي (e/a): بعد e i ö ü تأتي e، وبعد a ı o u تأتي a. مثال: ev←evler و kız←kızlar.",
      "التوافق الرباعي (i/ı/u/ü): بعد e i تأتي i، وبعد a ı تأتي ı، وبعد o u تأتي u، وبعد ö ü تأتي ü.",
      "تُكتب اللاحقة أحيانا هكذا -lAr أو -(I)m، والحرف الكبير يعني «الحركة التي تختارها القاعدة»."
    ],
    examples:[["ev → evler","بيت ← بيوت"],["kız → kızlar","بنت ← بنات"],["göz → gözüm","عين ← عيني"],["okul → okulum","مدرسة ← مدرستي"]],
    ex:[
      {t:"choose", q:"جمع kitap (كتاب):", opts:["kitaplar","kitapler"], a:0, why:"آخر حركة a ← اللاحقة -lar."},
      {t:"choose", q:"جمع ev (بيت):", opts:["evlar","evler"], a:1, why:"آخر حركة e ← اللاحقة -ler."},
      {t:"fill", q:"«عيني»: göz + لاحقة الملكية للمتكلم =", a:["gözüm"], why:"آخر حركة ö ← الرباعي يختار ü."}
    ]
  },
  {
    id:"a03", level:"A1", title:"الضمائر ولاحقة الكون", sub:"أنا، أنتَ، هو…",
    sections:[
      "الضمائر: ben (أنا)، sen (أنتَ/أنتِ)، o (هو/هي)، biz (نحن)، siz (أنتم)، onlar (هم).",
      "لا يوجد فعل مستقل بمعنى «يكون»؛ بل لاحقة تُضاف إلى آخر الخبر: -(y)Im, -sIn, -, -(y)Iz, -sInIz, -lAr.",
      "مثال مع öğretmen (معلّم): öğretmenim (أنا معلّم)، öğretmensin (أنتَ معلّم)، öğretmen (هو معلّم).",
      "تظهر y بعد الحركة فقط: Türk←Türküm، أما araba←arabayım."
    ],
    examples:[["Ben doktorum.","أنا طبيب."],["Sen mutlusun.","أنتَ سعيد."],["O yorgun.","هو متعب."],["Biz arkadaşız.","نحن أصدقاء."]],
    ex:[
      {t:"choose", q:"«أنا طالب»: öğrenci + ?", opts:["öğrenciyim","öğrencisin"], a:0, why:"ضمير المتكلم ← -(y)Im مع y بعد الحركة."},
      {t:"fill", q:"أكمل «أنتَ متعب»: Sen yorgun___", a:["sun"], why:"للمخاطب -sIn، وآخر حركة u ← -sun."},
      {t:"build", q:"رتّب: «هو معلّم.»", tokens:["O","öğretmen"], a:["O","öğretmen"], why:"الغائب المفرد لا يأخذ لاحقة."}
    ]
  },
  {
    id:"a04", level:"A1", title:"var / yok والملكية", sub:"يوجد / لا يوجد",
    sections:[
      "var = يوجد، yok = لا يوجد. كلمتان تُستعملان كثيرا.",
      "Masada kitap var. = يوجد كتاب على الطاولة. Burada kimse yok. = لا أحد هنا.",
      "التعبير عن «الملك» يستعمل نفس الكلمتين مع لاحقة ملكية: Benim arabam var = عندي سيارة (حرفيا: سيارتي موجودة). Param yok = ليس عندي نقود."
    ],
    examples:[["Sorun yok.","لا مشكلة."],["Bir fikrim var.","عندي فكرة."],["Zaman var mı?","هل يوجد وقت؟"],["Evde süt yok.","لا يوجد حليب في البيت."]],
    ex:[
      {t:"choose", q:"«يوجد ماء»: Su ___", opts:["var","yok"], a:0, why:"var = يوجد."},
      {t:"choose", q:"«ليس عندي وقت»: Zamanım ___", opts:["var","yok"], a:1, why:"yok = لا يوجد."},
      {t:"build", q:"رتّب: «هل يوجد مشكلة؟»", tokens:["Sorun","var","mı"], a:["Sorun","var","mı"], why:"أداة السؤال mı في آخر الجملة."}
    ]
  },
  {
    id:"a05", level:"A1", title:"أداة الاستفهام", sub:"mı, mi, mu, mü",
    sections:[
      "لصنع سؤال بنعم/لا نضيف كلمة صغيرة منفصلة: mı / mi / mu / mü حسب التوافق الرباعي.",
      "الخبر: Sen Türksün (أنتَ تركي). السؤال: Sen Türk müsün? (هل أنتَ تركي؟).",
      "تأخذ الأداة لاحقة الكون: Hazır mısın? (هل أنتَ جاهز؟)، Doktor mu? (هل هو طبيب؟)."
    ],
    examples:[["Bu doğru mu?","هل هذا صحيح؟"],["Geliyor musun?","هل أنتَ قادم؟"],["Aç mısın?","هل أنتَ جائع؟"],["O evde mi?","هل هو في البيت؟"]],
    ex:[
      {t:"choose", q:"الأداة بعد güzel (جميل):", opts:["mı","mi","mu","mü"], a:1, why:"آخر حركة e ← mi."},
      {t:"choose", q:"الأداة بعد okul:", opts:["mı","mi","mu","mü"], a:2, why:"آخر حركة u ← mu."},
      {t:"build", q:"رتّب: «هل أنتَ طالب؟»", tokens:["Öğrenci","misin"], a:["Öğrenci","misin"], why:"mi + sin ← misin في الآخر."}
    ]
  },
  {
    id:"a06", level:"A1", title:"لاحقة الجمع", sub:"-lar / -ler",
    sections:[
      "الجمع = إضافة -lar أو -ler حسب التوافق الثنائي. هذه هي القاعدة كلها.",
      "بعد e i ö ü ← -ler، وبعد a ı o u ← -lar.",
      "ملاحظة مهمة: لا يجتمع العدد مع الجمع؛ نقول üç kitap (ثلاثة كتب) لا üç kitaplar."
    ],
    examples:[["araba → arabalar","سيارة ← سيارات"],["ev → evler","بيت ← بيوت"],["gün → günler","يوم ← أيام"],["beş elma","خمس تفاحات"]],
    ex:[
      {t:"fill", q:"جمع öğretmen (معلّم):", a:["öğretmenler"], why:"آخر حركة e ← -ler."},
      {t:"fill", q:"جمع kapı (باب):", a:["kapılar"], why:"آخر حركة ı ← -lar."},
      {t:"choose", q:"«بيتان»:", opts:["iki ev","iki evler"], a:0, why:"بعد العدد لا نضيف لاحقة الجمع."}
    ]
  },
  {
    id:"a07", level:"A1", title:"أسماء وضمائر الإشارة", sub:"bu, şu, o",
    sections:[
      "bu = هذا (للقريب)، şu = ذاك (للمتوسّط المرئي)، o = ذلك/هو (للبعيد أو المعروف).",
      "الجمع: bunlar (هؤلاء)، şunlar، onlar (أولئك/هم).",
      "Bu ne? = ما هذا؟ Şu kim? = من ذاك؟ O benim. = ذاك لي."
    ],
    examples:[["Bu çay.","هذا شاي."],["Şu kim?","من ذاك؟"],["O ev büyük.","ذلك البيت كبير."],["Bunlar senin mi?","هل هذه لك؟"]],
    ex:[
      {t:"choose", q:"«هذا كتاب»:", opts:["Bu kitap.","O kitap."], a:0, why:"bu = هذا (للقريب)."},
      {t:"build", q:"رتّب: «ما هذا؟»", tokens:["Bu","ne"], a:["Bu","ne"], why:"Bu ne؟ حرفيا «هذا ما»."}
    ]
  },
  {
    id:"a08", level:"A1", title:"الزمن المضارع المستمر", sub:"-iyor",
    sections:[
      "زمن «أفعلُ الآن». نأخذ جذر الفعل (بحذف -mek/-mak) ونضيف -iyor ثم لاحقة الضمير.",
      "التوافق على -iyor: -ıyor / -iyor / -uyor / -üyor. وإذا انتهى الجذر بحركة سقطت غالبا (bekle- ← bekliyor).",
      "gelmek (يأتي): geliyorum (أنا قادم)، geliyorsun، geliyor، geliyoruz، geliyorsunuz، geliyorlar.",
      "يُستعمل أيضا للمستقبل القريب وللعادة الجارية هذه الأيام."
    ],
    examples:[["Geliyorum.","أنا قادم."],["Ne yapıyorsun?","ماذا تفعل؟"],["Kitap okuyor.","هو يقرأ كتابا."],["Türkçe öğreniyoruz.","نحن نتعلّم التركية."]],
    ex:[
      {t:"fill", q:"«أنا قادم»: gel + iyor + um =", a:["geliyorum"], why:"gel-iyor-um."},
      {t:"choose", q:"«ماذا تفعل؟»:", opts:["Ne yapıyorsun?","Ne yapıyorum?"], a:0, why:"-sun للمخاطب."},
      {t:"build", q:"رتّب: «نتعلّم التركية.»", tokens:["Türkçe","öğreniyoruz"], a:["Türkçe","öğreniyoruz"], why:"öğren-iyor-uz = نحن نتعلّم."}
    ]
  },
  {
    id:"a09", level:"A1", title:"النفي", sub:"-me / -ma",
    sections:[
      "النفي = إدخال -me / -ma بين الجذر واللاحقة حسب التوافق الثنائي.",
      "في زمن -iyor تتحوّل حركة النفي: gelmiyorum (لستُ قادما)، yapmıyor (لا يفعل).",
      "الصيغة: gel- + me + iyor + um ← gelmiyorum؛ حيث تصير e من -me إلى i قبل -iyor."
    ],
    examples:[["Gelmiyorum.","لستُ قادما."],["Anlamıyorum.","لا أفهم."],["O çalışmıyor.","هو لا يعمل."],["Bilmiyorum.","لا أعرف."]],
    ex:[
      {t:"choose", q:"«لا أفهم»:", opts:["Anlıyorum","Anlamıyorum"], a:1, why:"النفي -ma قبل -ıyor ← anlamıyorum."},
      {t:"fill", q:"انفِ «لستُ قادما» (gelmek):", a:["gelmiyorum"], why:"gel-mi-yor-um."},
      {t:"build", q:"رتّب: «هو لا يعمل.»", tokens:["O","çalışmıyor"], a:["O","çalışmıyor"], why:"çalış-ma-ıyor ← çalışmıyor."}
    ]
  },
  {
    id:"a10", level:"A1", title:"حالة المكان", sub:"-de / -da (في، على، عند)",
    sections:[
      "للدلالة على المكان نضيف -de / -da حسب التوافق الثنائي.",
      "ev ← evde (في البيت)، okul ← okulda (في المدرسة)، İstanbul ← İstanbul'da (تأخذ الأعلام فاصلة عليا).",
      "بعد الحروف القوية p ç t k s ş h f تتحوّل إلى -te / -ta: sokak ← sokakta (في الشارع)."
    ],
    examples:[["Evdeyim.","أنا في البيت."],["Okulda.","في المدرسة."],["Masada.","على الطاولة."],["İş yerinde.","في مكان العمل."]],
    ex:[
      {t:"fill", q:"«في البيت»: ev + ?", a:["evde"], why:"آخر حركة e ← -de."},
      {t:"choose", q:"«في المدرسة»: okul + ?", opts:["okulde","okulda"], a:1, why:"آخر حركة u ← -da."},
      {t:"choose", q:"«في الشارع»: sokak + ?", opts:["sokakda","sokakta"], a:1, why:"بعد k القوية ← -ta."}
    ]
  },
  {
    id:"a11", level:"A1", title:"حالة المفعول به", sub:"-i / -ı / -u / -ü",
    sections:[
      "عندما يكون المفعول معيّنا («الكتابَ» لا «كتابا») نضيف -i/-ı/-u/-ü حسب الرباعي.",
      "Kitabı okuyorum = أقرأ الكتابَ (معيّن). Kitap okuyorum = أقرأ كتابا (عام، بلا لاحقة).",
      "بعد الحركة تُدخل y: araba ← arabayı. ولاحظ ليونة kitap ← kitabı (p←b)."
    ],
    examples:[["Kapıyı aç.","افتح البابَ."],["Onu görüyorum.","أراه."],["Filmi izledik.","شاهدنا الفيلمَ."],["Seni seviyorum.","أحبّكَ."]],
    ex:[
      {t:"choose", q:"«أقرأ الكتابَ»:", opts:["Kitap okuyorum","Kitabı okuyorum"], a:1, why:"مفعول معيّن ← لاحقة -ı."},
      {t:"fill", q:"«السيارةَ» (مفعول): araba + ?", a:["arabayı"], why:"تنتهي بحركة ← y ← arabayı."},
      {t:"build", q:"رتّب: «أحبّكَ.»", tokens:["Seni","seviyorum"], a:["Seni","seviyorum"], why:"sen ← seni (كافُ المفعول)."}
    ]
  },
  {
    id:"a12", level:"A2", title:"حالة الاتجاه", sub:"-e / -a (إلى)",
    sections:[
      "الاتجاه «إلى» مكان أو شخص = -e / -a حسب الثنائي، وبعد الحركة تُدخل y.",
      "ev ← eve (إلى البيت)، okul ← okula (إلى المدرسة)، İstanbul'a (إلى إسطنبول).",
      "تُستعمل مع أفعال كثيرة: bakmak (ينظر إلى)، gitmek (يذهب إلى). Bana bak = انظر إليّ."
    ],
    examples:[["Eve gidiyorum.","أذهب إلى البيت."],["Okula gitti.","ذهب إلى المدرسة."],["Bana ver.","أعطِني."],["Sana söyleyeceğim.","سأقول لك."]],
    ex:[
      {t:"fill", q:"«إلى المدرسة»: okul + ?", a:["okula"], why:"آخر حركة u ← -a."},
      {t:"choose", q:"«أذهب إلى البيت»:", opts:["Evde gidiyorum","Eve gidiyorum"], a:1, why:"الاتجاه «إلى البيت» ← eve."},
      {t:"fill", q:"«إليّ»: ben تصير ?", a:["bana"], why:"ben شاذّة في الاتجاه ← bana."}
    ]
  },
  {
    id:"a13", level:"A2", title:"حالة الابتداء", sub:"-den / -dan (من)",
    sections:[
      "«من» مكان أو مصدر = -den / -dan حسب الثنائي، وتتحوّل إلى -ten/-tan بعد p ç t k s ş h f.",
      "ev ← evden (من البيت)، İstanbul'dan (من إسطنبول)، uçak ← uçaktan (من الطائرة).",
      "تُستعمل أيضا للسببية وللمقارنة: senden uzun = أطول منك."
    ],
    examples:[["Evden çıktım.","خرجتُ من البيت."],["Nereden geliyorsun?","من أين تأتي؟"],["Benden büyük.","أكبر منّي."],["Korkudan.","من الخوف."]],
    ex:[
      {t:"fill", q:"«من البيت»: ev + ?", a:["evden"], why:"آخر حركة e ← -den."},
      {t:"choose", q:"«من الطائرة»: uçak + ?", opts:["uçakdan","uçaktan"], a:1, why:"بعد k ← -tan."},
      {t:"build", q:"رتّب: «من أين تأتي؟»", tokens:["Nereden","geliyorsun"], a:["Nereden","geliyorsun"], why:"nere+den = من أين."}
    ]
  },
  {
    id:"a14", level:"A2", title:"لواحق الملكية", sub:"بيتي، بيتك، بيته…",
    sections:[
      "تُعبّر التركية عن «ملكي/ملكك» بلواحق على الاسم حسب الرباعي.",
      "-(I)m لي، -(I)n لك، -(s)I له، -(I)mIz لنا، -(I)nIz لكم، -lArI لهم.",
      "ev ← evim (بيتي)، evin (بيتك)، evi (بيته)، evimiz (بيتنا).",
      "بعد الحركة: araba ← arabam (سيارتي)، arabası (سيارته)."
    ],
    examples:[["Adım Ali.","اسمي علي."],["Annen nasıl?","كيف حال أمّك؟"],["Arabası yeni.","سيارته جديدة."],["Evimiz küçük.","بيتنا صغير."]],
    ex:[
      {t:"fill", q:"«بيتي»: ev + ?", a:["evim"], why:"المتكلم ← -im."},
      {t:"fill", q:"«اسمك»: ad → ?", a:["adın"], why:"«لك» ← -ın ← adın."},
      {t:"choose", q:"«سيارته»: araba + ?", opts:["arabam","arabası"], a:1, why:"الغائب بعد حركة ← -sı."}
    ]
  },
  {
    id:"a15", level:"A2", title:"الإضافة", sub:"إضافة اسم إلى اسم",
    sections:[
      "«س من ص» تأخذ لاحقتين: المضاف إليه يأخذ -in، والمضاف يأخذ -i.",
      "öğretmenin arabası = سيارة المعلّم (öğretmen+in araba+sı).",
      "Türkiye'nin başkenti = عاصمة تركيا. هذا التركيب المزدوج شائع جدا."
    ],
    examples:[["Ali'nin evi","بيت علي"],["okulun bahçesi","حديقة المدرسة"],["kızın adı","اسم البنت"],["günün sonu","نهاية اليوم"]],
    ex:[
      {t:"build", q:"رتّب: «سيارة المعلّم»", tokens:["öğretmenin","arabası"], a:["öğretmenin","arabası"], why:"المضاف إليه +in، والمضاف +sı."},
      {t:"choose", q:"«اسم البنت»:", opts:["kız ad","kızın adı"], a:1, why:"الطرفان مُعلّمان: kız-ın ad-ı."}
    ]
  },
  {
    id:"a16", level:"A2", title:"الزمن الماضي", sub:"-di (فعَل / كان)",
    sections:[
      "الماضي المعيّن = -di/-dı/-du/-dü حسب الرباعي، ويتحوّل إلى -ti/-tı/-tu/-tü بعد p ç t k s ş h f.",
      "gelmek ← geldim (جئتُ)، geldin، geldi، geldik، geldiniz، geldiler.",
      "gitmek ← gittim (ذهبتُ — تتحوّل t). وهو ماضٍ مؤكّد مشهود."
    ],
    examples:[["Geldim.","جئتُ."],["Ne oldu?","ماذا حدث؟"],["Dün çalıştım.","عملتُ أمس."],["Onu gördük.","رأيناه."]],
    ex:[
      {t:"fill", q:"«جئتُ»: gel + ?", a:["geldim"], why:"gel-di-m."},
      {t:"choose", q:"«ذهبتُ» (gitmek):", opts:["gitdim","gittim"], a:1, why:"بعد t تتحوّل ← gittim."},
      {t:"build", q:"رتّب: «ماذا حدث؟»", tokens:["Ne","oldu"], a:["Ne","oldu"], why:"ol-du = حدث/صار."}
    ]
  },
  {
    id:"a17", level:"B1", title:"الأعداد", sub:"الأصلية والترتيبية والكسرية",
    sections:[
      "الأعداد الأصلية: bir (1)، iki (2)، üç (3)، dört (4)، beş (5)، altı (6)، yedi (7)، sekiz (8)، dokuz (9)، on (10).",
      "الأعداد الترتيبية تُصاغ باللاحقة -(I)ncI: birinci (الأول)، ikinci (الثاني)، üçüncü (الثالث)، beşinci (الخامس).",
      "الكسور: نصف = yarım، ومنتصف الشيء = yarı؛ والربع = çeyrek. مثال: bir çeyrek saat = ربع ساعة، yarım ekmek = نصف رغيف.",
      "لبناء كسر عام يأتي المخرج في حالة المكان ثم البسط: üçte iki = اثنان من ثلاثة (٢/٣)."
    ],
    examples:[["birinci gün","اليوم الأول"],["üçüncü kat","الطابق الثالث"],["yarım saat","نصف ساعة"],["üçte bir","ثلث (١/٣)"]],
    ex:[
      {t:"choose", q:"«الأول»:", opts:["birinci","birlik"], a:0, why:"الترتيبي باللاحقة -inci."},
      {t:"fill", q:"«الخامس» من beş:", a:["beşinci"], why:"beş + inci ← beşinci."},
      {t:"choose", q:"«نصف ساعة»:", opts:["yarım saat","çeyrek saat"], a:0, why:"yarım = نصف؛ çeyrek = ربع."}
    ]
  },
  {
    id:"a18", level:"B1", title:"الصفات: المقارنة والتفضيل", sub:"daha / en",
    sections:[
      "«أكثر X» = daha + الصفة. «الأكثر X» = en + الصفة.",
      "daha büyük = أكبر، en büyük = الأكبر.",
      "«من» في المقارنة تأخذ لاحقة الابتداء -den: Benden uzun = أطول منّي. Ali Ayşe'den hızlı = علي أسرع من عائشة."
    ],
    examples:[["Bu daha iyi.","هذا أفضل."],["En güzel şehir.","أجمل مدينة."],["Senden büyüğüm.","أنا أكبر منك."],["Daha yavaş konuş.","تكلّم أبطأ."]],
    ex:[
      {t:"choose", q:"«أكبر بيت»:", opts:["daha büyük ev","en büyük ev"], a:1, why:"en = الأكثر/التفضيل."},
      {t:"build", q:"رتّب: «أطول منّي» (uzun)", tokens:["benden","uzun"], a:["benden","uzun"], why:"«منّي» = benden (حالة الابتداء)."}
    ]
  },
  {
    id:"a19", level:"A2", title:"الزمن المستقبل", sub:"-ecek (سوف)",
    sections:[
      "المستقبل = -ecek / -acak حسب الثنائي + لاحقة الضمير، وبعد الحركة تُدخل y.",
      "gelmek ← geleceğim (سآتي — تلين k إلى ğ قبل الحركة)، geleceksin، gelecek، geleceğiz.",
      "gitmek ← gideceğim (تلين t إلى d). شائع وأساسي للتعبير عن الخطط."
    ],
    examples:[["Yarın geleceğim.","سآتي غدا."],["Ne yapacaksın?","ماذا ستفعل؟"],["Görüşeceğiz.","سنلتقي."],["Yağmur yağacak.","ستمطر."]],
    ex:[
      {t:"fill", q:"«سآتي»: gel + ecek + im", a:["geleceğim"], why:"k←ğ قبل الحركة ← geleceğim."},
      {t:"choose", q:"«ماذا ستفعل؟»:", opts:["Ne yapıyorsun?","Ne yapacaksın?"], a:1, why:"-acak = المستقبل."},
      {t:"build", q:"رتّب: «ستمطر.»", tokens:["Yağmur","yağacak"], a:["Yağmur","yağacak"], why:"yağ-acak = ستمطر."}
    ]
  },
  {
    id:"a20", level:"A2", title:"الزمن الواسع", sub:"-ir (العادة والحقائق)",
    sections:[
      "الزمن الواسع للعادات والحقائق العامة والعروض. اللاحقة -r بعد الحركة، وإلا -ir/-ır/-ur/-ür أو -er/-ar.",
      "içmek ← içerim (أشرب)، gelmek ← gelirim (آتي)، yapmak ← yaparım (أفعل).",
      "النفي شاذّ: -mem/-mez. gelmem (لا آتي)، gelmez (لا يأتي).",
      "يُستعمل للعرض المهذّب: Çay içer misin? = هل تشرب شايا؟"
    ],
    examples:[["Her sabah kahve içerim.","أشرب القهوة كل صباح."],["O sigara içmez.","هو لا يدخّن."],["Yardım ederim.","سأساعد."],["Çay içer misin?","هل تشرب شايا؟"]],
    ex:[
      {t:"choose", q:"«أشرب القهوة كل يوم»:", opts:["Kahve içiyorum","Her gün kahve içerim"], a:1, why:"العادة ← الزمن الواسع içerim."},
      {t:"fill", q:"«لا يأتي»: gel + النفي في الواسع", a:["gelmez"], why:"نفي الواسع للغائب ← -mez."}
    ]
  }
];
