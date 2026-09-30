# "L'Aura Gastronomy" — Veb-Sayt Dizayn Tizimi va UI/UX Hujjati (Dizayn.md)

Ushbu hujjat **"L'Aura Gastronomy"** restorani veb-saytining to'liq vizual uslubi, ranglar gammasi, tipografikasi, komponentlar strukturasi va interaktiv scroll effektlarini o'z ichiga oladi.

---

## 1. Asosiy Vizual Konseptsiya (Design Philosophy)

Sayt dizayni **Haute Gastronomy** (Yuqori darajadagi oshxona san'ati) va **Dark Luxury** (Hashamatli qorong'i muhit) estetikasiga asoslangan.

- **Ilhom manbai:** `r1.jpg` dizaynidagi chuqur qora-ko'mir fonlar, sham va kaminning iliq amber/tilla yog'dulari, tosh (slate) fakturalari hamda Michelin 2-Star restoranlariga xos premium taqdimot.
- **100% Halol xususiyati:** Barcha taomlar va ichimliklar halol talablarga to'liq moslashtirilgan, spirtli ichimliklar o'rniga tabiiy yangi mevali marakuyya-rezavorli limonadlar, yangi siqilgan sharbatlar va sovuq tog' choylari integratsiya qilingan.
- **Glassmorphism (Shishasimon UI):** Kartalar va modallarda orqa fonni xiralashtiruvchi (`backdrop-filter: blur(20px)`) shaffof oynasimon elementlar va nozik tillarang ramkalar qo'llanilgan.

---

## 2. Ranglar Palitrasi (Color Palette & Tokens)

Dizayndagi barcha ranglar CSS o'zgaruvchilari orqali boshqariladi (`css/variables.css`):

### Asosiy Fon Ranglari (Backgrounds)
| Rang Kodu | Nomi | Qo'llanilish o'rni |
| :--- | :--- | :--- |
| `#0a0a0d` | **Obsidian Deep Black** | Saytning global asosiy foni |
| `#121217` | **Rich Charcoal** | Ikkilamchi bloklar, footer va modallar |
| `rgba(22, 22, 30, 0.85)` | **Card Glass** | Taom kartochkalari foni (shishasimon) |
| `rgba(14, 14, 19, 0.92)` | **Sticky Glass** | Tepada suzuvchi (sticky) kapsula menyu |

### Hashamatli Urg'u Ranglari (Accents & Glows)
| Rang Kodu | Nomi | Vizual effekt |
| :--- | :--- | :--- |
| `#d4af37` | **Imperial Gold** | Asosiy tillarang, chegaralar, ikonlar, narxlar |
| `#f5d77f` | **Champagne Gold** | Tugma ustiga borgandagi (hover) yorqinlik |
| `#e59838` | **Warm Amber** | Iliq sham yog'dusi, fon shulalari |
| `#ff7b25` | **Flame Orange** | Savatcha bildirishnomasi, chegirmalar |

### Matn Ranglari (Typography Colors)
| Rang Kodu | Nomi | Izoh |
| :--- | :--- | :--- |
| `#ffffff` | **Pure White** | Asosiy sarlavhalar va muhim ma'lumotlar |
| `#e2e2ea` | **Soft Gray** | O'qilishi qulay ikkilamchi matnlar |
| `#9595a8` | **Muted Slate** | Taom tavsiflari va qo'shimcha izohlar |
| `#e8c368` | **Gold Text** | Maxsus oltin gradientli ajratib ko'rsatilgan so'zlar |

---

## 3. Tipografika Tizimi (Typography)

Saytda klassik oliyjanoblik va zamonaviy o'qiluvchanlikni ta'minlash uchun 2 ta asosiy shrift oilasi tanlangan:

1. **Serif (Sarlavhalar uchun):**
   - Shriftlar: `'Cinzel', 'Playfair Display', Georgia, serif`
   - Hissiyot: Mumtoz, hashamatli, Michelin yo'riqnomasi uslubi.
   - Sarlavhalarda harflar orasi kengligi (`letter-spacing: 0.04em`) oshirilgan.

2. **Sans-Serif (Matn va Interfeys tugmalari uchun):**
   - Shriftlar: `'Plus Jakarta Sans', 'Outfit', sans-serif`
   - Hissiyot: Aniq, zamonaviy, mobil qurilmalarda ko'zga qulay.

---

## 4. Maxsus Interaktiv Scroll va Dinamik Yechimlar

### A. Yon Tomonga Gorizontal Scroll Bo'luvchi Menyu (Horizontal Showcase)
- **Maqsadi:** Oshpazning eng sara taomlarini (Signature Dishes) an'anaviy vertikal ro'yxatdan farqli ravishda interaktiv galereya sifatida ko'rsatish.
- **Imkoniyatlari:**
  - `scroll-snap-type: x mandatory` — har bir taom kartasi markazga ravon to'xtaydi;
  - **Sichqoncha bilan drag qilish (Drag-to-scroll):** Kursorni ushlab chapga/o'ngga tortish imkoni;
  - **Navigatsiya tugmalari:** Chap (`#scrollPrev`) va O'ng (`#scrollNext`) shishasimon tillarang tugmalar;
  - **Progress Bar:** Gorizontal harakatlanish darajasini real vaqtda ko'rsatuvchi tilla chiziq;
  - **3D Hover Tilt:** Taom kartasi ustiga sichqoncha kelganda rasm kattalashib, kartochka yengil ko'tariladi (`translateY(-10px)`).

### B. Scroll Qilinganda Yig'iluvchi Menyu (Smart Morphing Sticky Island)
- **Maqsadi:** Foydalanuvchi sahifani pastga surganida, katta kategoriya bo'limi yo'qolib ketmasdan, ekranning tepasida qulay va ixcham suzuvchi orolchaga (Floating Pill) aylanadi.
- **Xatolikdan himoya (Smart Boundary):** Menyu tugab, "Atmosfera" yoki "Unutilmas kechki ovqat" bloklariga tushilganda boshqa yozuvlarni to'sib qo'ymasligi uchun avtomatik tarzda sticky holatdan chiqadi va yo'qoladi.
- **Kapsula tarkibi:**
  - Barcha kategoriyalar (`Go'sht & Gril`, `Dengiz taomlari`, `Issiq taomlar`, `Salatlar`, `Desertlar`, `Tabiiy ichimliklar`);
  - Har bir toifada mavjud taomlar soni hisoblagichi;
  - Ixcham qidiruv maydoni (`sticky-search-input`);
  - Tezkor savatcha tugmasi.

---

## 5. UI Komponentlari va Buyurtma Tizimi

### 1. Header (Sayt Boshqaruvi)
- **L'Aura Monogrammasi:** Tillarang hoshiyali oltin logotip;
- **Navigatsiya menyusi:** Silliq scroll qiluvchi havolalar;
- **Stol band qilish tugmasi:** Bir zumda formani ochish;
- **Savatcha ikonkasi:** Mahsulot qo'shilganda jonli tebranuvchi qizil-amber hisoblagich nishoni (badge).

### 2. Hero Section
- Katta ta'sirchan sarlavha: *"Haqiqiy Lazzat San'ati Bilan Tanishing"*;
- Jonli ko'rsatkichlar: Michelin Guide 2026, 25-35 daqiqada yetkazish, 4.9★ baho;
- Asosiy taom taqdimoti: Shotlandiya lososi surati va suzuvchi shaffof narx kartochkasi.

### 3. Taom Detallari Modali (Customizer Modal)
- Taom ustiga bosilganda ochiladi:
  - Yuqori sifatli katta fotosurat va oshpaz tarixi;
  - Go'sht pishish darajasi (Medium Rare, Medium, Well Done);
  - Sous tanlovi va qo'shimcha garnirlar;
  - Oshpazga maxsus istaklar yozish maydoni (Masalan: *"Kam tuzli"*);
  - Mahsulot sonini boshqarish va umumiy summani avtomatik hisoblash.

### 4. Savatcha Paneli (Slide-over Cart Drawer)
- Ekranning o'ng tomonidan silliq surilib chiqadi;
- Tanlangan taomlar, ularning tarkibi va narxini ko'rsatadi;
- **Promo-kod integratsiyasi:** `LAURA20` kodi orqali buyurtmaga 20% avtomatik chegirma beriladi;
- **Yetkazib berish hisoblagichi:** 300 000 so'mdan oshsa "BEPUL" deb ko'rsatadi.

### 5. Buyurtmani Rasmiylashtirish (Checkout Modal)
- Buyurtma turi: **Yetkazib berish** yoki **Restoranning o'zida / Olib ketish**;
- Ism, telefon, manzil yoki stol raqami;
- To'lov tizimlari: **Click**, **Payme**, **Naqd pul**, **Terminal / Karta**;
- Tasdiqlangandan so'ng animatsiyali kvitansiya (Buyurtma raqami va tayyorlanish progressi) ko'rsatiladi.

### 6. Stol Band Qilish Modali (Table Reservation)
- Sana, vaqt, mehmonlar soni (2, 4, 6, 8+ kishi);
- Joy tanlovi: Asosiy zal, Panoramik terassa yoki VIP xona.

---

## 6. Loyiha Fayllari Bog'liqligi

```
resturant/
│
├── index.html              # Barcha bo'limlar, modallar va semantik HTML5
├── Dizayn.md               # Ushbu dizayn tizimi hujjati
├── TELEGRAM_BOT_QOLLANMA.md# Telegram bot orqali guruhga buyurtmalarni ulash qo'llanmasi
│
├── css/
│   ├── variables.css       # Ranglar, shriftlar, radiuslar va dizayn tokenlari
│   └── style.css           # Barcha animatsiyalar, gorizontal scroll, glassmorphism
│
├── js/
│   ├── data.js             # 100% Halol taomlar, narxlar, kategoriyalar bazasi
│   ├── cart.js             # Savatcha, chegirma, yetkazib berish va promo-kod hisobi
│   ├── telegram.js         # Telegram bot API orqali guruhga buyurtma va xabar yuborish
│   └── app.js              # Gorizontal scroll, yig'iluvchi sticky bar, modallar boshqaruvi
│
└── assets/
    └── images/
        ├── hero-salmon.jpg     # Shotlandiya lososi (Hero)
        ├── wagyu-steak.jpg     # Wagyu Tomahawk steyk
        ├── truffle-pasta.jpg   # Qora trifelli pasta
        ├── lava-cake.jpg       # Valrhona shokoladli keks
        ├── duck-meatballs.jpg  # O'rdak go'shtli qarsildoq frikadellar
        ├── burrata-salad.jpg   # Burrata va pomidorli tartare salat
        └── fresh-lemonade.jpg  # Marakuyya va rezavorli tabiiy yangi limonad
```

---
*Ushbu hujjat "L'Aura Gastronomy" loyihasining barcha dizayn va dasturiy standartlarini to'liq ifodalaydi.*
