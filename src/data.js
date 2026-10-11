export const shop = {
  phoneDisplay: '7443 1747',
  phoneTel: '+97474431747',
  whatsapp: '97474431747',
  cr: '14426/29',
  shopNo: '13',
  hoursEn: '9:00 AM – 10:00 PM',
  hoursAr: '٩:٠٠ ص – ١٠:٠٠ م',
  brandDomain: 'usedfurniture.qa',
}

export const address = {
  en: ['Shop 13, New Souq Al Haraj', 'Al Wakrah Road, near Barwa Village', 'Doha, Qatar'],
  ar: ['محل ١٣، سوق الحراج الجديد', 'طريق الوكرة، قرب قرية بروة', 'الدوحة، قطر'],
  bn: ['দোকান ১৩, নিউ সুক আল হারাজ', 'আল ওয়াকরাহ রোড, বারওয়া ভিলেজের কাছে', 'দোহা, কাতার'],
  hi: ['दुकान 13, न्यू सूक अल हराज', 'अल वकराह रोड, बरवा विलेज के पास', 'दोहा, क़तर'],
}

export function hoursFor(lang) {
  if (lang === 'ar') return shop.hoursAr
  if (lang === 'bn') return 'সকাল ৯:০০ – রাত ১০:০০'
  if (lang === 'hi') return 'सुबह 9:00 – रात 10:00'
  return shop.hoursEn
}

export function pieceCopy(piece, lang) {
  return { ...piece.en, ...(piece[lang] || {}), ...(pieceNames[piece.slug]?.[lang] || {}) }
}

export const mapsSearch =
  'https://www.google.com/maps/search/?api=1&query=New+Souq+Al+Haraj+Doha+Qatar'

export const mapsDirections =
  'https://www.google.com/maps/dir/?api=1&destination=New+Souq+Al+Haraj+Doha+Qatar'

export const categoryIds = ['sofas', 'beds', 'wardrobes', 'tables', 'appliances', 'office']

export const categoryCovers = {
  sofas: '/images/sofa-ivory.jpg',
  beds: '/images/floor-silver-bed.jpg',
  wardrobes: '/images/floor-grey-wall.jpg',
  tables: '/images/floor-dining.jpg',
  appliances: '/images/fridge.jpg',
  office: '/images/office.jpg',
}

export const pieces = [
  {
    slug: 'white-gloss-bedroom',
    category: 'beds',
    image: '/images/floor-white-bed.jpg',
    price: 2400,
    tags: ['bed', 'bedroom', 'dresser', 'سرير', 'غرفة', 'أبيض'],
    en: {
      name: 'White gloss bedroom set',
      note: 'Bed, mattress, and dressing table photographed in the shop. Ask if the lamps and side tables are still with it.',
    },
    ar: {
      name: 'طقم غرفة نوم أبيض لامع',
      note: 'سرير ومرتبة وتسريحة مصوّرة في المحل. اسأل إن كانت الاباجورات والكومودينو ما زالت معها.',
    },
  },
  {
    slug: 'silver-bedroom-suite',
    category: 'beds',
    image: '/images/floor-silver-bed.jpg',
    price: 3200,
    tags: ['bed', 'silver', 'bedroom', 'سرير', 'فضي'],
    en: {
      name: 'Silver bedroom suite',
      note: 'Upholstered bed with a silver dresser and side tables. A full room from the floor, not a catalogue render.',
    },
    ar: {
      name: 'طقم غرفة فضي',
      note: 'سرير منجد مع تسريحة فضية وكومودينو. غرفة كاملة من المعرض، وليست صورة كتالوج.',
    },
  },
  {
    slug: 'cream-storage-bed',
    category: 'beds',
    image: '/images/floor-cream-bed.jpg',
    price: 1850,
    tags: ['bed', 'storage', 'cream', 'سرير', 'تخزين'],
    en: {
      name: 'Cream storage bed',
      note: 'Panel headboard, drawers in the base, and a tall chest beside it.',
    },
    ar: {
      name: 'سرير كريمي بتخزين',
      note: 'رأس سرير مقسم، أدراج في القاعدة، وخزانة طويلة بجانبه.',
    },
  },
  {
    slug: 'white-drawer-bed',
    category: 'beds',
    image: '/images/floor-drawer-bed.jpg',
    price: 1650,
    tags: ['bed', 'drawers', 'white', 'سرير', 'أدراج'],
    en: {
      name: 'White bed with drawers',
      note: 'Slatted headboard and under-bed drawers. Useful when the room has no separate chest.',
    },
    ar: {
      name: 'سرير أبيض بأدراج',
      note: 'رأس سرير بشرائح وأدراج تحت السرير. مفيد إذا الغرفة بدون خزانة منفصلة.',
    },
  },
  {
    slug: 'champagne-bed',
    category: 'beds',
    image: '/images/floor-champagne.jpg',
    price: 2100,
    tags: ['bed', 'tufted', 'mirror', 'سرير', 'منجد'],
    en: {
      name: 'Champagne tufted bed',
      note: 'Buttoned headboard with mirrored side tables and a tall chest. Photographed on the floor.',
    },
    ar: {
      name: 'سرير شامبين منجد',
      note: 'رأس سرير مزرّر مع كومودينو مرايا وخزانة طويلة. مصوّر في المعرض.',
    },
  },
  {
    slug: 'white-daybed',
    category: 'beds',
    image: '/images/floor-daybed.jpg',
    price: 950,
    tags: ['daybed', 'single', 'سرير', 'نهاري'],
    en: {
      name: 'White daybed with drawers',
      note: 'A single daybed with three drawers in the base. Still wrapped when we photographed it.',
    },
    ar: {
      name: 'سرير نهاري أبيض بأدراج',
      note: 'سرير نهاري مفرد بثلاثة أدراج في القاعدة. كان ما زال مغلفًا وقت التصوير.',
    },
  },
  {
    slug: 'race-car-bed',
    category: 'beds',
    image: '/images/floor-race-bed.jpg',
    price: 750,
    tags: ['kids', 'bed', 'car', 'سرير', 'أطفال'],
    en: {
      name: 'Race-car children’s bed',
      note: 'A red car frame for a child’s room. Mattress not included in the photograph.',
    },
    ar: {
      name: 'سرير أطفال بشكل سيارة',
      note: 'هيكل سيارة أحمر لغرفة طفل. المرتبة غير ظاهرة في الصورة.',
    },
  },
  {
    slug: 'white-twin-beds',
    category: 'beds',
    image: '/images/floor-twin-beds.jpg',
    price: 1100,
    tags: ['twin', 'kids', 'bed', 'سرير', 'مفرد'],
    en: {
      name: 'Pair of white beds',
      note: 'Two matching white frames. Ask whether they are sold together.',
    },
    ar: {
      name: 'سريران أبيضان',
      note: 'هيكلان أبيضان متطابقان. اسأل إن كانا يباعان معًا.',
    },
  },
  {
    slug: 'single-room-wardrobes',
    category: 'wardrobes',
    image: '/images/floor-singles.jpg',
    price: 1600,
    tags: ['wardrobe', 'single', 'bedroom', 'خزانة', 'مفرد'],
    en: {
      name: 'White wardrobes and single beds',
      note: 'A simple room: single beds, bedside tables, and tall white wardrobes.',
    },
    ar: {
      name: 'خزائن بيضاء وأسرة مفردة',
      note: 'غرفة بسيطة: أسرة مفردة وكومودينو وخزائن بيضاء طويلة.',
    },
  },
  {
    slug: 'grey-dressing-wall',
    category: 'wardrobes',
    image: '/images/floor-grey-wall.jpg',
    price: 2800,
    tags: ['wardrobe', 'dresser', 'mirror', 'خزانة', 'تسريحة'],
    en: {
      name: 'Grey dressing wall',
      note: 'A full wall of cupboards, mirrors, and a dressing table. Measure the wall before you reserve it.',
    },
    ar: {
      name: 'جدار تسريحة رمادي',
      note: 'جدار كامل من الخزائن والمرايا والتسريحة. قِس الجدار قبل الحجز.',
    },
  },
  {
    slug: 'panel-bedroom-wall',
    category: 'wardrobes',
    image: '/images/floor-panel-wall.jpg',
    price: 2600,
    tags: ['wardrobe', 'dresser', 'bedroom', 'خزانة', 'غرفة'],
    en: {
      name: 'Panel bedroom wall',
      note: 'Gloss overhead cupboards with a grey upholstered headboard panel and dresser.',
    },
    ar: {
      name: 'جدار غرفة بألواح',
      note: 'خزائن علوية لامعة مع لوح رأس سرير رمادي وتسريحة.',
    },
  },
  {
    slug: 'carved-dressing-set',
    category: 'wardrobes',
    image: '/images/floor-carved.jpg',
    price: 1900,
    tags: ['dresser', 'mirror', 'carved', 'تسريحة', 'مرآة'],
    en: {
      name: 'Carved cream dressing set',
      note: 'Ornate mirror, curved dresser, and a matching bedside chest.',
    },
    ar: {
      name: 'طقم تسريحة كريمي منحوت',
      note: 'مرآة مزخرفة وتسريحة منحنية وكومودينو مطابق.',
    },
  },
  {
    slug: 'eight-seat-dining',
    category: 'tables',
    image: '/images/floor-dining.jpg',
    price: 2200,
    tags: ['dining', 'table', 'chairs', 'سفرة', 'كراسي'],
    en: {
      name: 'White dining table, eight chairs',
      note: 'Gloss white top and patterned chairs, photographed in the shop. Count the chairs with us before you come.',
    },
    ar: {
      name: 'سفرة بيضاء بثمانية كراسي',
      note: 'سطح أبيض لامع وكراسي منقوشة، مصوّرة في المحل. عدّ الكراسي معنا قبل الزيارة.',
    },
  },
  {
    slug: 'stone-tv-unit',
    category: 'tables',
    image: '/images/floor-tv.jpg',
    price: 850,
    tags: ['tv', 'console', 'table', 'طاولة', 'تلفزيون'],
    en: {
      name: 'Stone-top TV unit',
      note: 'A long low console with a pale stone top and wood-front drawers.',
    },
    ar: {
      name: 'طاولة تلفزيون بسطح حجري',
      note: 'كونسول طويل منخفض بسطح حجري فاتح وواجهات خشب.',
    },
  },
  {
    slug: 'silver-floor-vases',
    category: 'tables',
    image: '/images/floor-vases.jpg',
    price: 280,
    tags: ['vase', 'decor', 'مزهرية'],
    en: {
      name: 'Pair of silver floor vases',
      note: 'Two tall silver vases from the showroom floor. Flowers in the photo are styling.',
    },
    ar: {
      name: 'مزهريتان فضيتان طويلتان',
      note: 'مزهريتان فضيتان طويلتان من أرض المعرض. الورد في الصورة للتنسيق.',
    },
  },
  {
    slug: 'grey-three-seater',
    category: 'sofas',
    image: '/images/sofa-cloud.jpg',
    price: 1650,
    tags: ['sofa', 'grey', 'lounge', 'كنبة', 'رمادية', 'أريكة'],
    en: {
      name: 'Grey three-seater',
      note: 'A calm fabric sofa for an apartment lounge. Deep enough for a film, tidy enough for a majlis corner.',
    },
    ar: {
      name: 'كنبة ثلاثية رمادية',
      note: 'كنبة قماش هادئة تناسب صالة الشقة. مريحة للجلوس ومرتبة في زاوية المجلس.',
    },
  },
  {
    slug: 'ivory-lounge-sofa',
    category: 'sofas',
    image: '/images/sofa-ivory.jpg',
    price: 2200,
    tags: ['sofa', 'ivory', 'lounge', 'كنبة', 'عاجية'],
    en: {
      name: 'Ivory lounge sofa',
      note: 'Light upholstery that lifts a darker room. A straightforward family seat, not a showpiece that is afraid of use.',
    },
    ar: {
      name: 'كنبة صالة عاجية',
      note: 'تنجيد فاتح يفتح الغرفة الداكنة. مقعد عائلي عملي، وليس قطعة للعرض فقط.',
    },
  },
  {
    slug: 'corner-sectional',
    category: 'sofas',
    image: '/images/sofa-sectional.jpg',
    price: 2800,
    tags: ['sofa', 'sectional', 'corner', 'كنبة', 'زاوية'],
    en: {
      name: 'Corner sectional',
      note: 'For a wider sitting room. Ask us to confirm the size before you plan the wall.',
    },
    ar: {
      name: 'كنبة زاوية',
      note: 'لمجلس أوسع. أكّد المقاس معنا قبل ما ترتب الجدار.',
    },
  },
  {
    slug: 'lounge-armchair',
    category: 'sofas',
    image: '/images/armchair.jpg',
    price: 750,
    tags: ['chair', 'armchair', 'كرسي', 'استرخاء'],
    en: {
      name: 'Lounge armchair',
      note: 'One good chair changes a corner. Useful beside a sofa you already own.',
    },
    ar: {
      name: 'كرسي استرخاء',
      note: 'كرسي واحد يغيّر الزاوية. مناسب بجانب كنبة عندك.',
    },
  },
  {
    slug: 'linen-double-bed',
    category: 'beds',
    image: '/images/bed-linen.jpg',
    price: 1450,
    tags: ['bed', 'double', 'سرير', 'مزدوج'],
    en: {
      name: 'Linen double bed',
      note: 'A clean double for a guest room or a first flat. Mattress is separate — ask what is with it today.',
    },
    ar: {
      name: 'سرير مزدوج كتان',
      note: 'سرير مزدوج مرتب لغرفة ضيوف أو شقة أولى. المرتبة منفصلة — اسأل ماذا معها اليوم.',
    },
  },
  {
    slug: 'upholstered-bed',
    category: 'beds',
    image: '/images/bed-tufted.jpg',
    price: 1950,
    tags: ['bed', 'upholstered', 'سرير', 'منجد'],
    en: {
      name: 'Upholstered bed',
      note: 'A taller headboard and a softer look. We check the frame before it leaves the shop.',
    },
    ar: {
      name: 'سرير منجد',
      note: 'رأس سرير أوضح ومظهر أنعم. نفحص الهيكل قبل ما يطلع من المحل.',
    },
  },
  {
    slug: 'wood-wardrobe',
    category: 'wardrobes',
    image: '/images/wardrobe.jpg',
    price: 1350,
    tags: ['wardrobe', 'closet', 'خزانة', 'دولاب'],
    en: {
      name: 'Wood wardrobe',
      note: 'Hanging space for a bedroom that was rented without storage. Measure the lift and the door before pickup.',
    },
    ar: {
      name: 'خزانة ملابس خشبية',
      note: 'تعليق يكفي غرفة نوم أجّرت بدون تخزين. قِس المصعد والباب قبل الاستلام.',
    },
  },
  {
    slug: 'six-seat-dining',
    category: 'tables',
    image: '/images/dining.jpg',
    price: 2400,
    tags: ['dining', 'table', 'chairs', 'سفرة', 'طاولة', 'كراسي'],
    en: {
      name: 'Six-seat dining set',
      note: 'Table and chairs for a family meal. Chair count on the floor can vary — we confirm before you come.',
    },
    ar: {
      name: 'طقم سفرة لستة',
      note: 'طاولة وكراسي لوجبة العائلة. عدد الكراسي في المحل قد يختلف — نؤكده قبل الزيارة.',
    },
  },
  {
    slug: 'round-coffee-table',
    category: 'tables',
    image: '/images/table-wood.jpg',
    price: 480,
    tags: ['coffee', 'table', 'طاولة', 'قهوة'],
    en: {
      name: 'Round coffee table',
      note: 'A small table that finishes a sofa you buy from us, or one you already have at home.',
    },
    ar: {
      name: 'طاولة قهوة دائرية',
      note: 'طاولة صغيرة تكمّل كنبة تشتريها منا، أو كنبة عندك في البيت.',
    },
  },
  {
    slug: 'oak-sideboard',
    category: 'tables',
    image: '/images/cabinet.jpg',
    price: 980,
    tags: ['sideboard', 'buffet', 'storage', 'بوفيه', 'تخزين'],
    en: {
      name: 'Oak sideboard',
      note: 'Closed storage for a dining wall. A practical piece when kitchen cabinets are already full.',
    },
    ar: {
      name: 'بوفيه خشبي',
      note: 'تخزين مغلق لجدار السفرة. قطعة عملية إذا خزائن المطبخ ممتلئة.',
    },
  },
  {
    slug: 'refrigerator',
    category: 'appliances',
    image: '/images/fridge.jpg',
    price: 890,
    tags: ['fridge', 'refrigerator', 'appliance', 'ثلاجة'],
    en: {
      name: 'Refrigerator',
      note: 'We plug appliances in at the shop. Ask for the size and whether it is frost-free before you reserve it.',
    },
    ar: {
      name: 'ثلاجة',
      note: 'نشغّل الأجهزة في المحل. اسأل عن المقاس وعن نظام بدون ثلج قبل الحجز.',
    },
  },
  {
    slug: 'front-load-washer',
    category: 'appliances',
    image: '/images/washer.jpg',
    price: 690,
    tags: ['washer', 'washing', 'machine', 'غسالة'],
    en: {
      name: 'Front-load washer',
      note: 'A working washer for a flat that was handed over empty. Confirm the capacity on WhatsApp.',
    },
    ar: {
      name: 'غسالة تعبئة أمامية',
      note: 'غسالة شغّالة لشقة تُسلّمت فاضية. أكّد السعة عبر واتساب.',
    },
  },
  {
    slug: 'writing-desk',
    category: 'office',
    image: '/images/desk.jpg',
    price: 850,
    tags: ['desk', 'office', 'مكتب'],
    en: {
      name: 'Writing desk',
      note: 'A clear desk for a home office or a staff room. Cable holes and drawers vary by the piece in stock.',
    },
    ar: {
      name: 'مكتب كتابة',
      note: 'مكتب مرتب لمكتب منزلي أو غرفة موظفين. فتحات الأسلاك والأدراج تختلف حسب القطعة الموجودة.',
    },
  },
  {
    slug: 'desk-and-chair',
    category: 'office',
    image: '/images/office.jpg',
    price: 1200,
    tags: ['desk', 'chair', 'office', 'مكتب', 'كرسي'],
    en: {
      name: 'Desk and chair',
      note: 'A paired set when you need to sit down to work the same day you collect the keys.',
    },
    ar: {
      name: 'مكتب وكرسي',
      note: 'طقم جاهز إذا تحتاج تشتغل في نفس يوم استلام المفاتيح.',
    },
  },
]

const moneyLocale = { en: 'en-QA', ar: 'ar-QA', bn: 'bn-BD', hi: 'hi-IN' }
const countLocale = { en: 'en', ar: 'ar', bn: 'bn', hi: 'hi' }

export function formatQar(value, lang) {
  return new Intl.NumberFormat(moneyLocale[lang] || 'en-QA', {
    style: 'currency',
    currency: 'QAR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatCount(value, lang) {
  return new Intl.NumberFormat(countLocale[lang] || 'en').format(value)
}

const pieceNames = {
  'white-gloss-bedroom': {
    bn: {
      name: 'সাদা চকচকে বেডরুম সেট',
      note: 'দোকানে তোলা বিছানা, গদি ও ড্রেসিং টেবিল। বাতি ও সাইড টেবিল এখনও আছে কিনা জিজ্ঞেস করুন।',
    },
    hi: {
      name: 'सफ़ेद ग्लॉस बेडरूम सेट',
      note: 'दुकान में खींची पलंग, गद्दा और ड्रेसिंग मेज़। पूछें कि लैंप और साइड टेबल अभी साथ हैं या नहीं।',
    },
  },
  'silver-bedroom-suite': {
    bn: {
      name: 'রুপালি বেডরুম সেট',
      note: 'গদি-ঢাকা বিছানা, রুপালি ড্রেসার ও সাইড টেবিল। মেঝের পুরো ঘর, ক্যাটালগের ছবি নয়।',
    },
    hi: {
      name: 'सिल्वर बेडरूम सेट',
      note: 'गद्देदार पलंग, सिल्वर ड्रेसर और साइड टेबल। मंज़िल का पूरा कमरा, कैटलॉग की तस्वीर नहीं।',
    },
  },
  'cream-storage-bed': {
    bn: {
      name: 'ক্রিম স্টোরেজ বিছানা',
      note: 'প্যানেল হেডবোর্ড, বেসের ড্রয়ার, আর পাশে একটি লম্বা চেস্ট।',
    },
    hi: {
      name: 'क्रीम स्टोरेज पलंग',
      note: 'पैनल हेडबोर्ड, बेस में दराज़, और बगल में एक लंबी चेस्ट।',
    },
  },
  'white-drawer-bed': {
    bn: {
      name: 'ড্রয়ারসহ সাদা বিছানা',
      note: 'স্ল্যাটেড হেডবোর্ড ও বিছানার নিচে ড্রয়ার। আলাদা চেস্ট না থাকলে কাজে লাগে।',
    },
    hi: {
      name: 'दराज़ वाला सफ़ेद पलंग',
      note: 'स्लैट हेडबोर्ड और पलंग के नीचे दराज़। जब कमरे में अलग चेस्ट न हो, तब काम आता है।',
    },
  },
  'champagne-bed': {
    bn: {
      name: 'শ্যাম্পেন টুফটেড বিছানা',
      note: 'বোতাম-আঁটা হেডবোর্ড, আয়না সাইড টেবিল ও লম্বা চেস্ট। মেঝেতে তোলা।',
    },
    hi: {
      name: 'शैम्पेन टफ़्टेड पलंग',
      note: 'बटन वाला हेडबोर्ड, शीशे की साइड टेबल और लंबी चेस्ट। मंज़िल पर खींची तस्वीर।',
    },
  },
  'white-daybed': {
    bn: {
      name: 'ড্রয়ারসহ সাদা ডে-বেড',
      note: 'বেসে তিনটি ড্রয়ারের সিঙ্গেল ডে-বেড। ছবির সময় এখনও মোড়ানো ছিল।',
    },
    hi: {
      name: 'दराज़ वाला सफ़ेद डे-बेड',
      note: 'बेस में तीन दराज़ वाला सिंगल डे-बेड। फ़ोटो के समय अभी लिपटा हुआ था।',
    },
  },
  'race-car-bed': {
    bn: {
      name: 'রেস-কার শিশু বিছানা',
      note: 'শিশু ঘরের জন্য লাল গাড়ির ফ্রেম। ছবিতে গদি নেই।',
    },
    hi: {
      name: 'रेस-कार बच्चों का पलंग',
      note: 'बच्चे के कमरे के लिए लाल कार का फ़्रेम। तस्वीर में गद्दा शामिल नहीं।',
    },
  },
  'white-twin-beds': {
    bn: {
      name: 'জোড়া সাদা বিছানা',
      note: 'দুটি মিলিয়ে সাদা ফ্রেম। একসঙ্গে বিক্রি হয় কিনা জিজ্ঞেস করুন।',
    },
    hi: {
      name: 'जोड़ी सफ़ेद पलंग',
      note: 'दो मेल खाते सफ़ेद फ़्रेम। पूछें कि ये साथ बिकते हैं या अलग।',
    },
  },
  'single-room-wardrobes': {
    bn: {
      name: 'সাদা আলমারি ও সিঙ্গেল বিছানা',
      note: 'সাধারণ ঘর: সিঙ্গেল বিছানা, বেডসাইড টেবিল ও লম্বা সাদা আলমারি।',
    },
    hi: {
      name: 'सफ़ेद अलमारियाँ और सिंगल पलंग',
      note: 'सादा कमरा: सिंगल पलंग, बेडसाइड टेबल और लंबी सफ़ेद अलमारियाँ।',
    },
  },
  'grey-dressing-wall': {
    bn: {
      name: 'ধূসর ড্রেসিং ওয়াল',
      note: 'আলমারি, আয়না ও ড্রেসিং টেবিলের পুরো দেয়াল। বুক করার আগে দেয়াল মাপুন।',
    },
    hi: {
      name: 'ग्रे ड्रेसिंग वॉल',
      note: 'अलमारी, शीशा और ड्रेसिंग मेज़ की पूरी दीवार। रिजर्व करने से पहले दीवार नाप लें।',
    },
  },
  'panel-bedroom-wall': {
    bn: {
      name: 'প্যানেল বেডরুম ওয়াল',
      note: 'চকচকে ওপরের আলমারি, ধূসর গদি-ঢাকা হেডবোর্ড প্যানেল ও ড্রেসার।',
    },
    hi: {
      name: 'पैनल बेडरूम वॉल',
      note: 'चमकदार ऊपर की अलमारियाँ, ग्रे गद्देदार हेडबोर्ड पैनल और ड्रेसर।',
    },
  },
  'carved-dressing-set': {
    bn: {
      name: 'খোদাই করা ক্রিম ড্রেসিং সেট',
      note: 'নকশা করা আয়না, বাঁকা ড্রেসার ও মিলিয়ে বেডসাইড চেস্ট।',
    },
    hi: {
      name: 'नक्काशीदार क्रीम ड्रेसिंग सेट',
      note: 'नक्काशीदार शीशा, घुमावदार ड्रेसर और मेल खाती बेडसाइड चेस्ट।',
    },
  },
  'eight-seat-dining': {
    bn: {
      name: 'সাদা ডাইনিং টেবিল, আট চেয়ার',
      note: 'চকচকে সাদা টপ ও নকশা করা চেয়ার, দোকানে তোলা। আসার আগে চেয়ার গুনে নিন।',
    },
    hi: {
      name: 'सफ़ेद डाइनिंग मेज़, आठ कुर्सियाँ',
      note: 'चमकदार सफ़ेद टॉप और नमूनेदार कुर्सियाँ, दुकान में खींची। आने से पहले कुर्सियाँ गिन लें।',
    },
  },
  'stone-tv-unit': {
    bn: {
      name: 'পাথরের টপের টিভি ইউনিট',
      note: 'ফ্যাকাশে পাথরের টপ ও কাঠের ড্রয়ারের লম্বা নিচু কনসোল।',
    },
    hi: {
      name: 'पत्थर की टॉप वाला टीवी यूनिट',
      note: 'हल्के पत्थर की टॉप और लकड़ी के दराज़ वाला लंबा नीचा कंसोल।',
    },
  },
  'silver-floor-vases': {
    bn: {
      name: 'জোড়া রুপালি মেঝের ফুলদানি',
      note: 'শোরুমের মেঝে থেকে দুটি লম্বা রুপালি ফুলদানি। ছবির ফুল সাজানোর জন্য।',
    },
    hi: {
      name: 'जोड़ी चाँदी के फ़र्श फूलदान',
      note: 'शोरूम की मंज़िल से दो लंबे चाँदी के फूलदान। तस्वीर के फूल सजावट हैं।',
    },
  },
  'grey-three-seater': {
    bn: {
      name: 'ধূসর তিন আসনের সোফা',
      note: 'ফ্ল্যাটের লাউঞ্জের জন্য শান্ত কাপড়ের সোফা। সিনেমার মতো গভীর, মজলিসের কোণের মতো গোছানো।',
    },
    hi: {
      name: 'ग्रे तीन सीटर',
      note: 'फ़्लैट के लाउंज के लिए शांत कपड़े का सोफ़ा। फ़िल्म के लिए गहरा, मजलिस के कोने के लिए साफ़-सुथरा।',
    },
  },
  'ivory-lounge-sofa': {
    bn: {
      name: 'আইভরি লাউঞ্জ সোফা',
      note: 'হালকা গদি অন্ধকার ঘরকে ফিকে করে। সাধারণ পারিবারিক আসন।',
    },
    hi: {
      name: 'आइवरी लाउंज सोफ़ा',
      note: 'हल्का गद्दा गहरे कमरे को खोल देता है। सीधी पारिवारिक सीट।',
    },
  },
  'corner-sectional': {
    bn: {
      name: 'কর্নার সেকশনাল',
      note: 'চওড়া বসার ঘরের জন্য। দেয়ালের পরিকল্পনার আগে মাপ নিশ্চিত করুন।',
    },
    hi: {
      name: 'कॉर्नर सेक्शनल',
      note: 'चौड़े बैठक के लिए। दीवार का प्लान बनाने से पहले नाप पक्का कर लें।',
    },
  },
  'lounge-armchair': {
    bn: {
      name: 'লাউঞ্জ আর্মচেয়ার',
      note: 'একটি ভালো চেয়ার কোণা বদলে দেয়। নিজের সোফার পাশেও কাজে লাগে।',
    },
    hi: {
      name: 'लाउंज आर्मचेयर',
      note: 'एक अच्छी कुर्सी कोना बदल देती है। जो सोफ़ा आपके पास है, उसके बगल भी काम आती है।',
    },
  },
  'linen-double-bed': {
    bn: {
      name: 'লিনেন ডাবল বিছানা',
      note: 'গেস্ট রুম বা প্রথম ফ্ল্যাটের পরিষ্কার ডাবল। গদি আলাদা — আজ কী আছে জিজ্ঞেস করুন।',
    },
    hi: {
      name: 'लिनन डबल पलंग',
      note: 'मेहमान कमरे या पहले फ़्लैट के लिए साफ़ डबल। गद्दा अलग है — आज क्या साथ है पूछें।',
    },
  },
  'upholstered-bed': {
    bn: {
      name: 'গদি-ঢাকা বিছানা',
      note: 'উঁচু হেডবোর্ড ও নরম চেহারা। দোকান থেকে বের হওয়ার আগে ফ্রেম দেখে নিই।',
    },
    hi: {
      name: 'गद्देदार पलंग',
      note: 'ऊँचा हेडबोर्ड और नरम रूप। दुकान से निकलने से पहले फ़्रेम जाँच लेते हैं।',
    },
  },
  'wood-wardrobe': {
    bn: {
      name: 'কাঠের আলমারি',
      note: 'স্টোরেজ ছাড়া ভাড়া ঘরের ঝোলানোর জায়গা। পিকআপের আগে লিফট ও দরজা মাপুন।',
    },
    hi: {
      name: 'लकड़ी की अलमारी',
      note: 'बिना स्टोरेज वाले किराये के कमरे के लिए टाँगने की जगह। पिकअप से पहले लिफ़्ट और दरवाज़ा नापें।',
    },
  },
  'six-seat-dining': {
    bn: {
      name: 'ছয় আসনের ডাইনিং সেট',
      note: 'পারিবারিক খাবারের টেবিল ও চেয়ার। মেঝেতে চেয়ারের সংখ্যা বদলাতে পারে — আসার আগে নিশ্চিত করি।',
    },
    hi: {
      name: 'छह सीट डाइनिंग सेट',
      note: 'पारिवारिक खाने की मेज़ और कुर्सियाँ। मंज़िल पर कुर्सियों की गिनती बदल सकती है — आने से पहले पक्का करते हैं।',
    },
  },
  'round-coffee-table': {
    bn: {
      name: 'গোল কফি টেবিল',
      note: 'আমাদের সোফা বা ঘরে থাকা সোফা শেষ করতে ছোট টেবিল।',
    },
    hi: {
      name: 'गोल कॉफ़ी टेबल',
      note: 'हमारा सोफ़ा या घर का सोफ़ा पूरा करने वाली छोटी मेज़।',
    },
  },
  'oak-sideboard': {
    bn: {
      name: 'ওক সাইডবোর্ড',
      note: 'ডাইনিং দেয়ালের বন্ধ স্টোরেজ। রান্নাঘরের ক্যাবিনেট ভর্তি থাকলে কাজে লাগে।',
    },
    hi: {
      name: 'ओक साइडबोर्ड',
      note: 'डाइनिंग दीवार के लिए बंद स्टोरेज। रसोई की अलमारियाँ भरी हों तो काम आता है।',
    },
  },
  refrigerator: {
    bn: {
      name: 'ফ্রিজ',
      note: 'দোকানে যন্ত্র চালিয়ে দেখি। বুক করার আগে মাপ ও ফ্রস্ট-ফ্রি কিনা জিজ্ঞেস করুন।',
    },
    hi: {
      name: 'फ़्रिज',
      note: 'दुकान में उपकरण चलाकर देखते हैं। रिजर्व करने से पहले नाप और फ़्रॉस्ट-फ़्री है या नहीं पूछें।',
    },
  },
  'front-load-washer': {
    bn: {
      name: 'ফ্রন্ট-লোড ওয়াশিং মেশিন',
      note: 'খালি হস্তান্তর ফ্ল্যাটের জন্য চালু মেশিন। ধারণক্ষমতা হোয়াটসঅ্যাপে নিশ্চিত করুন।',
    },
    hi: {
      name: 'फ्रंट-लोड वॉशर',
      note: 'खाली सुपुर्द फ़्लैट के लिए चलती मशीन। क्षमता व्हाट्सऐप पर पक्की करें।',
    },
  },
  'writing-desk': {
    bn: {
      name: 'লেখার ডেস্ক',
      note: 'বাড়ির অফিস বা স্টাফ রুমের পরিষ্কার ডেস্ক। কেবলের ছিদ্র ও ড্রয়ার স্টক অনুযায়ী বদলায়।',
    },
    hi: {
      name: 'लिखने की मेज़',
      note: 'घर के ऑफ़िस या स्टाफ़ कमरे के लिए साफ़ मेज़। केबल के छेद और दराज़ स्टॉक के हिसाब से बदलते हैं।',
    },
  },
  'desk-and-chair': {
    bn: {
      name: 'ডেস্ক ও চেয়ার',
      note: 'চাবি নেওয়ার দিনই বসতে হলে জোড়া সেট।',
    },
    hi: {
      name: 'मेज़ और कुर्सी',
      note: 'जिस दिन चाबी मिले उसी दिन बैठना हो, उसके लिए जोड़ी सेट।',
    },
  },
}
