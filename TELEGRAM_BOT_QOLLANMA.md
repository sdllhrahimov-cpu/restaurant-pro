# Telegram Bot Orqali Buyurtmalarni Qabul Qilish Qo'llanmasi

Saytdan qilingan barcha taom buyurtmalari va stol bandliklari (reservation) avtomatik ravishda restoranning Telegram guruhiga kelib tushadi.

---

## 4 Ta Oddiy Qadamda Sozlash:

### 1-qadam: Telegramda Bot Yaratish (Token olish)
1. Telegram qidiruviga `@BotFather` deb yozing va botni oching.
2. `/newbot` buyrug'ini yuboring.
3. Botingizga nom bering (masalan: `L'Aura Buyurtmalar Boti`).
4. Botingizga username bering (masalan: `laura_restaurant_order_bot`).
5. `@BotFather` sizga **API TOKEN** beradi (namuna: `7864195159:AAH7Yd...`). Ushbu tokenni nusxalab oling.

---

### 2-qadam: Telegram Guruh Ochish va Botni Admin Qilish
1. Telegramda yangi guruh oching (masalan: `L'Aura Buyurtmalar Guruh` yoki mavjud buyurtmalar guruhiga kiring).
2. Yangi ochgan botingizni ushbu guruhga a'zo qilib qo'shing.
3. Botga guruhda **Administrator** huquqini bering (xabar yoza olishi uchun).

---

### 3-qadam: Guruh ID Raqamini Olish (Chat ID)
Guruh ID raqamini bilish juda oson:
1. Guruhingizga `@myidbot` yoki `@RawDataBot` botini vaqtincha qo'shing.
2. Guruhga `/getgroupid` deb yozing yoki uning bergan javobidagi `id` qatoriga qarang.
3. Guruh ID raqami har doim `-` (minus) yoki `-100` bilan boshlanadi (masalan: `-1002345678901`).
4. Keyin `@myidbot` ni guruhdan chiqarib yuborishingiz mumkin.

---

### 4-qadam: Saytga Ulab Qo'yish (2 xil usul)

#### 1-usul: To'g'ridan-to'g'ri sayt interfeysidan (Juda oson):
1. Saytni brauzerda oching.
2. Sahifaning eng pastki o'ng qismidagi **"⚙️ Telegram Bot Sozlamalari"** tugmasini bosing.
3. **Bot Token** va **Guruh Chat ID** ni joylashtiring.
4. **"Test Xabar Yuborish"** tugmasini bosing — guruhingizga test xabar borsa, demak hammasi to'g'ri ulangan!
5. **"Saqlash"** tugmasini bosing.

#### 2-usul: `.env` fayli yoki Vercel Environment Variables orqali (Tavsiya etiladigan, xavfsiz usul):
1. Loyiha papkasida `.env` faylini oching (yoki `.env.example` dan nusxa oling).
2. Quyidagi parametrlarni o'rnating:
```env
TELEGRAM_BOT_TOKEN=8998942580:AAFZgw8HlUzr0k9fXB7HgN1o3Z65qvvspN8
TELEGRAM_CHAT_ID=-1004434019921
```
3. Vercel ga joylanganda: Vercel Dashboard -> **Settings** -> **Environment Variables** bo'limiga `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID` ni qo'shing.
4. Bu usulda sizning bot tokeningiz GitHubga chiqib ketmaydi va xavfsiz serverless API (`/api/telegram`) orqali ishlaydi.

---

## Telegramga Qanday Xabar Boradi?

### 🍕 Ovqat Buyurtmasi Kelganda:
```
🛎 YANGI BUYURTMA: #LA-8421
━━━━━━━━━━━━━━━━━━━━
👤 Mijoz: Asadulloh
📞 Telefon: +998 90 123 45 67
🛵 Turi: 🛵 Yetkazib berish (Dostavka)
📍 Manzil: Toshkent sh., Chilonzor 9-mavze, 14-uy
💳 To'lov turi: CLICK
⏰ Vaqti: 23.09.2026 10:25
━━━━━━━━━━━━━━━━━━━━
🍽 BUYURTMA QILINGAN TAOMLAR:

1. Wagyu Tomahawk Steyk (A5) × 1 dona
   💰 340 000 so'm
   (Medium, Trifelli demi-glas)
   Izoh: Kam tuzli bo'lsin

2. Glazurlangan Shotlandiya Lososi × 1 dona
   💰 185 000 so'm
   (Krem-balsamik sous)

3. Marakuyya & Rezavorli Yangi Limonad × 2 dona
   💰 110 000 so'm
━━━━━━━━━━━━━━━━━━━━
💵 Taomlar summasi: 635 000 so'm
🎁 Chegirma: -127 000 so'm
🛵 Yetkazib berish: BEPUL
⭐ YAKUNIY TO'LOV: 508 000 so'm
━━━━━━━━━━━━━━━━━━━━
⚡ Iltimos, mijoz bilan bog'lanib buyurtmani tasdiqlang!
```

---

### 🪑 Stol Band Qilinganda (Reservation):
```
📅 YANGI STOL BANDLIGI (RESERVATION)
━━━━━━━━━━━━━━━━━━━━
👤 Mijoz: Jamshid Aliyev
📞 Telefon: +998 90 987 65 43
📆 Sana: 2026-09-24
⏰ Vaqt: 19:30
👥 Mehmonlar soni: 4 kishi
🏛 Tanlangan zal: Panoramik ayvon (Terrace)
━━━━━━━━━━━━━━━━━━━━
⚡ Administrator, mijozga qo'ng'iroq qilib bandlikni tasdiqlang!
```
