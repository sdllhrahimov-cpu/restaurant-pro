/* ==========================================================================
   L'Aura Gastronomy - Internationalization (i18n) System
   Supports: Uzbek (uz), Russian (ru), English (en)
   ========================================================================== */

const TRANSLATIONS = {
  uz: {
    // Nav
    nav_home: "Bosh sahifa",
    nav_signature: "Oshpaz tanlovi",
    nav_menu: "Menyu",
    nav_atmosphere: "Atmosfera",
    nav_contact: "Aloqa",
    nav_book: "Stol band qilish",
    
    // Hero
    hero_badge: "★ Michelin Guide 2026 • 100% Halol",
    hero_title_1: "Oliy Dabdaba va",
    hero_title_2: "Nozik Did",
    hero_subtitle: "Har bir luqmada san'at, har bir lahzada ehtirom. Fransuz va O'rta yer dengizi oshxonasi sirlari. Restoran atmosferasini uyingizga yetkazamiz.",
    hero_btn_menu: "Menyu bilan tanishish",
    hero_btn_book: "Stol band qilish",
    stat_experience: "Yillik Tajriba",
    stat_recipes: "Mualliflik Retseptlari",
    stat_rating: "Mehmonlar Bahosi",

    // Signature Dishes
    sig_subtitle: "Oshpaz Durdonalari",
    sig_title: "Eksklyuziv Ta'mlar",
    sig_title_gold: "Kolleksiyasi",
    sig_scroll_hint: "Barcha durdonalarni ko'rish uchun suring →",

    // Common Buttons
    btn_recipe: "📖 Retsepti",
    btn_add_to_cart: "+ Savatchaga",
    btn_added: "✓ Qo'shildi",

    // Menu Section
    menu_subtitle: "To'liq Gastronomik Katalog",
    menu_title: "Restoran",
    menu_title_gold: "Menyusi",
    search_placeholder: "Taom nomi, masalliqlar yoki retsept qidiring...",
    cat_all: "Barchasi",
    cat_steaks: "Go'sht & Gril",
    cat_seafood: "Dengiz Taomlari",
    cat_hot: "Issiq Taomlar",
    cat_appetizers: "Salatlar & Gazaklar",
    cat_desserts: "Shirinliklar",
    cat_drinks: "Tabiiy Ichimliklar",
    
    filter_all: "Barchasi",
    filter_chef: "👑 Oshpaz tanlovi",
    filter_halal: "🌿 Halol",
    filter_discount: "🔥 Chegirmalar",
    filter_light: "🥗 Yengil & Parhez",
    dishes_count_suffix: "ta taom topildi",

    // Atmosphere Section
    exp_subtitle: "Restoran Falsafasi & Atmosferasi",
    exp_title: "Oliy Darajadagi",
    exp_title_gold: "Muhit & Gastronomiya",
    exp_desc: "L'Aura shunchaki taomlanish maskani emas — bu har bir tamingiz va har bir lahzangiz unutilmas hissiyotga aylanadigan nozik san'at maskanidir. Biz mahsulotlarimizni dunyoning eng nufuzli fermalaridan yangi holda keltiramiz va ularni faqat tabiiy eman o'tini hamda tog' o'tlari bilan pishiramiz.",
    exp_badge1_title: "Haute Fine Dining",
    exp_badge1_sub: "Eksklyuziv zallar va sokin muhit",
    exp_badge2_title: "Jonli Oqshomlar",
    exp_badge2_sub: "Akkustik musiqa va yorug'lik sehri",
    exp_craft_title: "Mukammallik Har Bir Detalda",
    feat_fire_title: "Jonli Olovda Pishirish",
    feat_fire_desc: "Ispaniyaning Xoskar pechida 450°C haroratda tabiiy qovurish uslubi.",
    feat_halal_title: "Organik & 100% Halol",
    feat_halal_desc: "Barcha go'sht va dengiz mahsulotlari qat'iy sifat sertifikatiga ega.",
    feat_delivery_title: "Issiq Yetkazib Berish",
    feat_delivery_desc: "Maxsus termoboxlarda taomning taftini va ko'rinishini saqlagan holda.",
    feat_drinks_title: "Tabiiy & Yangi Ichimliklar",
    feat_drinks_desc: "100% tabiiy mevali limonadlar, yangi siqilgan sharbatlar va sovuq tog' choylari.",

    // Reservation Box
    book_card_title: "Unutilmas Kechki Ovqat Uchun",
    book_card_desc: "Oila davrasida, ishbilarmonlik uchrashuvi yoki romantik oqshom uchun stolingizni oldindan band qiling.",
    book_address_label: "Restoran manzili:",
    book_address_val: "Toshkent sh., Amir Temur shoh ko'chasi, 88",
    book_hours_label: "Ish vaqti:",
    book_hours_val: "Har kuni: 11:00 dan 23:30 gacha",
    book_phone_label: "Aloqa va band qilish:",
    book_btn: "Stol band qilish",

    // Cart
    cart_header_title: "Sizning Savatchangiz",
    cart_empty_text: "Savatchangiz hozircha bo'sh",
    cart_empty_sub: "Menyudan o'zingiz yoqtirgan taomlarni tanlang",
    cart_total: "Jami to'lov:",
    cart_checkout_btn: "Buyurtmani Rasmiylashtirish",
    cart_clear: "Savatchani tozalash",

    // Reservation Modal
    modal_res_title: "Stol Band Qilish",
    modal_res_sub: "L'Aura restoranida unutilmas oqshom o'tkazing",
    modal_name_label: "Ismingiz:",
    modal_phone_label: "Telefon raqamingiz:",
    modal_date_label: "Sana:",
    modal_time_label: "Vaqt:",
    modal_guests_label: "Mehmonlar soni:",
    modal_comment_label: "Alohida istaklar (ixtiyoriy):",
    modal_submit_btn: "Band qilishni tasdiqlash",
    modal_res_success: "Stolingiz muvaffaqiyatli band qilindi! Tez orada operatorimiz siz bilan bog'lanadi.",

    // Recipe Modal
    modal_recipe_heading: "Oshpaz Retsepti & Ozuqaviy Qiymati",
    modal_recipe_steps: "Tayyorlanish Bosqichlari:",
    modal_recipe_ingredients: "Masalliqlar va Tarkibi:",
    modal_nutrition_facts: "Ozuqaviy Balans (1 porsiya):",
    modal_close: "Yopish",

    // Footer
    footer_desc: "Haute Gastronomy — Fransuz va O'rta yer dengizi nafis taomlari, jonli olov sehri va betakror muhit.",
    footer_quick_links: "Tezkor Havolalar",
    footer_hours_title: "Ish Vaqti",
    footer_contact_title: "Aloqa Markazi",
    footer_rights: "Barcha huquqlar himoyalangan."
  },

  ru: {
    // Nav
    nav_home: "Главная",
    nav_signature: "Шедевры шефа",
    nav_menu: "Меню",
    nav_atmosphere: "Атмосфера",
    nav_contact: "Контакты",
    nav_book: "Забронировать стол",
    
    // Hero
    hero_badge: "★ Michelin Guide 2026 • 100% Халяль",
    hero_title_1: "Высокая Роскошь и",
    hero_title_2: "Изысканный Вкус",
    hero_subtitle: "Искусство в каждом кусочке, почтение в каждой детали. Секреты французской и средиземноморской кухни с доставкой атмосферы ресторана прямо к вам.",
    hero_btn_menu: "Смотреть меню",
    hero_btn_book: "Забронировать стол",
    stat_experience: "Лет Опыта",
    stat_recipes: "Авторских Рецептов",
    stat_rating: "Оценка Гостей",

    // Signature Dishes
    sig_subtitle: "Шедевры Шеф-Повара",
    sig_title: "Эксклюзивная Коллекция",
    sig_title_gold: "Вкусов",
    sig_scroll_hint: "Прокрутите для просмотра шедевров →",

    // Common Buttons
    btn_recipe: "📖 Рецепт",
    btn_add_to_cart: "+ В корзину",
    btn_added: "✓ Добавлено",

    // Menu Section
    menu_subtitle: "Полный Гастрономический Каталог",
    menu_title: "Меню",
    menu_title_gold: "Ресторана",
    search_placeholder: "Поиск блюда, ингредиентов или рецепта...",
    cat_all: "Все Блюда",
    cat_steaks: "Мясо & Гриль",
    cat_seafood: "Морепродукты",
    cat_hot: "Горячие Блюда",
    cat_appetizers: "Салаты & Закуски",
    cat_desserts: "Десерты",
    cat_drinks: "Натуральные Напитки",
    
    filter_all: "Все",
    filter_chef: "👑 Выбор шефа",
    filter_halal: "🌿 Халяль",
    filter_discount: "🔥 Горячие скидки",
    filter_light: "🥗 Легкое & Фитнес",
    dishes_count_suffix: "блюд найдено",

    // Atmosphere Section
    exp_subtitle: "Философия и Атмосфера Ресторана",
    exp_title: "Высочайший Уровень",
    exp_title_gold: "Атмосферы & Гастрономии",
    exp_desc: "L'Aura — это не просто место для трапезы, это пространство утонченного искусства, где каждое мгновение превращается в незабываемое воспоминание. Мы доставляем свежие ингредиенты с ведущих мировых ферм и готовим их исключительно на натуральных дубовых углях и горных травах.",
    exp_badge1_title: "Haute Fine Dining",
    exp_badge1_sub: "Эксклюзивные залы и уединенная обстановка",
    exp_badge2_title: "Живые Вечера",
    exp_badge2_sub: "Акустический джаз и магия света",
    exp_craft_title: "Совершенство в Каждой Детали",
    feat_fire_title: "Приготовление на Огне",
    feat_fire_desc: "Обжарка в испанской печи Josper при 450°C для идеальной корочки.",
    feat_halal_title: "Органика & 100% Халяль",
    feat_halal_desc: "Все мясные и рыбные продукты имеют строгий сертификат качества.",
    feat_delivery_title: "Горячая Доставка",
    feat_delivery_desc: "Специальные термобоксы сохраняют идеальную температуру и подачу.",
    feat_drinks_title: "Свежие & Натуральные Напитки",
    feat_drinks_desc: "100% натуральные лимонады, свежевыжатые соки и горные чаи.",

    // Reservation Box
    book_card_title: "Для Незабываемого Ужина",
    book_card_desc: "Забронируйте столик заранее для семейного ужина, деловой встречи или романтического вечера.",
    book_address_label: "Адрес ресторана:",
    book_address_val: "г. Ташкент, проспект Амира Темура, 88",
    book_hours_label: "Время работы:",
    book_hours_val: "Ежедневно: с 11:00 до 23:30",
    book_phone_label: "Связь и бронь:",
    book_btn: "Забронировать стол",

    // Cart
    cart_header_title: "Ваша Корзина",
    cart_empty_text: "Ваша корзина пока пуста",
    cart_empty_sub: "Выберите любимые блюда из нашего меню",
    cart_total: "Итого к оплате:",
    cart_checkout_btn: "Оформить Заказ",
    cart_clear: "Очистить корзину",

    // Reservation Modal
    modal_res_title: "Бронирование Стола",
    modal_res_sub: "Проведите незабываемый вечер в ресторане L'Aura",
    modal_name_label: "Ваше имя:",
    modal_phone_label: "Номер телефона:",
    modal_date_label: "Дата:",
    modal_time_label: "Время:",
    modal_guests_label: "Количество гостей:",
    modal_comment_label: "Особые пожелания (необязательно):",
    modal_submit_btn: "Подтвердить бронь",
    modal_res_success: "Столик успешно забронирован! Скоро наш менеджер свяжется с вами.",

    // Recipe Modal
    modal_recipe_heading: "Рецепт Шефа и Пищевая Ценность",
    modal_recipe_steps: "Этапы Приготовления:",
    modal_recipe_ingredients: "Ингредиенты и Состав:",
    modal_nutrition_facts: "Баланс Питания (на 1 порцию):",
    modal_close: "Закрыть",

    // Footer
    footer_desc: "Haute Gastronomy — Изысканные блюда французской и средиземноморской кухни, магия живого огня и роскошная атмосфера.",
    footer_quick_links: "Быстрые Ссылки",
    footer_hours_title: "Режим Работы",
    footer_contact_title: "Центр Связи",
    footer_rights: "Все права защищены."
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_signature: "Chef's Selection",
    nav_menu: "Menu",
    nav_atmosphere: "Atmosphere",
    nav_contact: "Contact",
    nav_book: "Book a Table",
    
    // Hero
    hero_badge: "★ Michelin Guide 2026 • 100% Halal",
    hero_title_1: "Haute Luxury &",
    hero_title_2: "Refined Taste",
    hero_subtitle: "Art in every bite, reverence in every detail. Secrets of French and Mediterranean gastronomy delivered with full restaurant ambiance right to your home.",
    hero_btn_menu: "Explore Menu",
    hero_btn_book: "Reserve a Table",
    stat_experience: "Years of Heritage",
    stat_recipes: "Signature Recipes",
    stat_rating: "Guest Rating",

    // Signature Dishes
    sig_subtitle: "Chef's Masterpieces",
    sig_title: "Exclusive Flavors",
    sig_title_gold: "Collection",
    sig_scroll_hint: "Swipe to discover all creations →",

    // Common Buttons
    btn_recipe: "📖 Recipe",
    btn_add_to_cart: "+ Add to Cart",
    btn_added: "✓ Added",

    // Menu Section
    menu_subtitle: "Complete Gastronomic Catalog",
    menu_title: "Restaurant",
    menu_title_gold: "Menu",
    search_placeholder: "Search dishes, ingredients or recipe...",
    cat_all: "All Dishes",
    cat_steaks: "Meat & Grill",
    cat_seafood: "Seafood",
    cat_hot: "Hot Dishes",
    cat_appetizers: "Salads & Starters",
    cat_desserts: "Desserts",
    cat_drinks: "Natural Drinks",
    
    filter_all: "All",
    filter_chef: "👑 Chef's Pick",
    filter_halal: "🌿 Halal",
    filter_discount: "🔥 Hot Deals",
    filter_light: "🥗 Light & Fit",
    dishes_count_suffix: "dishes found",

    // Atmosphere Section
    exp_subtitle: "Restaurant Philosophy & Atmosphere",
    exp_title: "Unmatched Level of",
    exp_title_gold: "Ambiance & Gastronomy",
    exp_desc: "L'Aura is more than just dining — it is a realm of exquisite art where every nuance becomes an everlasting memory. We source pristine ingredients from prestigious organic farms and craft them over natural oak charcoal and wild mountain herbs.",
    exp_badge1_title: "Haute Fine Dining",
    exp_badge1_sub: "Private dining rooms & serene elegance",
    exp_badge2_title: "Live Evenings",
    exp_badge2_sub: "Acoustic jazz & gentle candlelight",
    exp_craft_title: "Perfection in Every Detail",
    feat_fire_title: "Live Fire Crafting",
    feat_fire_desc: "Spanish Josper charcoal oven sealing natural flavors at 450°C.",
    feat_halal_title: "Organic & 100% Halal",
    feat_halal_desc: "Strictly certified premium meats and freshest seafood catches.",
    feat_delivery_title: "Thermal Delivery",
    feat_delivery_desc: "Custom heated thermoboxes preserving the exact chef presentation.",
    feat_drinks_title: "Artisan Craft Drinks",
    feat_drinks_desc: "100% pure fruit lemonades, freshly pressed juices and mountain teas.",

    // Reservation Box
    book_card_title: "For an Unforgettable Evening",
    book_card_desc: "Reserve your private table in advance for family celebrations, business rendezvous or a romantic night.",
    book_address_label: "Location:",
    book_address_val: "Tashkent, Amir Temur Avenue 88",
    book_hours_label: "Opening Hours:",
    book_hours_val: "Daily: 11:00 AM – 11:30 PM",
    book_phone_label: "Reservations & Concierge:",
    book_btn: "Reserve Table Now",

    // Cart
    cart_header_title: "Your Cart",
    cart_empty_text: "Your cart is currently empty",
    cart_empty_sub: "Explore our menu and add your favorite dishes",
    cart_total: "Total Amount:",
    cart_checkout_btn: "Proceed to Checkout",
    cart_clear: "Clear Cart",

    // Reservation Modal
    modal_res_title: "Table Reservation",
    modal_res_sub: "Experience an extraordinary evening at L'Aura",
    modal_name_label: "Your Full Name:",
    modal_phone_label: "Phone Number:",
    modal_date_label: "Date:",
    modal_time_label: "Time:",
    modal_guests_label: "Number of Guests:",
    modal_comment_label: "Special Requests (Optional):",
    modal_submit_btn: "Confirm Reservation",
    modal_res_success: "Your table has been reserved successfully! Our manager will contact you shortly.",

    // Recipe Modal
    modal_recipe_heading: "Chef's Recipe & Nutritional Facts",
    modal_recipe_steps: "Cooking Steps:",
    modal_recipe_ingredients: "Ingredients & Craft:",
    modal_nutrition_facts: "Nutritional Balance (per portion):",
    modal_close: "Close",

    // Footer
    footer_desc: "Haute Gastronomy — French and Mediterranean culinary excellence, live fire artistry, and an unmatched luxurious ambiance.",
    footer_quick_links: "Quick Navigation",
    footer_hours_title: "Opening Hours",
    footer_contact_title: "Concierge Desk",
    footer_rights: "All rights reserved."
  }
};

// Dish Translations Database
const DISH_TRANSLATIONS = {
  "dish-1": {
    ru: {
      name: "Глазированный Шотландский Лосось",
      description: "Нежное филе свежего лосося с хрустящей золотистой корочкой, густая бальзамическая редукция, базиликовое масло и микрозелень.",
      story: "Свежий лосось из чистых вод Северного моря томится в авторском 12-часовом маринаде и обжаривается на дубовых углях.",
      badges: ["Выбор шефа", "Дары моря", "Без глютена"],
      recipeSummary: "Лосось на дубовых углях при 220°C, 12-летний бальзамик из Модены и свежее базиликовое масло."
    },
    en: {
      name: "Glazed Scottish Salmon Royale",
      description: "Crispy skin Scottish salmon fillet, rich aged balsamic reduction, wild basil aromatic emulsion and tender microgreens.",
      story: "Directly sourced from pristine northern waters, marinated in chef's 12-hour herb infusion and roasted over oak embers.",
      badges: ["Chef's Pick", "Seafood", "Gluten-Free"],
      recipeSummary: "Salmon grilled at 220°C over oak charcoal, 12-year Modena balsamic glaze and fresh basil extraction."
    }
  },
  "dish-2": {
    ru: {
      name: "Стейк Вагю Томагавк (A5)",
      description: "Мраморная японская говядина Вагю категории A5, кристаллы соли Fleur de Sel, томленый чеснок и свежий розмарин.",
      story: "Выдержка сухого созревания 45 дней. Готовится в испанском хоспере при 450°C, мясо буквально тает во рту.",
      badges: ["Премиум A5", "Хоспер Гриль", "100% Халяль"],
      recipeSummary: "Мраморная говядина 45-дневной выдержки, обжаренная в печи хоспер с розмарином и чесноком."
    },
    en: {
      name: "Prime Wagyu Ribeye & Tomahawk (A5)",
      description: "Japanese A5 Wagyu with supreme marbling, Fleur de Sel flakes, confit garlic head and wild mountain rosemary.",
      story: "Dry-aged for 45 days, seared at 450°C in the Josper oven to lock in divine succulence and unforgettable taste.",
      badges: ["Premium A5", "Josper Grill", "100% Halal"],
      recipeSummary: "45-day aged A5 Wagyu seared at 450°C over oak embers with rosemary-infused butter."
    }
  },
  "dish-3": {
    ru: {
      name: "Черный Трюфельный Феттуччине",
      description: "Домашняя паста ручной лепки, 24-месячный сыр Пармиджано Реджано, сливочно-трюфельный крем и свежий черный трюфель.",
      story: "Паста создается каждое утро вручную из органической пшеничной муки сорта Semolina из провинции Модена.",
      badges: ["Авторское", "Черный трюфель", "Рецепт Италии"],
      recipeSummary: "Паста Semolina ручной раскатки, выдержанный крем Пармиджано и свежие слайсы черного трюфеля."
    },
    en: {
      name: "Handmade Black Truffle Fettuccine",
      description: "Handcrafted fresh pasta, 24-month aged Parmigiano-Reggiano cream sauce, mountain butter and shaved Norcia black truffles.",
      story: "Handmade every single morning from organic Semolina wheat imported directly from Modena, Italy.",
      badges: ["Artisan", "Fresh Truffle", "Italian Recipe"],
      recipeSummary: "Hand-rolled Semolina fettuccine, 24-month Parmigiano emulsion and freshly shaved black truffle."
    }
  },
  "dish-4": {
    ru: {
      name: "Утиные Фрикадельки Конфи",
      description: "Хрустящие шарики из нежного утиного мяса, гранатово-апельсиновая глазурь, фисташковая крошка и свежие побеги на темном сланце.",
      story: "Французская классика конфи с карамелизированным шалотом и цитрусовой глазурью для изысканного аппетита.",
      badges: ["Легкая закуска", "Секрет шефа"],
      recipeSummary: "Утиное конфи с шалотом, терпкая гранатово-медовая глазурь и дробленые фисташки."
    },
    en: {
      name: "Crispy Confit Duck Meatballs",
      description: "Golden crispy duck meatballs, pomegranate-orange citrus glaze, wild micro-basil and crushed pistachios on slate stone.",
      story: "Cooked in classic French duck confit tradition, finished in hot honey-citrus caramel for perfect texture.",
      badges: ["Gourmet Starter", "Chef's Secret"],
      recipeSummary: "Confit duck meat with shallots, sweet pomegranate-citrus glaze and toasted pistachios."
    }
  },
  "dish-5": {
    ru: {
      name: "Салат Буррата с Томатами Хейрлум",
      description: "Сливочная фермерская буррата с жидким центром, спелые разноцветные томаты, кедровые орешки, лепестки цветов и базилик.",
      story: "Свежая буррата из утреннего молока местной сыроварни в гармонии с итальянским оливковым маслом первого отжима.",
      badges: ["Вегетарианское", "Свежее & Полезное"],
      recipeSummary: "Сливочная буррата, солнечные спелые томаты, кедровые орехи и крем-бальзамик."
    },
    en: {
      name: "Artisan Burrata & Colorful Tomato Tartare",
      description: "Creamy artisanal burrata cheese, ripe Heirloom solar tomatoes, toasted pine nuts, edible flower petals and Ligurian olive oil.",
      story: "Handcrafted from pristine morning milk, paired with cold-pressed extra virgin oil and aged balsamic glaze.",
      badges: ["Vegetarian", "Fresh & Healthy"],
      recipeSummary: "Creamy burrata heart, vibrant marinated heirloom tomatoes, roasted pine nuts and wild basil."
    }
  },
  "dish-6": {
    ru: {
      name: "Темный Шоколадный Лава Фондан",
      description: "Теплый тающий кекс из 72% французского шоколада Valrhona, мороженое с мадагаскарской ванилью, малина и сусальное золото 24 карата.",
      story: "Выпекается ровно 11 минут для создания идеального контраста между горячей шоколадной лавой и ледяным сливочным джелато.",
      badges: ["Хит Десерт", "Золото 24K", "Сладкое"],
      recipeSummary: "72% шоколад Valrhona, жидкий центр, джелато из мадагаскарской ванили и пищевое золото."
    },
    en: {
      name: "Molten Dark Valrhona Lava Cake",
      description: "Molten center 72% Valrhona Guanaja dark chocolate cake, Madagascar vanilla bean gelato, forest raspberries and 24k edible gold.",
      story: "Baked for precise 11 minutes to create the magical contrast between steaming warm lava and velvety cool cream.",
      badges: ["Signature Dessert", "24K Gold", "Sweet"],
      recipeSummary: "72% Valrhona chocolate, molten interior, Madagascar vanilla gelato and 24k edible gold."
    }
  },
  "dish-7": {
    ru: {
      name: "Освежающий Лимонад Маракуйя & Ягоды",
      description: "Натуральная мякоть спелой маракуйи, свежий сок лайма, лесная малина, горная родниковая вода и кристаллы дробленого льда.",
      story: "Свежеприготовленный напиток без добавления спирта или искусственных сиропов — только чистые тропические фрукты и горная мята.",
      badges: ["100% Натурально", "Безалкогольное", "Освежающее"],
      recipeSummary: "Мякоть маракуйи, сок лайма, нектар органической агавы, горная мята и родниковая вода."
    },
    en: {
      name: "Artisan Passion Fruit & Berry Fresh Lemonade",
      description: "Freshly pressed tropical passion fruit pulp, tart lime juice, forest berries, sparkling mountain spring water and wild mint.",
      story: "Made per order from 100% natural organic fruits and fresh mountain mint with zero artificial additives.",
      badges: ["100% Natural", "Alcohol-Free", "Refreshing"],
      recipeSummary: "Crushed passion fruit, lime juice, organic agave nectar, crushed crystal ice and mountain mint."
    }
  }
};

// Language State Management
let currentLanguage = localStorage.getItem('laura_language') || 'uz';

function getTranslation(key) {
  if (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) {
    return TRANSLATIONS[currentLanguage][key];
  }
  return TRANSLATIONS.uz[key] || key;
}

function getDishTranslation(dishId, originalDish) {
  const lang = currentLanguage;
  if (lang === 'uz') {
    return {
      name: originalDish.name,
      description: originalDish.description,
      story: originalDish.story,
      badges: originalDish.badges,
      recipeSummary: originalDish.recipeSummary
    };
  }
  
  const trans = DISH_TRANSLATIONS[dishId] && DISH_TRANSLATIONS[dishId][lang];
  if (trans) {
    return {
      name: trans.name || (lang === 'en' ? originalDish.englishName : originalDish.name),
      description: trans.description || originalDish.description,
      story: trans.story || originalDish.story,
      badges: trans.badges || originalDish.badges,
      recipeSummary: trans.recipeSummary || originalDish.recipeSummary
    };
  }

  return {
    name: lang === 'en' && originalDish.englishName ? originalDish.englishName : originalDish.name,
    description: originalDish.description,
    story: originalDish.story,
    badges: originalDish.badges,
    recipeSummary: originalDish.recipeSummary
  };
}

function setLanguage(lang) {
  if (!['uz', 'ru', 'en'].includes(lang)) return;
  currentLanguage = lang;
  localStorage.setItem('laura_language', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update active UI triggers in language switcher
  updateLanguageSwitcherUI();

  // Apply translations to all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const trans = getTranslation(key);
    if (trans) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = trans;
      } else {
        el.innerHTML = trans;
      }
    }
  });

  // Re-render menu dishes and signatures with new language
  if (window.renderMenuDishes) {
    window.renderMenuDishes();
  }
  if (window.renderSignatureDishes) {
    window.renderSignatureDishes();
  }
  if (window.updateCategoryTabsLanguage) {
    window.updateCategoryTabsLanguage();
  }
  if (window.restaurantCart && window.restaurantCart.render) {
    window.restaurantCart.render();
  }
}

const SVG_FLAGS = {
  uz: `<svg class="svg-flag" viewBox="0 0 32 24" width="22" height="16" style="border-radius: 3px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); display: block;">
    <rect width="32" height="7.5" fill="#0099B5"/>
    <rect y="7.5" width="32" height="1" fill="#CE1126"/>
    <rect y="8.5" width="32" height="7" fill="#FFFFFF"/>
    <rect y="15.5" width="32" height="1" fill="#CE1126"/>
    <rect y="16.5" width="32" height="7.5" fill="#1EB53A"/>
    <circle cx="5" cy="4" r="2.2" fill="#FFFFFF"/>
    <circle cx="5.7" cy="4" r="1.9" fill="#0099B5"/>
    <g fill="#FFFFFF" transform="scale(0.55) translate(8, 2)">
      <circle cx="7" cy="3" r="0.7"/><circle cx="9.5" cy="3" r="0.7"/><circle cx="12" cy="3" r="0.7"/><circle cx="14.5" cy="3" r="0.7"/><circle cx="17" cy="3" r="0.7"/>
      <circle cx="9.5" cy="6" r="0.7"/><circle cx="12" cy="6" r="0.7"/><circle cx="14.5" cy="6" r="0.7"/><circle cx="17" cy="6" r="0.7"/>
      <circle cx="12" cy="9" r="0.7"/><circle cx="14.5" cy="9" r="0.7"/><circle cx="17" cy="9" r="0.7"/>
    </g>
  </svg>`,
  ru: `<svg class="svg-flag" viewBox="0 0 32 24" width="22" height="16" style="border-radius: 3px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); display: block;">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#0039A6"/>
    <rect y="16" width="32" height="8" fill="#D52B1E"/>
  </svg>`,
  en: `<svg class="svg-flag" viewBox="0 0 32 24" width="22" height="16" style="border-radius: 3px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); display: block;">
    <clipPath id="uk-clip-dyn"><rect width="32" height="24" rx="3"/></clipPath>
    <g clip-path="url(#uk-clip-dyn)">
      <rect width="32" height="24" fill="#012169"/>
      <path d="M0,0 L32,24 M32,0 L0,24" stroke="#FFFFFF" stroke-width="4"/>
      <path d="M0,0 L32,24 M32,0 L0,24" stroke="#C8102E" stroke-width="2.2"/>
      <path d="M16,0 V24 M0,12 H32" stroke="#FFFFFF" stroke-width="6"/>
      <path d="M16,0 V24 M0,12 H32" stroke="#C8102E" stroke-width="3.5"/>
    </g>
  </svg>`
};

function updateLanguageSwitcherUI() {
  const activeCodeEl = document.getElementById('langActiveCode');
  const activeFlagEl = document.getElementById('langActiveFlag');
  
  const codes = { uz: 'UZ', ru: 'RU', en: 'EN' };

  if (activeCodeEl) activeCodeEl.textContent = codes[currentLanguage] || 'UZ';
  if (activeFlagEl) activeFlagEl.innerHTML = SVG_FLAGS[currentLanguage] || SVG_FLAGS.uz;

  document.querySelectorAll('.lang-opt').forEach(opt => {
    if (opt.getAttribute('data-lang') === currentLanguage) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });
}

// Global Export
window.I18N = {
  currentLanguage: () => currentLanguage,
  t: getTranslation,
  getDishTranslation,
  setLanguage,
  updateLanguageSwitcherUI
};
