/* Lale — reading & repeat sentences, graded short → long.
   Each set: {id, title, en, level, items:[[turkish, english, arabic], ...]}. */
window.LALE_READING = [
  {id:"r1", title:"İlk cümleler", en:"First sentences", level:"A1", items:[
    ["Ben bir öğrenciyim.","I am a student.","أنا طالب."],
    ["Bu benim evim.","This is my house.","هذا بيتي."],
    ["Bugün hava çok güzel.","The weather is very nice today.","الطقس جميل جدا اليوم."],
    ["Ben Türkçe öğreniyorum.","I am learning Turkish.","أنا أتعلّم التركية."],
    ["Kahvaltıda ekmek ve peynir yiyorum.","I eat bread and cheese for breakfast.","آكل الخبز والجبن في الفطور."],
    ["Annem mutfakta yemek pişiriyor.","My mother is cooking in the kitchen.","أمي تطبخ في المطبخ."],
    ["Her sabah okula yürüyerek gidiyorum.","I walk to school every morning.","أذهب إلى المدرسة مشيا كل صباح."],
    ["Akşam arkadaşımla çay içiyoruz.","In the evening we drink tea with my friend.","في المساء نشرب الشاي مع صديقي."]
  ]},
  {id:"r2", title:"Günlük hayat", en:"Daily life", level:"A2", items:[
    ["Sabah erkenden kalkıp işe gidiyorum.","I get up early in the morning and go to work.","أستيقظ باكرا وأذهب إلى العمل."],
    ["Öğle yemeğini genellikle ofiste yiyorum.","I usually have lunch at the office.","عادة أتناول الغداء في المكتب."],
    ["Hafta sonu ailemle parkta vakit geçiriyoruz.","At the weekend we spend time with my family in the park.","نقضي الوقت مع عائلتي في الحديقة في نهاية الأسبوع."],
    ["Markete gidip biraz meyve ve sebze aldım.","I went to the market and bought some fruit and vegetables.","ذهبت إلى السوق واشتريت بعض الفاكهة والخضار."],
    ["Yağmur yağdığı için bugün dışarı çıkmadık.","We didn't go out today because it was raining.","لم نخرج اليوم بسبب المطر."],
    ["Yeni bir dil öğrenmek sabır ve pratik ister.","Learning a new language takes patience and practice.","تعلّم لغة جديدة يتطلّب الصبر والممارسة."],
    ["Otobüs geç geldiği için toplantıya biraz geç kaldım.","I was a bit late for the meeting because the bus was late.","تأخّرت قليلا عن الاجتماع لأنّ الحافلة تأخّرت."]
  ]},
  {id:"r3", title:"Şehirde bir gün", en:"A day in the city", level:"A2", items:[
    ["Sabah metroyla şehir merkezine gittim.","In the morning I went to the city centre by metro.","ذهبت صباحا إلى وسط المدينة بالمترو."],
    ["Önce bankaya uğrayıp biraz para çektim.","First I stopped by the bank and withdrew some money.","أولا مررت بالبنك وسحبت بعض النقود."],
    ["Sonra bir kafede oturup kahve içtim.","Then I sat in a café and drank coffee.","ثم جلست في مقهى وشربت القهوة."],
    ["Kitapçıdan Türkçe bir roman satın aldım.","I bought a Turkish novel from the bookshop.","اشتريت رواية تركية من المكتبة."],
    ["Akşamüstü hava kararmadan eve döndüm.","I returned home in the late afternoon before it got dark.","عدت إلى البيت قبل أن يحلّ الظلام."],
    ["Bu şehir hem büyük hem de çok kalabalık.","This city is both big and very crowded.","هذه المدينة كبيرة ومزدحمة جدا."]
  ]},
  {id:"r4", title:"Uzun cümleler", en:"Longer sentences", level:"B1", items:[
    ["Eğer yarın hava güzel olursa, sahilde uzun bir yürüyüş yapmayı düşünüyorum.","If the weather is nice tomorrow, I'm thinking of taking a long walk on the beach.","إذا كان الطقس جميلا غدا، أفكّر في القيام بنزهة طويلة على الشاطئ."],
    ["Türkçeyi akıcı konuşabilmek için her gün en az yarım saat pratik yapmam gerekiyor.","To be able to speak Turkish fluently, I need to practise at least half an hour every day.","لأتمكّن من التحدّث بالتركية بطلاقة، عليّ أن أتدرّب نصف ساعة على الأقل يوميا."],
    ["Arkadaşım bana İstanbul'daki tarihi yerleri gezdirmeyi teklif ettiği için çok mutlu oldum.","I was very happy because my friend offered to show me the historical places in Istanbul.","سعدت كثيرا لأنّ صديقي عرض أن يريني الأماكن التاريخية في إسطنبول."],
    ["Doktor, sağlıklı kalmak için daha çok su içmemi ve düzenli uyumamı tavsiye etti.","The doctor advised me to drink more water and sleep regularly to stay healthy.","نصحني الطبيب بشرب المزيد من الماء والنوم بانتظام للحفاظ على صحّتي."],
    ["Uzun zamandır görmediğim ailemi ziyaret etmek için gelecek ay memleketime gideceğim.","Next month I will go to my hometown to visit my family, whom I haven't seen for a long time.","سأذهب الشهر القادم إلى مسقط رأسي لزيارة عائلتي التي لم أرها منذ زمن طويل."]
  ]},
  {id:"r5", title:"Kısa hikâye", en:"A short story", level:"B1", items:[
    ["Küçük bir köyde yaşayan yaşlı bir adam vardı.","There was an old man who lived in a small village.","كان هناك رجل عجوز يعيش في قرية صغيرة."],
    ["Her sabah bahçesindeki ağaçları sular, kuşları beslerdi.","Every morning he watered the trees in his garden and fed the birds.","كل صباح كان يسقي أشجار حديقته ويطعم الطيور."],
    ["Bir gün bahçesinde küçük, yaralı bir kuş buldu.","One day he found a small, injured bird in his garden.","ذات يوم وجد طائرا صغيرا جريحا في حديقته."],
    ["Onu eve götürdü ve iyileşene kadar ona baktı.","He took it home and looked after it until it recovered.","أخذه إلى البيت واعتنى به حتى شُفي."],
    ["Kuş iyileşince gökyüzüne uçtu, ama her yıl geri geldi.","When the bird recovered it flew into the sky, but it came back every year.","عندما شُفي الطائر طار إلى السماء، لكنّه عاد كل عام."],
    ["Yaşlı adam, iyiliğin asla boşa gitmediğini anladı.","The old man understood that kindness is never wasted.","أدرك الرجل العجوز أنّ الإحسان لا يضيع أبدا."]
  ]}
];
