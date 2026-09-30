/* ==========================================================================
   L'Aura Gastronomy - Cart & Order State Management
   ========================================================================== */

class RestaurantCart {
  constructor() {
    this.storageKey = 'laura_restaurant_cart_v1';
    this.items = this.loadCart();
    this.activePromo = null;
    this.deliveryThreshold = 300000; // Free delivery above 300k UZS
    this.standardDeliveryFee = 20000;
    this.listeners = [];
  }

  loadCart() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn("Could not load cart from localStorage", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch (e) {
      console.warn("Could not save cart", e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  addItem(dish, quantity = 1, selectedOptions = {}, notes = '') {
    const key = `${dish.id}-${JSON.stringify(selectedOptions)}`;
    const existingIndex = this.items.findIndex(item => item.cartKey === key);

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        cartKey: key,
        id: dish.id,
        name: dish.name,
        englishName: dish.englishName,
        price: dish.price,
        image: dish.image,
        calories: dish.calories,
        nutrition: dish.nutrition,
        quantity: quantity,
        selectedOptions: selectedOptions,
        notes: notes
      });
    }

    this.saveCart();
  }

  updateQuantity(cartKey, delta) {
    const item = this.items.find(i => i.cartKey === cartKey);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(cartKey);
      return;
    }

    this.saveCart();
  }

  removeItem(cartKey) {
    this.items = this.items.filter(i => i.cartKey !== cartKey);
    this.saveCart();
  }

  clear() {
    this.items = [];
    this.activePromo = null;
    this.saveCart();
  }

  getItemCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getTotalCalories() {
    return this.items.reduce((total, item) => {
      let cal = 0;
      if (item.nutrition && item.nutrition.calories) {
        cal = item.nutrition.calories;
      } else if (item.calories) {
        cal = parseInt(item.calories) || 0;
      }
      return total + (cal * item.quantity);
    }, 0);
  }

  applyPromo(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (cleanCode === 'LAURA20') {
      this.activePromo = { code: 'LAURA20', discountPercent: 20, name: '20% Grand Ochilish Chegirmasi' };
      this.notify();
      return { success: true, message: "20% chegirma muvaffaqiyatli qo'llandi!" };
    } else if (cleanCode === 'WELCOME') {
      this.activePromo = { code: 'WELCOME', discountPercent: 10, name: '10% Xush Kelibsiz Chegirmasi' };
      this.notify();
      return { success: true, message: "10% chegirma qo'llandi!" };
    } else if (cleanCode === 'GOURMET') {
      this.activePromo = { code: 'GOURMET', discountPercent: 15, name: '15% Gourmet Chegirmasi' };
      this.notify();
      return { success: true, message: "15% chegirma qo'llandi!" };
    } else {
      return { success: false, message: "Promo-kod yaroqsiz yoki muddati tugagan" };
    }
  }

  removePromo() {
    this.activePromo = null;
    this.notify();
  }

  getDiscountAmount() {
    if (!this.activePromo) return 0;
    const subtotal = this.getSubtotal();
    return Math.round(subtotal * (this.activePromo.discountPercent / 100));
  }

  getDeliveryFee(orderType = 'delivery') {
    if (orderType !== 'delivery') return 0;
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= this.deliveryThreshold ? 0 : this.standardDeliveryFee;
  }

  getTotal(orderType = 'delivery') {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    const discount = this.getDiscountAmount();
    const delivery = this.getDeliveryFee(orderType);
    return Math.max(0, subtotal - discount + delivery);
  }

  formatPrice(amount) {
    const formatted = new Intl.NumberFormat('uz-UZ').format(amount);
    const lang = window.I18N ? window.I18N.currentLanguage() : 'uz';
    if (lang === 'ru') return `${formatted} сум`;
    if (lang === 'en') return `${formatted} UZS`;
    return `${formatted} so'm`;
  }
}

// Single instance for page
window.restaurantCart = new RestaurantCart();
