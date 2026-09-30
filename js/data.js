/* ==========================================================================
   L'Aura Gastronomy - Menu Database & Food Catalog
   ========================================================================== */

const RESTAURANT_MENU = [
  {
    id: "dish-1",
    name: "Glazurlangan Shotlandiya Lososi",
    englishName: "Glazed Scottish Salmon Royale",
    category: "seafood",
    price: 185000,
    oldPrice: 215000,
    image: "./assets/images/hero-salmon.jpg",
    description: "Tillarang qovurilgan qarsildoq po'stloqli yangi losos filesi, quyuq balsamik reduksiya, rayhonli efir moyi va nordon mikroko'katlar bilan.",
    story: "Shimoliy dengizning toza suvlaridan keltirilgan yangi losos oshpazimizning 12 soatlik maxsus marinadida dam oladi va eman o'tinida qovuriladi.",
    badges: ["Chef's Pick", "Dengiz tuhfasi", "Glutensiz"],
    rating: 4.9,
    reviewsCount: 142,
    prepTime: "20-25 daqiqa",
    calories: "520 kkal",
    nutrition: {
      calories: 520,
      protein: "42g",
      fat: "24g",
      carbs: "12g",
      weight: "320g",
      percentDaily: "26%"
    },
    recipeSummary: "Eman cho'g'ida 220°C da qovurilgan losos, 12 yillik Modena balsamik siri va yangi rayhon ekstrakti.",
    ingredients: [
      "Shotlandiya yangi losos filesi (220g)",
      "Modena 12 yillik quyuq balsamik sirkasi",
      "Yangi rayhon (bazilik) ekstrakt moyi",
      "Organik dengiz tuzi va maydalangan oq murch",
      "Mikroko'katlar (amarant va no'xat kurtaklari)",
      "Yangi siqilgan laym sharbati"
    ],
    recipeSteps: [
      "1. Yangi losos filesi laym sharbati, dengiz tuzi va rayhon moyi aralashmasida 15 daqiqa dam oladi.",
      "2. Eman cho'g'i ustidagi panjarada 220°C da po'sti tillarang va qarsildoq bo'lguncha 6-8 daqiqa qovuriladi.",
      "3. Quyuq Modena balsamik reduksiyasi bilan sirlanadi va mikroko'katlar bilan bezatilib, issiq holda tortiladi."
    ],
    isSignature: true,
    options: {
      doneness: ["O'rtacha qovurilgan (Medium)", "To'liq pishgan (Well Done)"],
      sauces: ["Krem-balsamik sous (Klassik)", "Limonli sariyog' sousi (+15 000 so'm)", "Za'faronli emulsiyasi (+20 000 so'm)"],
      sides: ["Grilda pishgan yosh sabzavotlar", "Parijcha kartoshka pyuresi", "Yovvoyi qora guruch (+18 000 so'm)"]
    }
  },
  {
    id: "dish-2",
    name: "Wagyu Tomahawk Steyk (A5)",
    englishName: "Prime Wagyu Ribeye & Tomahawk",
    category: "steaks",
    price: 340000,
    oldPrice: 380000,
    image: "./assets/images/wagyu-steak.jpg",
    description: "Marmarsimon yapon Wagyu go'shti, dengiz tuzi yoriqlari, dimlangan butun sarimsoq va yangi rozmarin shoxchalari bilan jonli olovda tayyorlangan.",
    story: "45 kun quruq usulda quritilgan (dry-aged) go'sht maxsus xoskar pechida 450°C haroratda pishiriladi, go'shtning har bir bo'lagi og'izda eriydi.",
    badges: ["Premium A5", "Xoskar Gril", "100% Halol"],
    rating: 5.0,
    reviewsCount: 218,
    prepTime: "25-30 daqiqa",
    calories: "780 kkal",
    nutrition: {
      calories: 780,
      protein: "68g",
      fat: "52g",
      carbs: "4g",
      weight: "550g",
      percentDaily: "39%"
    },
    recipeSummary: "45 kun pishitilgan marmarsimon A5 go'shti, 450°C xoskar pechida rozmarin va sarimsoq bilan.",
    ingredients: [
      "Yapon Wagyu marmarsimon go'shti A5 (500g)",
      "Fleur de Sel yirik dengiz tuzi kristallari",
      "Yangi yovvoyi tog' rozmarini",
      "Eman kulida dimlangan sarimsoq boshi",
      "Sovuq siqim ekstra zaytun moyi",
      "Qora murch yoriqlari"
    ],
    recipeSteps: [
      "1. 45 kun pishitilgan Wagyu go'shti xona haroratiga keltiriladi va faqat Fleur de Sel tuzi bilan uqalanadi.",
      "2. Ispaniyaning Xoskar pechida 450°C da eman o'tini cho'g'ida har bir tomoni 2.5 daqiqadan muhrlab pishiriladi.",
      "3. Go'sht pechdan olinib, eritilgan rozmarinli sariyog'da 6 daqiqa dam olgach, o'tkir pichoq bilan tilimlanadi."
    ],
    isSignature: true,
    options: {
      doneness: ["Medium Rare (Tavsiya etiladi)", "Medium", "Medium Well", "Well Done"],
      sauces: ["Trifelli demi-glas", "Yashil murchli qaymoqli sous", "Chimichurri o'tli sous"],
      sides: ["Rozmarinli bebi-kartoshka", "Grillda pishgan makkajo'xori", "Asparagus (Qushqo'nmas) (+25 000 so'm)"]
    }
  },
  {
    id: "dish-3",
    name: "Qora Trifel Fettuccine",
    englishName: "Handmade Black Truffle Fettuccine",
    category: "hot",
    price: 145000,
    oldPrice: null,
    image: "./assets/images/truffle-pasta.jpg",
    description: "Qo'lda yoyilgan yangi pasta, 24 oylik Parmigiano-Reggiano pishlog'i, sariyog'li trifel qaymog'i va yangi qirib sepilgan Norcia qora trifeli.",
    story: "Italiyaning Modena provinsiyasidan keltirilgan organik bug'doy unidan har kuni tongda tayyorlanuvchi mualliflik pastasi.",
    badges: ["Mualliflik", "Haqiqiy Trifel", "Italiya retsepti"],
    rating: 4.8,
    reviewsCount: 96,
    prepTime: "15-20 daqiqa",
    calories: "610 kkal",
    nutrition: {
      calories: 610,
      protein: "22g",
      fat: "28g",
      carbs: "68g",
      weight: "340g",
      percentDaily: "30%"
    },
    recipeSummary: "Qo'lda yoyilgan Semolina pastasi, 24 oylik Parmigiano kremi va yangi qora trifel slayslari.",
    ingredients: [
      "Qo'lda tayyorlangan Semolina fettuccine pastasi (180g)",
      "Italiya Norcia yovvoyi qora trifeli (12g)",
      "24 oylik qari Parmigiano-Reggiano pishlog'i",
      "Alp tog'i 82.5% tabiiy sariyog'i",
      "33% yangi krem qaymoq va trifel moyi",
      "Yangi maydalangan oq murch"
    ],
    recipeSteps: [
      "1. Organik un va tuxum sarig'idan yoyilgan pasta sho'r qaynoq suvda al dente holida 3 daqiqa pishiriladi.",
      "2. Qizdirilgan tovada Alp sariyog'i, qaymoq va maydalangan Parmigiano bilan ipakdek sous tayyorlanadi.",
      "3. Pasta sous bilan birlashtirilib, ustiga yangi qora trifel yupqa varaqlar shaklida qirqib sepiladi."
    ],
    isSignature: true,
    options: {
      cheese: ["Standart Parmigiano", "Qo'shimcha pishloq (+15 000 so'm)"],
      additions: ["Qo'shimcha qora trifel slaysi (+35 000 so'm)", "Pechda pishgan bebi-pomidorlar (+12 000 so'm)"]
    }
  },
  {
    id: "dish-4",
    name: "Tillarang O'rdak Go'shtli Frikadellar",
    englishName: "Crispy Confit Duck Meatballs",
    category: "appetizers",
    price: 110000,
    oldPrice: 125000,
    image: "./assets/images/duck-meatballs.jpg",
    description: "Qarsildoq po'stloqli xushbo'y o'rdak qiyma to'plari, anor-apelsinli sirli sous tomchilari, qora tosh tarelkada yangi mikro-ko'katlar bilan.",
    story: "Fransuz oshxonasining mumtoz konfi uslubida pishirilib, qizg'ish asal-sitrus glazuri bilan qoplangan yengil va to'yimli gazak.",
    badges: ["Yengil tamaddi", "Oshpaz siri"],
    rating: 4.7,
    reviewsCount: 88,
    prepTime: "15 daqiqa",
    calories: "430 kkal",
    nutrition: {
      calories: 430,
      protein: "34g",
      fat: "26g",
      carbs: "14g",
      weight: "280g",
      percentDaily: "21%"
    },
    recipeSummary: "Konfi uslubidagi o'rdak qiymasi, nordon anor-apelsin sitrusli siri va xushbo'y ziravorlar.",
    ingredients: [
      "Yumshoq o'rdak filesi qiymasi (200g)",
      "Karamellangan shalot piyozi va sarimsoq",
      "Anor sharbati va apelsin zesti reduksiyasi",
      "Tog' gullari asali va zanjabil ildizi",
      "Yangi mikro-rayhon va maydalangan yashil pista",
      "Organik dengiz tuzi va muskat yong'og'i"
    ],
    recipeSteps: [
      "1. O'rdak qiymasi qovurilgan shalot, zanjabil va muskat bilan nozik qorilib, to'p shakliga keltiriladi.",
      "2. O'rdak yog'ida past haroratda konfi qilinadi, so'ng qarsildoq tilla po'st hosil qilib do'ndiriladi.",
      "3. Qaynoq anor-asal glazurida toblanib, tarelkaga mikroko'katlar va maydalangan pista bilan tortiladi."
    ],
    isSignature: true,
    options: {
      spiciness: ["Yumshoq (Mild)", "O'rtacha me'yorda (Medium)", "Pikant qalampirli (Spicy)"],
      sauce: ["Apelsin-asal sousi", "Yovvoyi rezavor sousi"]
    }
  },
  {
    id: "dish-5",
    name: "Burrata & Heirloom Pomidor Salat",
    englishName: "Artisan Burrata & Colorful Tomato Tartare",
    category: "appetizers",
    price: 98000,
    oldPrice: null,
    image: "./assets/images/burrata-salad.jpg",
    description: "O'rtasidan qaymoqli kremi quyiluvchi yangi burrata pishlog'i, turfa rangli quyosh pomidorlari, kedr yong'oqlari, yeyiladigan gul barglari.",
    story: "Ertalabki yangi sog'ilgan sutdan mahalliy pishloq ustaxonamizda tayyorlanuvchi nozik burrata va Italiya zaytun moyi uyg'unligi.",
    badges: ["Vegetarian", "Yangi & Sog'lom"],
    rating: 4.9,
    reviewsCount: 165,
    prepTime: "10-12 daqiqa",
    calories: "380 kkal",
    nutrition: {
      calories: 380,
      protein: "18g",
      fat: "29g",
      carbs: "11g",
      weight: "310g",
      percentDaily: "19%"
    },
    recipeSummary: "Krem-burrata pishlog'i, oftobda pishgan rang-barang pomidorlar, kedr yong'og'i va yovvoyi rayhon.",
    ingredients: [
      "Yangi hunarmandchilik Burrata pishlog'i (150g)",
      "Qizil, sariq va qora Heirloom quyosh pomidorlari (140g)",
      "Tog' kedr yong'oqlari (yengil toblangan)",
      "Liguriya ekstra virgin zaytun moyi",
      "Krem-balsamik qora sirka tomchilari",
      "Yovvoyi rayhon barglari va yeyiladigan gul yaproqlari"
    ],
    recipeSteps: [
      "1. Rang-barang oftob pomidorlari tilinib, zaytun moyi, dengiz tuzi va rayhonda 5 daqiqa damlanadi.",
      "2. Qora keramik tarelka o'rtasiga qaymoqli Burrata qo'yilib, atrofiga marinadlangan pomidorlar teriladi.",
      "3. Toblangan kedr yong'og'i, balsamik kremi va gul barglari sepilib, yangi uzilgan non bilan uzatiladi."
    ],
    isSignature: false,
    options: {
      dressing: ["Zaytun va o'tlar sousi", "Balsamik-crema sousi"],
      extras: ["Qo'shimcha Burrata pishlog'i (+45 000 so'm)", "Qarsildoq fokatstsa noni (+10 000 so'm)"]
    }
  },
  {
    id: "dish-6",
    name: "Qora Shokoladli Lava Fondant",
    englishName: "Molten Dark Valrhona Lava Cake",
    category: "desserts",
    price: 75000,
    oldPrice: 85000,
    image: "./assets/images/lava-cake.jpg",
    description: "Ichidan issiq suyuq shokolad oquvchi 72% Valrhona shokoladli keks, Madagaskar vanili muzqaymog'i, yangi malina va 24k oltin yaprog'i.",
    story: "Maxsus haroratda 11 daqiqa pishiriladigan ushbu desert issiq shokolad va sovuq krem muzqaymoq o'rtasidagi mukammal kontrastni yaratadi.",
    badges: ["Hit Desert", "24K Oltin", "Shirinlik"],
    rating: 5.0,
    reviewsCount: 310,
    prepTime: "12-15 daqiqa",
    calories: "490 kkal",
    nutrition: {
      calories: 490,
      protein: "9g",
      fat: "31g",
      carbs: "44g",
      weight: "210g",
      percentDaily: "24%"
    },
    recipeSummary: "72% Valrhona qora shokoladi, suyuq markaz, Madagaskar vanili gelatasi va yeyiladigan oltin.",
    ingredients: [
      "Fransuz 72% Valrhona Guanaja qora shokoladi (90g)",
      "Alp fermer sariyog'i va yangi sarig'lar",
      "Madagaskar tabiiy vanil donasi ekstrakti",
      "Yangi terilgan o'rmon malinasi va yalpiz",
      "24 karatli yeyiladigan toza oltin yaprog'i",
      "Organik qamish shakari va oz miqdor un"
    ],
    recipeSteps: [
      "1. Valrhona shokoladi sariyog' bilan suv bug'ida eritilib, ko'pirtirilgan tuxum sarig'i bilan qorishtiriladi.",
      "2. Keramik qolipga quyilib, 200°C pechda aniq 11 daqiqa pishiriladi — cheti mustahkam, ichi esa suyuq lava bo'ladi.",
      "3. Issiq keks yoniga sovuq Madagaskar vanil muzqaymog'i, nordon malina va 24k oltin qo'yib tortiladi."
    ],
    isSignature: true,
    options: {
      gelato: ["Madagaskar vanili", "Pista muzqaymog'i (+10 000 so'm)", "Yovvoyi rezavorli sorbet"],
      topping: ["Shokoladli sous", "Malinali kuli"]
    }
  },
  {
    id: "dish-7",
    name: "Marakuyya & Rezavorli Yangi Limonad",
    englishName: "Artisan Passion Fruit & Berry Fresh Lemonade",
    category: "drinks",
    price: 55000,
    oldPrice: null,
    image: "./assets/images/fresh-lemonade.jpg",
    description: "Yangi siqilgan ohak sharbati, marakuyya mevasi eti, yovvoyi malina va anor donalari, maydalangan billur muz va tog' yalpizi barglari bilan tayyorlangan 100% tabiiy salqin ichimlik.",
    story: "Har bir stakan uchun yangi mevalar ezilib, tog' buloq suvi va organik sitrus ekstraktlari bilan aralashtiriladi. Hech qanday spirt yoki sintetik qo'shimchalarsiz.",
    badges: ["100% Tabiiy", "Spirtsiz", "Muzdek"],
    rating: 4.9,
    reviewsCount: 154,
    prepTime: "5 daqiqa",
    calories: "110 kkal",
    nutrition: {
      calories: 110,
      protein: "1g",
      fat: "0.2g",
      carbs: "26g",
      weight: "400ml",
      percentDaily: "5%"
    },
    recipeSummary: "Tirik marakuyya eti, yangi laym sharbati, tog' yalpizi va tog' buloq suvi.",
    ingredients: [
      "Tropik tirik marakuyya mevasi eti (60g)",
      "Yangi siqilgan laym (ohak) sharbati (30ml)",
      "Yovvoyi o'rmon malinasi va anor donalari",
      "Organik agava nektari (tabiiy meva shakari)",
      "Gazlangan tog' buloq suvi va billur muz",
      "Tog' yalpizining xushbo'y shoxchasi"
    ],
    recipeSteps: [
      "1. Marakuyya eti, malina va anor donalari laym sharbati bilan stakanda yengil ezilib, efir moylari chiqariladi.",
      "2. Ustidan tabiiy agava nektari va maydalangan billur muz to'ldiriladi.",
      "3. Sovuq tog' buloq suvi quyilib, yangi tog' yalpizi va laym doirasi bilan bezatilib uzatiladi."
    ],
    isSignature: true,
    options: {
      sweetness: ["Me'yorda shirin (Tavsiya etiladi)", "Kam shirin (Citrus Fresh)", "Qo'shimcha shakarli"],
      ice: ["Maydalangan muz bilan", "Muzsiz"]
    }
  }
];

const MENU_CATEGORIES = [
  { id: "all", name: "Barcha Taomlar", icon: "✨", count: RESTAURANT_MENU.length },
  { id: "steaks", name: "Go'sht & Gril", icon: "🥩", count: RESTAURANT_MENU.filter(i => i.category === 'steaks').length },
  { id: "seafood", name: "Dengiz Taomlari", icon: "🦞", count: RESTAURANT_MENU.filter(i => i.category === 'seafood').length },
  { id: "hot", name: "Issiq Taomlar", icon: "🍲", count: RESTAURANT_MENU.filter(i => i.category === 'hot').length },
  { id: "appetizers", name: "Salatlar & Gazaklar", icon: "🥗", count: RESTAURANT_MENU.filter(i => i.category === 'appetizers').length },
  { id: "desserts", name: "Shirinliklar", icon: "🍫", count: RESTAURANT_MENU.filter(i => i.category === 'desserts').length },
  { id: "drinks", name: "Tabiiy Ichimliklar", icon: "🍹", count: RESTAURANT_MENU.filter(i => i.category === 'drinks').length }
];
