# Xavfsizlik Siyosati va Talablari (Security Policy)

Ushbu loyihada axborot xavfsizligi va maxfiy ma'lumotlarni himoya qilish bo'yicha quyidagi qat'iy talablar joriy etilgan.

---

## 1. Maxfiy Ma'lumotlar (API Kalitlari va Bot Tokenlar)
* **Hech qachon ochiq kodda saqlanmaydi:** Telegram Bot Token, Chat ID va boshqa API kalitlari `.js` yoki `.html` fayllar ichiga yozilishi qat'iyan man etiladi.
* **Muhit o'zgaruvchilari (.env):** Barcha maxfiy parametrlar faqat `.env` faylida saqlanadi.
* **.gitignore himoyasi:** `.env`, `.env.local` va boshqa maxfiy fayllar `.gitignore` ro'yxatiga kiritilgan bo'lib, ular GitHub yoki boshqa ommaviy repozitoriyalarga sira yuklanmaydi.
* **Andoza fayl:** Jamoa a'zolari va foydalanuvchilar uchun faqat shablon sifatida `.env.example` fayli taqdim etiladi.

---

## 2. Server-Side Proxy Arxitekturasi (Backend / Serverless)
* **Brauzer himoyasi:** Brauzer (frontend) foydalanuvchilari Telegram Bot Tokenini tarmoq so'rovlari (Network devtools) orqali ko'rib ololmasligi uchun `/api/telegram` serverless endpointi joriy etilgan.
* **Serverless Function:** Tokenlar faqat server (Node.js runtime / Vercel Functions) muhitida `process.env.TELEGRAM_BOT_TOKEN` orqali o'qiladi va xavfsiz tarzda Telegram API ga uzatiladi.
* **Vercel muhitida sozlash:**
  1. Vercel boshqaruv paneliga kiring (`Project Settings -> Environment Variables`).
  2. `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID` qiymatlarini kiriting.
  3. Loyihani qayta deploy qiling.

---

## 3. Sayt Himoyasi va HTTP Xavfsizlik Sarlavhalari (Headers)
Loyihada `vercel.json` orqali quyidagi xavfsizlik sarlavhalari o'rnatilgan:
* **X-Frame-Options: DENY** — Saytni iframe ichiga joylab, Clickjacking hujumlarini amalga oshirishni bloklaydi.
* **X-Content-Type-Options: nosniff** — Brauzer tomonidan MIME turlarini noto'g'ri o'qish (MIME sniffing) orqali virusli skriptlar ijro etilishining oldini oladi.
* **X-XSS-Protection: 1; mode=block** — Brauzer darajasidagi Cross-Site Scripting (XSS) filtrini faollashtiradi.

---

## 4. Xavfsizlik Qoidalariga Amal Qilish Tartibi
Agar loyihada biron-bir maxfiy token tasodifan repozitoriyaga chiqib ketsa:
1. Darhol Telegram `@BotFather` orqali `/revoke` buyrug'ini yuboring va tokenni bekor qiling.
2. Yangi token oling va uni faqat `.env` / Vercel Environment Variables ga kiriting.
3. Git commitlar tarixidan tozalang yoki yangi commit bilan xavfsiz holatga keltiring.
