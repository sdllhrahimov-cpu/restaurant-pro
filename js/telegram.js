/* ==========================================================================
   L'Aura Gastronomy - Telegram Bot Integratsiyasi
   Buyurtmalar va stol bandliklarini Telegram guruhga yuborish xizmati
   ========================================================================== */

const TELEGRAM_CONFIG = {
  // Standart sozlamalar (Agar veb-interfeysdan kiritilsa, localStorage ustun bo'ladi)
  BOT_TOKEN: "8983975907:AAH-qZdMq0YaZw5sTZiqTFMJfcfO9GwgPCY",
  CHAT_ID: "-1004434019921"
};

/**
 * Telegram guruhga xabar yuborish
 */
async function sendTelegramMessage(text) {
  const token = TELEGRAM_CONFIG.BOT_TOKEN || localStorage.getItem('laura_telegram_token');
  const chatId = TELEGRAM_CONFIG.CHAT_ID || localStorage.getItem('laura_telegram_chat_id');

  // Agar bot token yoki chat ID hali kiritilmagan bo'lsa
  if (!token || !chatId) {
    console.warn("⚠️ [Telegram Bot]: Bot Token yoki Chat ID kiritilmagan. Saytdagi 'Telegram Bot Sozlamalari' tugmasi orqali kiriting.");
    return { success: false, reason: "NOT_CONFIGURED" };
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();
    if (data.ok) {
      return { success: true, data };
    } else {
      console.error("Telegram API Error:", data);
      return { success: false, error: data.description };
    }
  } catch (error) {
    console.error("Telegram tarmog'iga ulanishda xatolik:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Ovqat buyurtmasini chiroyli formatda Telegram guruhga yuborish
 */
async function sendOrderToTelegram(orderData) {
  const { orderId, customerName, phone, orderType, address, latitude, longitude, tableNo, paymentMethod, items, subtotal, discount, deliveryFee, total } = orderData;

  const now = new Date();
  const timeString = now.toLocaleDateString('uz-UZ') + " " + now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });

  let itemsText = items.map((item, index) => {
    let options = '';
    if (item.selectedOptions && Object.keys(item.selectedOptions).length > 0) {
      options = `   <i>(${Object.values(item.selectedOptions).join(', ')})</i>\n`;
    }
    let note = item.notes ? `   <i>Izoh: ${item.notes}</i>\n` : '';
    return `<b>${index + 1}. ${item.name}</b> × ${item.quantity} dona\n   💰 ${window.restaurantCart.formatPrice(item.price * item.quantity)}\n${options}${note}`;
  }).join('\n');

  const typeIcon = orderType === 'delivery' ? '🛵 Yetkazib berish (Dostavka)' : '🍽 Restoranda / Olib ketish';
  
  let locationInfo = '';
  if (orderType === 'delivery') {
    locationInfo = `📍 <b>Yetkazish manzili:</b> ${address || "Ko'rsatilmagan"}`;
    if (latitude && longitude) {
      const latNum = Number(latitude).toFixed(6);
      const lngNum = Number(longitude).toFixed(6);
      locationInfo += `\n🗺 <b>Google Maps:</b> https://maps.google.com/?q=${latNum},${lngNum}`;
      locationInfo += `\n🧭 <b>Yandex Navigator:</b> https://yandex.com/maps/?pt=${lngNum},${latNum}&z=17&l=map`;
    }
  } else {
    locationInfo = `🪑 <b>Stol raqami:</b> ${tableNo || "Ko'rsatilmagan"}`;
  }

  const paymentLabels = {
    cash: "💵 Naqd pul",
    card: "💳 Karta / Terminal orqali"
  };
  const payTitle = paymentLabels[paymentMethod] || paymentMethod.toUpperCase();

  const message = `
🛎 <b>YANGI BUYURTMA: #${orderId}</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${customerName}
📞 <b>Telefon:</b> ${phone}
🛵 <b>Turi:</b> ${typeIcon}
${locationInfo}
💳 <b>To'lov turi:</b> ${payTitle}
⏰ <b>Vaqti:</b> ${timeString}
━━━━━━━━━━━━━━━━━━━━
🍽 <b>BUYURTMA QILINGAN TAOMLAR:</b>

${itemsText}
━━━━━━━━━━━━━━━━━━━━
💵 <b>Taomlar summasi:</b> ${window.restaurantCart.formatPrice(subtotal)}
${discount > 0 ? `🎁 <b>Chegirma:</b> -${window.restaurantCart.formatPrice(discount)}\n` : ''}🛵 <b>Yetkazib berish:</b> ${deliveryFee === 0 ? "BEPUL" : window.restaurantCart.formatPrice(deliveryFee)}
⭐ <b>YAKUNIY TO'LOV:</b> <b>${window.restaurantCart.formatPrice(total)}</b>
━━━━━━━━━━━━━━━━━━━━
⚡ <i>Iltimos, mijoz bilan bog'lanib buyurtmani tasdiqlang!</i>
  `.trim();

  return await sendTelegramMessage(message);
}

/**
 * Stol band qilish (Reservation) ma'lumotlarini Telegram guruhga yuborish
 */
async function sendReservationToTelegram(reserveData) {
  const { name, phone, date, time, guests, zone } = reserveData;

  const zoneNames = {
    main: "Asosiy zal",
    terrace: "Panoramik ayvon (Terrace)",
    vip: "VIP xona"
  };

  const message = `
📅 <b>YANGI STOL BANDLIGI (RESERVATION)</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${name}
📞 <b>Telefon:</b> ${phone}
📆 <b>Sana:</b> ${date}
⏰ <b>Vaqt:</b> ${time}
👥 <b>Mehmonlar soni:</b> ${guests} kishi
🏛 <b>Tanlangan zal:</b> ${zoneNames[zone] || zone}
━━━━━━━━━━━━━━━━━━━━
⚡ <i>Administrator, mijozga qo'ng'iroq qilib bandlikni tasdiqlang!</i>
  `.trim();

  return await sendTelegramMessage(message);
}

// Global eksport
window.restaurantTelegram = {
  config: TELEGRAM_CONFIG,
  sendMessage: sendTelegramMessage,
  sendOrder: sendOrderToTelegram,
  sendReservation: sendReservationToTelegram
};
