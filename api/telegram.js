/**
 * L'Aura Gastronomy - Vercel Serverless Function
 * Telegram API ga xavfsiz server-side murojaat qilish xizmati
 * 
 * Ushbu funksiya yordamida Bot Token mijoz (brauzer) kodiga yoki 
 * GitHubga chiqib ketmaydi. Barcha so'rovlar .env o'zgaruvchilari orqali bajariladi.
 */

export default async function handler(req, res) {
  // Faqat POST so'rovlarni qabul qilish
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: "Faqat POST so'rovlar qabul qilinadi."
    });
  }

  // Muhit o'zgaruvchilarini (.env) olish
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Xatolik: Serverda TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan.");
    return res.status(500).json({
      success: false,
      error: "Serverda Telegram sozlamalari (.env) topilmadi. Vercel Environment Variables yoki .env faylini tekshiring."
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { text, parse_mode = 'HTML' } = body || {};

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: "Xabar matni (text) bo'sh bo'lishi mumkin emas."
      });
    }

    const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: parse_mode
      })
    });

    const data = await telegramResponse.json();

    if (data.ok) {
      return res.status(200).json({
        success: true,
        messageId: data.result ? data.result.message_id : null
      });
    } else {
      console.error("Telegram API xatosi:", data);
      return res.status(502).json({
        success: false,
        error: data.description || "Telegram API orqali xabar yuborishda xatolik yuz berdi."
      });
    }
  } catch (error) {
    console.error("Server xatoligi:", error);
    return res.status(500).json({
      success: false,
      error: "Server ichki xatoligi: " + error.message
    });
  }
}
