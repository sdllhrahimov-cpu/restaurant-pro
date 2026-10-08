/* ==========================================================================
   L'Aura Gastronomy - Main Application & Interactions Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    selectedCategory: 'all',
    calorieFilter: 'all',
    searchQuery: '',
    currentModalDish: null,
    modalDishQty: 1,
    modalSelectedOptions: {},
    activeOrderType: 'delivery'
  };

  // DOM Elements
  const header = document.querySelector('.site-header');
  const horizontalTrack = document.getElementById('horizontalTrack');
  const horizontalProgressBar = document.getElementById('horizontalProgressBar');
  const btnScrollPrev = document.getElementById('scrollPrev');
  const btnScrollNext = document.getElementById('scrollNext');
  
  const morphingNav = document.getElementById('morphingNav');
  const morphingNavTrigger = document.getElementById('morphingNavTrigger');
  const categoryFiltersWrap = document.getElementById('categoryFilters');
  
  const dishesGrid = document.getElementById('dishesGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const stickySearchInput = document.getElementById('stickySearchInput');
  
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const openCartBtns = document.querySelectorAll('.trigger-open-cart');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDiscountEl = document.getElementById('cartDiscount');
  const cartDeliveryEl = document.getElementById('cartDelivery');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartBadgeEls = document.querySelectorAll('.cart-badge');
  const btnApplyPromo = document.getElementById('btnApplyPromo');
  const promoInput = document.getElementById('promoInput');
  const promoMsg = document.getElementById('promoMsg');
  const btnProceedCheckout = document.getElementById('btnProceedCheckout');

  // Modals
  const dishModal = document.getElementById('dishModal');
  const dishModalClose = document.getElementById('dishModalClose');
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutModalClose = document.getElementById('checkoutModalClose');
  const checkoutForm = document.getElementById('checkoutForm');
  const orderSuccessModal = document.getElementById('orderSuccessModal');
  const orderSuccessClose = document.getElementById('orderSuccessClose');
  const reservationModal = document.getElementById('reservationModal');
  const reservationModalClose = document.getElementById('reservationModalClose');
  const reservationForm = document.getElementById('reservationForm');
  const openReservationBtns = document.querySelectorAll('.trigger-open-reservation');

  // =========================================================================
  // 1. HEADER SCROLL & MORPHING NAV (Scroll bo'lganda menyular yeg'ilsin)
  // =========================================================================
  window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Morphing Category Bar:
    // Collapse to floating island ONLY while inside the menu section
    const menuSection = document.getElementById('menuSection');
    if (morphingNavTrigger && menuSection && morphingNav) {
      const triggerRect = morphingNavTrigger.getBoundingClientRect();
      const menuRect = menuSection.getBoundingClientRect();
      
      // Sticky bo'lish faqat menyu hududi ichida amal qiladi
      if (triggerRect.top <= 100 && menuRect.bottom > 200) {
        morphingNav.classList.add('is-sticky');
      } else {
        morphingNav.classList.remove('is-sticky');
      }
    }
  }, { passive: true });

  // =========================================================================
  // 2. HORIZONTAL SCROLL SHOWCASE ("ovqatlar menyulari yon tomonga scroll bo'lib...")
  // =========================================================================
  function renderHorizontalShowcase() {
    if (!horizontalTrack) return;
    
    // Filter signature dishes
    const signatures = RESTAURANT_MENU.filter(d => d.isSignature);
    horizontalTrack.innerHTML = signatures.map(dish => {
      const trans = window.I18N ? window.I18N.getDishTranslation(dish.id, dish) : dish;
      const recipeBtnText = window.I18N ? window.I18N.t('btn_recipe') : '📖 Retsepti';
      const addCartBtnText = window.I18N ? window.I18N.t('btn_add_to_cart') : '+ Savatchaga';
      const badgeText = (trans.badges && trans.badges[0]) || dish.badges[0] || "Chef's Special";

      return `
      <article class="horizontal-card" data-id="${dish.id}">
        <div class="h-card-img-wrap">
          <img src="${dish.image}" alt="${trans.name}" class="h-card-img" loading="lazy">
          <span class="h-card-badge">${badgeText}</span>
          <div class="h-card-calorie-tag" title="Energetik qiymati">
            <span class="flame-icon">🔥</span>
            <span>${dish.calories}</span>
          </div>
          <span class="h-card-rating">★ ${dish.rating}</span>
        </div>
        <div class="h-card-content">
          <h3 class="h-card-title">${trans.name}</h3>
          <p class="h-card-eng">${dish.englishName}</p>
          <p class="h-card-desc">${trans.description}</p>

          <div class="card-recipe-box">
            <div class="card-recipe-header">
              <span>📖</span>
              <span>${window.I18N ? window.I18N.t('modal_recipe_heading') : 'Retsept & Masalliqlar:'}</span>
            </div>
            <p class="card-recipe-text">${trans.recipeSummary || dish.recipeSummary}</p>
            <div class="card-macro-chips">
              <span class="macro-chip cal-highlight">🔥 ${dish.calories}</span>
              <span class="macro-chip" title="Oqsil">🥩 ${dish.nutrition.protein}</span>
              <span class="macro-chip" title="Yog'">🥑 ${dish.nutrition.fat}</span>
              <span class="macro-chip" title="Uglevod">🌾 ${dish.nutrition.carbs}</span>
              <span class="macro-chip weight" title="Sof vazni">⚖️ ${dish.nutrition.weight}</span>
            </div>
          </div>

          <div class="h-card-footer">
            <div class="h-card-price-block">
              ${dish.oldPrice ? `<span class="h-card-old-price">${window.restaurantCart.formatPrice(dish.oldPrice)}</span>` : ''}
              <span class="h-card-price">${window.restaurantCart.formatPrice(dish.price)}</span>
            </div>
            <div class="h-card-actions">
              <button class="btn-view-recipe btn-card-details" title="Retsept va kaloriyani ko'rish" data-dish-id="${dish.id}">
                <span>${recipeBtnText}</span>
              </button>
              <button class="btn-quick-add" data-dish-id="${dish.id}">
                <span>${addCartBtnText}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `}).join('');

    // Update progress on track scroll
    updateHorizontalProgress();
  }

  function updateHorizontalProgress() {
    if (!horizontalTrack || !horizontalProgressBar) return;
    const maxScroll = horizontalTrack.scrollWidth - horizontalTrack.clientWidth;
    if (maxScroll <= 0) {
      horizontalProgressBar.style.width = '100%';
      return;
    }
    const current = horizontalTrack.scrollLeft;
    const percent = Math.min(100, Math.max(10, (current / maxScroll) * 100));
    horizontalProgressBar.style.width = `${percent}%`;
  }

  if (horizontalTrack) {
    horizontalTrack.addEventListener('scroll', updateHorizontalProgress, { passive: true });

    // Scroll buttons
    if (btnScrollPrev) {
      btnScrollPrev.addEventListener('click', () => {
        horizontalTrack.scrollBy({ left: -380, behavior: 'smooth' });
      });
    }
    if (btnScrollNext) {
      btnScrollNext.addEventListener('click', () => {
        horizontalTrack.scrollBy({ left: 380, behavior: 'smooth' });
      });
    }

    // Drag-to-scroll for desktop mouse
    let isDown = false;
    let startX;
    let scrollLeftPos;

    horizontalTrack.addEventListener('mousedown', (e) => {
      // Don't drag if clicking buttons
      if (e.target.closest('button')) return;
      isDown = true;
      horizontalTrack.style.cursor = 'grabbing';
      startX = e.pageX - horizontalTrack.offsetLeft;
      scrollLeftPos = horizontalTrack.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
      if (horizontalTrack) horizontalTrack.style.cursor = 'grab';
    });

    horizontalTrack.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - horizontalTrack.offsetLeft;
      const walk = (x - startX) * 1.8;
      horizontalTrack.scrollLeft = scrollLeftPos - walk;
    });
  }

  // =========================================================================
  // 3. CATEGORIES & MENU GRID
  // =========================================================================
  function renderCategories() {
    if (!categoryFiltersWrap) return;
    categoryFiltersWrap.innerHTML = MENU_CATEGORIES.map(cat => {
      const catName = window.I18N ? window.I18N.t('cat_' + cat.id) : cat.name;
      return `
      <li>
        <button class="category-tab-btn ${cat.id === state.selectedCategory ? 'active' : ''}" data-category="${cat.id}">
          <span class="cat-icon">${cat.icon}</span>
          <span>${catName}</span>
          <span class="category-badge-count">${cat.count}</span>
        </button>
      </li>
    `}).join('');

    // Attach click event
    categoryFiltersWrap.querySelectorAll('.category-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        state.selectedCategory = cat;
        
        // Update active class
        categoryFiltersWrap.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Re-render dishes
        renderDishesGrid();

        // If in sticky mode, smoothly scroll to top of menu
        if (morphingNav.classList.contains('is-sticky')) {
          const menuAnchor = document.getElementById('menuSection');
          if (menuAnchor) {
            window.scrollTo({
              top: menuAnchor.offsetTop - 140,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  function renderDishesGrid() {
    if (!dishesGrid) return;

    let filtered = RESTAURANT_MENU.filter(dish => {
      const matchCat = state.selectedCategory === 'all' || dish.category === state.selectedCategory;
      
      // Calorie filter logic
      let matchCal = true;
      const calNum = dish.nutrition ? dish.nutrition.calories : (parseInt(dish.calories) || 0);
      if (state.calorieFilter === 'light') {
        matchCal = calNum < 400;
      } else if (state.calorieFilter === 'medium') {
        matchCal = calNum >= 400 && calNum <= 600;
      } else if (state.calorieFilter === 'heavy') {
        matchCal = calNum > 600;
      }

      const q = state.searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        dish.name.toLowerCase().includes(q) || 
        dish.englishName.toLowerCase().includes(q) || 
        dish.description.toLowerCase().includes(q) ||
        (dish.recipeSummary && dish.recipeSummary.toLowerCase().includes(q)) ||
        (dish.ingredients && dish.ingredients.some(ing => ing.toLowerCase().includes(q))) ||
        dish.badges.some(b => b.toLowerCase().includes(q));

      return matchCat && matchCal && matchSearch;
    });

    if (filtered.length === 0) {
      dishesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="color: #fff; margin-bottom: 0.5rem;">Hech qanday taom topilmadi</h3>
          <p>Boshqa qidiruv so'zini kiriting yoki kaloriya filtrini o'zgartiring.</p>
        </div>
      `;
      return;
    }

    dishesGrid.innerHTML = filtered.map(dish => {
      const trans = window.I18N ? window.I18N.getDishTranslation(dish.id, dish) : dish;
      const recipeBtnText = window.I18N ? window.I18N.t('btn_recipe') : '📖 Retsepti';
      const addCartBtnText = window.I18N ? window.I18N.t('btn_add_to_cart') : '+ Savatchaga';
      const badgesList = trans.badges || dish.badges || [];

      return `
      <div class="dish-grid-card" data-dish-id="${dish.id}">
        <div class="card-media">
          <img src="${dish.image}" alt="${trans.name}" loading="lazy">
          <div class="card-badges-top">
            ${badgesList.map(b => `<span class="badge-pill gold">${b}</span>`).join('')}
          </div>
          <div class="card-calorie-badge" title="Energetik quvvati">
            <span class="flame-icon">🔥</span>
            <span>${dish.calories}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-header-row">
            <h3 class="dish-name">${trans.name}</h3>
            <span style="color: #ffc107; font-size: 0.85rem; font-weight: 700;">★ ${dish.rating}</span>
          </div>
          <p class="dish-desc-text">${trans.description}</p>
          
          <div class="card-recipe-box">
            <div class="card-recipe-header">
              <span>📖</span>
              <span>${window.I18N ? window.I18N.t('modal_recipe_heading') : 'Retsept & Masalliqlar:'}</span>
            </div>
            <p class="card-recipe-text">${trans.recipeSummary || dish.recipeSummary}</p>
            <div class="card-macro-chips">
              <span class="macro-chip cal-highlight">🔥 ${dish.calories}</span>
              <span class="macro-chip" title="Oqsil">🥩 ${dish.nutrition.protein}</span>
              <span class="macro-chip" title="Yog'">🥑 ${dish.nutrition.fat}</span>
              <span class="macro-chip" title="Uglevod">🌾 ${dish.nutrition.carbs}</span>
              <span class="macro-chip weight" title="Sof og'irligi">⚖️ ${dish.nutrition.weight}</span>
            </div>
          </div>

          <div class="dish-meta-row">
            <span class="dish-meta-item">⏱ ${dish.prepTime}</span>
            <span class="dish-meta-item" style="color: #ff9d54; font-weight: 600;">🔥 ${dish.calories}</span>
            <span class="dish-meta-item">⚖️ ${dish.nutrition.weight}</span>
          </div>

          <div class="card-bottom-row">
            <span class="price-display">${window.restaurantCart.formatPrice(dish.price)}</span>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button class="btn-view-recipe btn-card-details" title="Retsept va to'liq kaloriyani ko'rish" data-dish-id="${dish.id}">
                <span>${recipeBtnText}</span>
              </button>
              <button class="btn-quick-add" data-dish-id="${dish.id}">
                <span>${addCartBtnText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `}).join('');
  }

  // Search input listeners
  function handleSearchInput(val) {
    state.searchQuery = val;
    if (searchInput && searchInput.value !== val) searchInput.value = val;
    if (stickySearchInput && stickySearchInput.value !== val) stickySearchInput.value = val;
    renderDishesGrid();
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
  }
  if (stickySearchInput) {
    stickySearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
  }

  // =========================================================================
  // 4. DISH MODAL & CUSTOMIZER
  // =========================================================================
  function openDishModal(dishId) {
    const dish = RESTAURANT_MENU.find(d => d.id === dishId);
    if (!dish) return;

    state.currentModalDish = dish;
    state.modalDishQty = 1;
    state.modalSelectedOptions = {};

    const content = document.getElementById('dishModalContent');
    if (!content) return;

    // Build options UI
    let optionsHtml = '';
    if (dish.options) {
      if (dish.options.doneness) {
        optionsHtml += `
          <div class="form-group">
            <label class="form-label">Go'shtning pishish darajasi (Doneness):</label>
            <div class="radio-pills">
              ${dish.options.doneness.map((d, i) => `
                <div class="radio-pill-item">
                  <input type="radio" name="opt_doneness" id="done_${i}" value="${d}" ${i === 0 ? 'checked' : ''}>
                  <label for="done_${i}" class="radio-pill-label">${d}</label>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        state.modalSelectedOptions['Pishish darajasi'] = dish.options.doneness[0];
      }

      if (dish.options.sauces) {
        optionsHtml += `
          <div class="form-group">
            <label class="form-label">Sous tanlovi:</label>
            <div class="radio-pills">
              ${dish.options.sauces.map((s, i) => `
                <div class="radio-pill-item">
                  <input type="radio" name="opt_sauce" id="sauce_${i}" value="${s}" ${i === 0 ? 'checked' : ''}>
                  <label for="sauce_${i}" class="radio-pill-label">${s}</label>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        state.modalSelectedOptions['Sous'] = dish.options.sauces[0];
      }

      if (dish.options.sides) {
        optionsHtml += `
          <div class="form-group">
            <label class="form-label">Garnir qo'shimchasi:</label>
            <div class="radio-pills">
              ${dish.options.sides.map((sd, i) => `
                <div class="radio-pill-item">
                  <input type="radio" name="opt_side" id="side_${i}" value="${sd}" ${i === 0 ? 'checked' : ''}>
                  <label for="side_${i}" class="radio-pill-label">${sd}</label>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        state.modalSelectedOptions['Garnir'] = dish.options.sides[0];
      }

      if (dish.options.gelato) {
        optionsHtml += `
          <div class="form-group">
            <label class="form-label">Muzqaymoq varianti:</label>
            <div class="radio-pills">
              ${dish.options.gelato.map((g, i) => `
                <div class="radio-pill-item">
                  <input type="radio" name="opt_gelato" id="gelato_${i}" value="${g}" ${i === 0 ? 'checked' : ''}>
                  <label for="gelato_${i}" class="radio-pill-label">${g}</label>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        state.modalSelectedOptions['Muzqaymoq'] = dish.options.gelato[0];
      }
    }

    content.innerHTML = `
      <div style="height: 280px; position: relative; overflow: hidden;">
        <img src="${dish.image}" alt="${dish.name}" style="width:100%; height:100%; object-fit: cover;">
        <div style="position: absolute; bottom: 15px; left: 20px; display: flex; gap: 0.5rem;">
          ${dish.badges.map(b => `<span class="badge-pill gold">${b}</span>`).join('')}
        </div>
        <div class="card-calorie-badge" style="top: 18px; right: 18px; font-size: 0.88rem; padding: 0.4rem 0.95rem;">
          <span class="flame-icon">🔥</span>
          <span>${dish.calories}</span>
        </div>
      </div>
      <div style="padding: 1.8rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.3rem;">
          <h2 style="font-size: 1.8rem;">${dish.name}</h2>
        </div>
        <p style="color: var(--accent-gold); font-style: italic; margin-bottom: 0.8rem;">${dish.englishName}</p>
        <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 1.4rem;">${dish.description}</p>
        
        <!-- 1. ENERGETIK QIYMATI VA KALORIYA DASHBOARD -->
        <div class="modal-nutrition-dashboard">
          <div class="modal-nutrition-top">
            <div class="modal-nutrition-title">
              <span>🔥</span>
              <span>Energetik Qiymati & Kaloriya Balansi</span>
            </div>
            <span class="modal-daily-percent">Kunlik me'yor: ~${dish.nutrition.percentDaily}</span>
          </div>

          <div class="modal-macro-grid">
            <div class="macro-card calorie-card">
              <span class="macro-card-icon">🔥</span>
              <span class="macro-card-value">${dish.nutrition.calories}</span>
              <span class="macro-card-label">Kkal (Kaloriya)</span>
            </div>
            <div class="macro-card">
              <span class="macro-card-icon">🥩</span>
              <span class="macro-card-value">${dish.nutrition.protein}</span>
              <span class="macro-card-label">Sof Oqsil</span>
            </div>
            <div class="macro-card">
              <span class="macro-card-icon">🥑</span>
              <span class="macro-card-value">${dish.nutrition.fat}</span>
              <span class="macro-card-label">Foydali Yog'</span>
            </div>
            <div class="macro-card">
              <span class="macro-card-icon">🌾</span>
              <span class="macro-card-value">${dish.nutrition.carbs}</span>
              <span class="macro-card-label">Uglevod</span>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
            <span>Sof porsiya og'irligi: <strong style="color: #fff;">${dish.nutrition.weight}</strong></span>
            <span>Tayyorlanish vaqti: <strong style="color: #fff;">${dish.prepTime}</strong></span>
          </div>
          <div class="energy-bar-wrap">
            <div class="energy-bar-fill" style="width: ${Math.min(100, Math.round((dish.nutrition.calories / 800) * 100))}%;"></div>
          </div>
          <div class="energy-bar-legend">
            <span>🥗 Yengil taom (&lt;400 kkal)</span>
            <span>⚖️ Balanslangan (400-600 kkal)</span>
            <span>🥩 Yuqori to'yimli (&gt;600 kkal)</span>
          </div>
        </div>

        <!-- 2. MASALLIQLAR VA RETSEPT -->
        <div class="modal-recipe-box">
          <div class="modal-recipe-title">
            <span>🥗</span>
            <span>Taom Masalliqlari & Tarkibi:</span>
          </div>
          <div class="ingredients-tags">
            ${dish.ingredients.map(ing => `
              <span class="ingredient-tag">
                <span class="check">✓</span>
                <span>${ing}</span>
              </span>
            `).join('')}
          </div>

          <div class="modal-recipe-title" style="margin-top: 1.2rem;">
            <span>👨‍🍳</span>
            <span>Oshpaz Retsepti va Tayyorlanish Bosqichlari:</span>
          </div>
          <div class="recipe-steps-wrap">
            ${dish.recipeSteps.map((step, idx) => `
              <div class="recipe-step-item">
                <span class="step-number-badge">${idx + 1}</span>
                <span>${step.replace(/^[0-9]+\.\s*/, '')}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="padding: 1rem; background: rgba(212, 175, 55, 0.06); border-left: 3px solid var(--accent-gold); border-radius: 4px; margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.88rem; color: var(--accent-gold-light); margin-bottom: 0.3rem;">Oshpaz falsafasi & tarixi:</h4>
          <p style="font-size: 0.82rem; color: var(--text-secondary);">${dish.story}</p>
        </div>

        ${optionsHtml}

        <div class="form-group">
          <label class="form-label">Oshpazga maxsus izoh / talablar:</label>
          <input type="text" id="modalDishNote" class="form-control" placeholder="Masalan: Piyozsiz, kam tuzli, va h.k.">
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Jami narx:</span>
            <span id="modalDishTotal" style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold); font-family: var(--font-serif);">
              ${window.restaurantCart.formatPrice(dish.price)}
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 1.2rem;">
            <div class="quantity-controls" style="padding: 0.3rem;">
              <button type="button" class="qty-btn" id="modalQtyMinus">−</button>
              <span class="qty-number" id="modalQtyVal" style="font-size: 1rem; padding: 0 0.9rem;">1</span>
              <button type="button" class="qty-btn" id="modalQtyPlus">+</button>
            </div>

            <button type="button" class="btn btn-gold" id="modalAddToCartBtn">
              Savatchaga qo'shish
            </button>
          </div>
        </div>
      </div>
    `;

    // Modal Qty & Option Listeners
    const modalQtyMinus = content.querySelector('#modalQtyMinus');
    const modalQtyPlus = content.querySelector('#modalQtyPlus');
    const modalQtyVal = content.querySelector('#modalQtyVal');
    const modalDishTotal = content.querySelector('#modalDishTotal');
    const modalAddToCartBtn = content.querySelector('#modalAddToCartBtn');

    function updateModalTotal() {
      modalQtyVal.textContent = state.modalDishQty;
      modalDishTotal.textContent = window.restaurantCart.formatPrice(dish.price * state.modalDishQty);
    }

    modalQtyMinus.addEventListener('click', () => {
      if (state.modalDishQty > 1) {
        state.modalDishQty--;
        updateModalTotal();
      }
    });

    modalQtyPlus.addEventListener('click', () => {
      state.modalDishQty++;
      updateModalTotal();
    });

    // Option radios
    content.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        const key = e.target.name.replace('opt_', '');
        state.modalSelectedOptions[key] = e.target.value;
      });
    });

    // Add to cart
    modalAddToCartBtn.addEventListener('click', () => {
      const noteInput = content.querySelector('#modalDishNote');
      const note = noteInput ? noteInput.value.trim() : '';
      
      window.restaurantCart.addItem(dish, state.modalDishQty, state.modalSelectedOptions, note);
      closeDishModal();
      openCartDrawer();
    });

    dishModal.classList.add('open');
  }

  function closeDishModal() {
    if (dishModal) dishModal.classList.remove('open');
  }

  if (dishModalClose) dishModalClose.addEventListener('click', closeDishModal);
  if (dishModal) {
    dishModal.addEventListener('click', (e) => {
      if (e.target === dishModal) closeDishModal();
    });
  }

  // Delegated clicks for adding dishes from Grid or Showcase
  document.addEventListener('click', (e) => {
    // Quick Add Button
    const quickAddBtn = e.target.closest('.btn-quick-add');
    if (quickAddBtn) {
      e.stopPropagation();
      const dishId = quickAddBtn.getAttribute('data-dish-id');
      const dish = RESTAURANT_MENU.find(d => d.id === dishId);
      if (dish) {
        window.restaurantCart.addItem(dish, 1);
        // Show visual pulse on cart button
        triggerCartBump();
      }
      return;
    }

    // Card details button
    const detailsBtn = e.target.closest('.btn-card-details');
    if (detailsBtn) {
      e.stopPropagation();
      const dishId = detailsBtn.getAttribute('data-dish-id');
      openDishModal(dishId);
      return;
    }

    // Dish grid card click
    const gridCard = e.target.closest('.dish-grid-card');
    if (gridCard && !e.target.closest('button')) {
      const dishId = gridCard.getAttribute('data-dish-id');
      openDishModal(dishId);
      return;
    }
  });

  function triggerCartBump() {
    cartBadgeEls.forEach(badge => {
      badge.style.transform = 'scale(1.4)';
      setTimeout(() => {
        badge.style.transform = 'scale(1)';
      }, 300);
    });
  }

  // =========================================================================
  // 5. CART DRAWER & OPERATIONS
  // =========================================================================
  function openCartDrawer() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.add('open');
      cartBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.remove('open');
      cartBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  openCartBtns.forEach(btn => btn.addEventListener('click', openCartDrawer));
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // Update Cart UI whenever state changes
  window.restaurantCart.subscribe((cart) => {
    // 1. Badges
    const count = cart.getItemCount();
    cartBadgeEls.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });

    // 2. Items list in drawer
    if (!cartItemsList) return;

    if (cart.items.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-cart-icon">🍽️</div>
          <h4 style="color: #fff; margin-bottom: 0.4rem;">Savatchangiz bo'sh</h4>
          <p style="font-size: 0.88rem;">Menyudan lazzatli taomlarni tanlang va bir necha daqiqada buyurtma bering.</p>
        </div>
      `;
      if (btnProceedCheckout) btnProceedCheckout.disabled = true;
    } else {
      if (btnProceedCheckout) btnProceedCheckout.disabled = false;
      cartItemsList.innerHTML = cart.items.map(item => {
        const optionsSummary = Object.entries(item.selectedOptions || {})
          .map(([k, v]) => `${v}`)
          .join(', ');

        return `
          <div class="cart-item-card">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
              <div>
                <h4 class="cart-item-title">${item.name}</h4>
                ${optionsSummary ? `<p class="cart-item-options">${optionsSummary}</p>` : ''}
                ${item.notes ? `<p class="cart-item-options"><em>Izoh: ${item.notes}</em></p>` : ''}
              </div>
              <div class="cart-item-bottom">
                <span class="cart-item-price">${cart.formatPrice(item.price * item.quantity)}</span>
                <div class="quantity-controls">
                  <button class="qty-btn" data-cart-action="dec" data-key="${item.cartKey}">−</button>
                  <span class="qty-number">${item.quantity}</span>
                  <button class="qty-btn" data-cart-action="inc" data-key="${item.cartKey}">+</button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Attach Qty controls inside cart
      cartItemsList.querySelectorAll('[data-cart-action]').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.getAttribute('data-cart-action');
          const key = btn.getAttribute('data-key');
          if (action === 'inc') cart.updateQuantity(key, 1);
          if (action === 'dec') cart.updateQuantity(key, -1);
        });
      });
    }

    // 3. Totals
    const subtotal = cart.getSubtotal();
    const discount = cart.getDiscountAmount();
    const delivery = cart.getDeliveryFee(state.activeOrderType);
    const total = cart.getTotal(state.activeOrderType);

    if (cartSubtotalEl) cartSubtotalEl.textContent = cart.formatPrice(subtotal);
    
    if (cartDiscountRow) {
      if (discount > 0) {
        cartDiscountRow.style.display = 'flex';
        if (cartDiscountEl) cartDiscountEl.textContent = `- ${cart.formatPrice(discount)}`;
      } else {
        cartDiscountRow.style.display = 'none';
      }
    }

    if (cartDeliveryEl) {
      cartDeliveryEl.textContent = delivery === 0 ? 'BEPUL' : cart.formatPrice(delivery);
    }
    if (cartTotalEl) cartTotalEl.textContent = cart.formatPrice(total);
  });

  // Promo Code
  if (btnApplyPromo && promoInput) {
    btnApplyPromo.addEventListener('click', () => {
      const code = promoInput.value;
      const res = window.restaurantCart.applyPromo(code);
      if (promoMsg) {
        promoMsg.textContent = res.message;
        promoMsg.style.color = res.success ? 'var(--color-success)' : 'var(--color-danger)';
        promoMsg.style.display = 'block';
      }
    });
  }

  // =========================================================================
  // 6. UZBEKISTAN PHONE NUMBER MASK & VALIDATION
  // =========================================================================
  function setupUzPhoneMask(inputEl) {
    if (!inputEl) return;

    function formatUzPhone(val) {
      let digits = val.replace(/\D/g, '');

      // Agar bo'sh bo'lsa
      if (!digits) return '';

      // Agar 998 bilan boshlanmagan bo'lsa, uni 998 ga keltiramiz
      if (!digits.startsWith('998')) {
        if (digits.startsWith('8')) {
          digits = '998' + digits.slice(1);
        } else {
          digits = '998' + digits;
        }
      }

      // O'zbekiston standarti: 998 + 9 ta raqam (jami 12 ta)
      digits = digits.slice(0, 12);

      let formatted = '+998';
      const local = digits.slice(3); // operator kodi va qolgan raqamlar

      if (local.length > 0) {
        formatted += ' (' + local.slice(0, 2);
      }
      if (local.length >= 2) {
        formatted += ') ';
      }
      if (local.length > 2) {
        formatted += local.slice(2, 5);
      }
      if (local.length > 5) {
        formatted += '-' + local.slice(5, 7);
      }
      if (local.length > 7) {
        formatted += '-' + local.slice(7, 9);
      }

      return formatted;
    }

    inputEl.addEventListener('focus', () => {
      if (!inputEl.value.trim() || inputEl.value.trim() === '+998') {
        inputEl.value = '+998 (';
      }
    });

    inputEl.addEventListener('input', () => {
      inputEl.value = formatUzPhone(inputEl.value);

      const digits = inputEl.value.replace(/\D/g, '');
      if (digits.length === 12) {
        inputEl.classList.remove('input-error');
        inputEl.classList.add('input-success');
      } else {
        inputEl.classList.remove('input-success');
      }
    });

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && inputEl.value.length <= 6) {
        e.preventDefault();
        inputEl.value = '+998 (';
      }
    });
  }

  function isValidUzPhone(value) {
    if (!value) return false;
    const digits = value.replace(/\D/g, '');
    return digits.length === 12 && digits.startsWith('998');
  }

  const checkoutPhoneInput = document.getElementById('checkoutPhone');
  const reservationPhoneInput = document.getElementById('reservationPhone');
  setupUzPhoneMask(checkoutPhoneInput);
  setupUzPhoneMask(reservationPhoneInput);

  // =========================================================================
  // INTERACTIVE MAP FOR DELIVERY ADDRESS (Leaflet + OpenStreetMap)
  // =========================================================================
  let checkoutMapInstance = null;
  let checkoutMapMarker = null;

  function initCheckoutMap() {
    const mapEl = document.getElementById('checkoutMap');
    const mapContainer = document.getElementById('checkoutMapContainer');
    const btnToggleMap = document.getElementById('btnToggleMap');
    const btnGetLocation = document.getElementById('btnGetLocation');
    const addressInput = document.getElementById('checkoutAddress');
    const latInput = document.getElementById('checkoutLat');
    const lngInput = document.getElementById('checkoutLng');
    const coordsBadge = document.getElementById('mapCoordsBadge');
    const addressLoading = document.getElementById('addressLoading');

    if (!mapEl || !window.L) return;

    const defaultLat = 41.311081;
    const defaultLng = 69.240562;

    function ensureMapCreated() {
      if (checkoutMapInstance) return;

      checkoutMapInstance = L.map('checkoutMap', {
        center: [defaultLat, defaultLng],
        zoom: 13,
        zoomControl: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(checkoutMapInstance);

      checkoutMapMarker = L.marker([defaultLat, defaultLng], {
        draggable: true
      }).addTo(checkoutMapInstance);

      checkoutMapMarker.on('dragend', function () {
        const pos = checkoutMapMarker.getLatLng();
        updateSelectedLocation(pos.lat, pos.lng, true);
      });

      checkoutMapInstance.on('click', function (e) {
        const { lat, lng } = e.latlng;
        checkoutMapMarker.setLatLng([lat, lng]);
        updateSelectedLocation(lat, lng, true);
      });
    }

    function showMapContainer() {
      if (mapContainer) {
        mapContainer.style.display = 'block';
        if (btnToggleMap) {
          btnToggleMap.textContent = "🗺 Xaritani yashirish";
          btnToggleMap.style.borderColor = "var(--accent-gold)";
        }
        ensureMapCreated();
        setTimeout(() => {
          if (checkoutMapInstance) checkoutMapInstance.invalidateSize();
        }, 150);
      }
    }

    function toggleMapContainer() {
      if (!mapContainer) return;
      if (mapContainer.style.display === 'none' || !mapContainer.style.display) {
        showMapContainer();
      } else {
        mapContainer.style.display = 'none';
        if (btnToggleMap) {
          btnToggleMap.textContent = "🗺 Xaritani ko'rsatish";
          btnToggleMap.style.borderColor = "var(--border-subtle)";
        }
      }
    }

    async function updateSelectedLocation(lat, lng, fetchAddress = false) {
      if (latInput) latInput.value = lat;
      if (lngInput) lngInput.value = lng;
      if (coordsBadge) {
        coordsBadge.textContent = `${Number(lat).toFixed(4)}, ${Number(lng).toFixed(4)}`;
      }

      if (fetchAddress && addressInput) {
        if (addressLoading) addressLoading.style.display = 'inline';
        try {
          const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=uz,ru`);
          if (resp.ok) {
            const data = await resp.json();
            if (data && data.address) {
              const a = data.address;
              const parts = [];
              if (a.road) parts.push(a.road + (a.house_number ? ' ' + a.house_number : ''));
              if (a.neighbourhood || a.suburb) parts.push(a.neighbourhood || a.suburb);
              if (a.district || a.city_district) parts.push(a.district || a.city_district);
              if (a.city || a.town) parts.push(a.city || a.town);

              const formattedAddr = parts.length > 0 ? parts.join(', ') : data.display_name;
              addressInput.value = formattedAddr;
            } else if (data && data.display_name) {
              addressInput.value = data.display_name;
            }
          }
        } catch (err) {
          console.warn("Geocoding xatolik:", err);
        } finally {
          if (addressLoading) addressLoading.style.display = 'none';
        }
      }
    }

    if (btnToggleMap) {
      btnToggleMap.addEventListener('click', toggleMapContainer);
    }

    if (btnGetLocation) {
      btnGetLocation.addEventListener('click', () => {
        if (!navigator.geolocation) {
          alert("Brauzeringizda joylashuvni aniqlash (geolokatsiya) qo'llab-quvvatlanmaydi.");
          return;
        }

        btnGetLocation.classList.add('loading');
        btnGetLocation.textContent = "📍 Aniqlanmoqda...";

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            btnGetLocation.classList.remove('loading');
            btnGetLocation.textContent = "📍 Mening joylashuvim";
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            showMapContainer();
            if (checkoutMapInstance) {
              checkoutMapInstance.setView([lat, lng], 16);
              checkoutMapMarker.setLatLng([lat, lng]);
            }
            updateSelectedLocation(lat, lng, true);
          },
          (err) => {
            btnGetLocation.classList.remove('loading');
            btnGetLocation.textContent = "📍 Mening joylashuvim";
            alert("Joylashuvni avtomatik aniqlab bo'lmadi. Iltimos, xaritada joyni qo'lda tanlang.");
            showMapContainer();
          },
          { enableHighAccuracy: true, timeout: 10000 }
        );
      });
    }

    window.refreshCheckoutMap = () => {
      if (checkoutMapInstance) {
        setTimeout(() => checkoutMapInstance.invalidateSize(), 150);
      }
    };
  }

  // Initialize map when DOM and Leaflet ready
  if (window.L) {
    initCheckoutMap();
  } else {
    window.addEventListener('load', initCheckoutMap);
  }

  // =========================================================================
  // 7. CHECKOUT MODAL & ORDER SUBMISSION
  // =========================================================================
  if (btnProceedCheckout) {
    btnProceedCheckout.addEventListener('click', () => {
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  function openCheckoutModal() {
    if (!checkoutModal) return;
    updateCheckoutSummary();
    checkoutModal.classList.add('open');
    if (window.refreshCheckoutMap) window.refreshCheckoutMap();
  }

  function closeCheckoutModal() {
    if (checkoutModal) checkoutModal.classList.remove('open');
  }

  if (checkoutModalClose) checkoutModalClose.addEventListener('click', closeCheckoutModal);

  // Order type switcher in checkout (Delivery vs Dine-in)
  const orderTypeRadios = document.querySelectorAll('input[name="checkoutOrderType"]');
  orderTypeRadios.forEach(r => {
    r.addEventListener('change', (e) => {
      state.activeOrderType = e.target.value;
      const addressField = document.getElementById('checkoutAddressGroup');
      const tableField = document.getElementById('checkoutTableGroup');
      if (e.target.value === 'delivery') {
        if (addressField) addressField.style.display = 'block';
        if (tableField) tableField.style.display = 'none';
        if (window.refreshCheckoutMap) window.refreshCheckoutMap();
      } else {
        if (addressField) addressField.style.display = 'none';
        if (tableField) tableField.style.display = 'block';
      }
      window.restaurantCart.notify();
      updateCheckoutSummary();
    });
  });

  function updateCheckoutSummary() {
    const summaryList = document.getElementById('checkoutSummaryList');
    const checkoutTotalEl = document.getElementById('checkoutFinalTotal');
    if (!summaryList || !checkoutTotalEl) return;

    const cart = window.restaurantCart;
    summaryList.innerHTML = cart.items.map(i => `
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.4rem;">
        <span style="color: var(--text-secondary);">${i.name} × ${i.quantity}</span>
        <span style="font-weight: 600; color: #fff;">${cart.formatPrice(i.price * i.quantity)}</span>
      </div>
    `).join('');

    checkoutTotalEl.textContent = cart.formatPrice(cart.getTotal(state.activeOrderType));
  }

  // Submit Order Form
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = checkoutForm.querySelector('button[type="submit"]');

      const nameInput = checkoutForm.querySelector('input[placeholder*="Asadulloh"]');
      const phoneInput = document.getElementById('checkoutPhone') || checkoutForm.querySelector('input[type="tel"]');
      const addressInput = document.getElementById('checkoutAddress');
      const latInput = document.getElementById('checkoutLat');
      const lngInput = document.getElementById('checkoutLng');
      const tableInput = document.getElementById('checkoutTableGroup') ? document.getElementById('checkoutTableGroup').querySelector('input') : null;
      const payRadio = checkoutForm.querySelector('input[name="payMethod"]:checked');

      const customerName = nameInput ? nameInput.value.trim() : 'Mijoz';
      const phone = phoneInput ? phoneInput.value.trim() : '';

      // O'zbekiston raqami validatsiyasi
      if (!isValidUzPhone(phone)) {
        if (phoneInput) {
          phoneInput.classList.add('input-error');
          phoneInput.focus();
        }
        alert("Iltimos, to'liq O'zbekiston telefon raqamini kiriting!\nFormat: +998 (XX) XXX-XX-XX");
        return;
      }

      // Yetkazib berish bo'lsa manzil tekshiruvi
      const isDelivery = state.activeOrderType === 'delivery';
      const address = addressInput ? addressInput.value.trim() : '';
      if (isDelivery && !address) {
        if (addressInput) {
          addressInput.classList.add('input-error');
          addressInput.focus();
        }
        alert("Iltimos, yetkazib berish manzilini kiriting yoki xaritadan tanlang!");
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Buyurtma rasmiylashtirilmoqda va Telegramga yuborilmoqda... ⏳';
      }

      const tableNo = tableInput ? tableInput.value.trim() : '';
      const paymentMethod = payRadio ? payRadio.value : 'cash';
      const orderId = 'LA-' + Math.floor(1000 + Math.random() * 9000);
      const cart = window.restaurantCart;

      const orderData = {
        orderId,
        customerName,
        phone,
        orderType: state.activeOrderType,
        address,
        latitude: latInput ? latInput.value : '',
        longitude: lngInput ? lngInput.value : '',
        tableNo,
        paymentMethod,
        items: [...cart.items],
        subtotal: cart.getSubtotal(),
        discount: cart.getDiscountAmount(),
        deliveryFee: cart.getDeliveryFee(state.activeOrderType),
        total: cart.getTotal(state.activeOrderType)
      };

      // Telegram Bot orqali guruhga yuborish
      if (window.restaurantTelegram) {
        try {
          await window.restaurantTelegram.sendOrder(orderData);
        } catch (err) {
          console.error("Telegramga yuborishda xatolik:", err);
        }
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Buyurtmani tasdiqlash';
      }

      closeCheckoutModal();
      openOrderSuccessModal(orderId);
      window.restaurantCart.clear();
      checkoutForm.reset();
      if (checkoutPhoneInput) checkoutPhoneInput.value = '';
    });
  }

  // Success Modal
  function openOrderSuccessModal(orderId) {
    if (!orderSuccessModal) return;
    const orderIdEl = document.getElementById('successOrderId');
    if (orderIdEl) orderIdEl.textContent = '#' + orderId;
    orderSuccessModal.classList.add('open');
  }

  if (orderSuccessClose) {
    orderSuccessClose.addEventListener('click', () => {
      if (orderSuccessModal) orderSuccessModal.classList.remove('open');
    });
  }

  // =========================================================================
  // 8. TABLE RESERVATION MODAL
  // =========================================================================
  function openReservation() {
    if (reservationModal) reservationModal.classList.add('open');
  }
  function closeReservation() {
    if (reservationModal) reservationModal.classList.remove('open');
  }

  openReservationBtns.forEach(btn => btn.addEventListener('click', openReservation));
  if (reservationModalClose) reservationModalClose.addEventListener('click', closeReservation);

  if (reservationForm) {
    reservationForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = reservationForm.querySelector('input[placeholder*="Jamshid"]');
      const phoneInput = document.getElementById('reservationPhone') || reservationForm.querySelector('input[type="tel"]');
      const dateInput = reservationForm.querySelector('input[type="date"]');
      const timeInput = reservationForm.querySelector('input[type="time"]');
      const guestsInput = reservationForm.querySelector('input[name="guestCount"]:checked');
      const zoneInput = reservationForm.querySelector('input[name="zone"]:checked');

      const phone = phoneInput ? phoneInput.value.trim() : '';
      if (!isValidUzPhone(phone)) {
        if (phoneInput) {
          phoneInput.classList.add('input-error');
          phoneInput.focus();
        }
        alert("Iltimos, to'liq O'zbekiston telefon raqamini kiriting!\nFormat: +998 (XX) XXX-XX-XX");
        return;
      }

      const reserveData = {
        name: nameInput ? nameInput.value.trim() : 'Mijoz',
        phone,
        date: dateInput ? dateInput.value : '',
        time: timeInput ? timeInput.value : '',
        guests: guestsInput ? guestsInput.value : '2',
        zone: zoneInput ? zoneInput.value : 'main'
      };

      // Telegram Bot orqali guruhga yuborish
      if (window.restaurantTelegram) {
        await window.restaurantTelegram.sendReservation(reserveData);
      }

      alert("Tabriklaymiz! Sizning stol bandligingiz qabul qilindi va Telegram guruhga yuborildi. Administratorimiz tez orada telefon orqali siz bilan bog'lanadi.");
      closeReservation();
      reservationForm.reset();
      if (reservationPhoneInput) reservationPhoneInput.value = '';
    });
  }

  // =========================================================================
  // 8. TELEGRAM BOT SOZLAMALARI MODALI (Qulay boshqaruv)
  // =========================================================================
  const telegramModal = document.getElementById('telegramSettingsModal');
  const openTelegramBtn = document.getElementById('btnOpenTelegramSettings');
  const closeTelegramBtn = document.getElementById('telegramSettingsClose');
  const tokenInput = document.getElementById('tgBotToken');
  const chatIdInput = document.getElementById('tgChatId');
  const btnSaveTg = document.getElementById('btnSaveTgSettings');
  const btnTestTg = document.getElementById('btnTestTgSettings');
  const tgStatusMsg = document.getElementById('tgStatusMsg');

  if (openTelegramBtn && telegramModal) {
    openTelegramBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentStoredToken = localStorage.getItem('laura_telegram_token');
      if (currentStoredToken && currentStoredToken.includes('wgPCY')) {
        localStorage.removeItem('laura_telegram_token');
      }

      const activeToken = localStorage.getItem('laura_telegram_token') || window.restaurantTelegram?.config?.BOT_TOKEN || '';
      const activeChatId = localStorage.getItem('laura_telegram_chat_id') || window.restaurantTelegram?.config?.CHAT_ID || '';

      if (tokenInput) tokenInput.value = activeToken;
      if (chatIdInput) chatIdInput.value = activeChatId;
      if (tgStatusMsg) tgStatusMsg.style.display = 'none';
      telegramModal.classList.add('open');
    });
  }

  if (closeTelegramBtn && telegramModal) {
    closeTelegramBtn.addEventListener('click', () => {
      telegramModal.classList.remove('open');
    });
  }

  if (btnSaveTg) {
    btnSaveTg.addEventListener('click', () => {
      const token = tokenInput ? tokenInput.value.trim() : '';
      const chatId = chatIdInput ? chatIdInput.value.trim() : '';

      localStorage.setItem('laura_telegram_token', token);
      localStorage.setItem('laura_telegram_chat_id', chatId);

      if (window.restaurantTelegram) {
        window.restaurantTelegram.config.BOT_TOKEN = token;
        window.restaurantTelegram.config.CHAT_ID = chatId;
      }

      if (tgStatusMsg) {
        tgStatusMsg.textContent = "Sozlamalar muvaffaqiyatli saqlandi! Endi barcha buyurtmalar ushbu guruhga boradi.";
        tgStatusMsg.style.color = "var(--color-success)";
        tgStatusMsg.style.display = "block";
      }
    });
  }

  if (btnTestTg) {
    btnTestTg.addEventListener('click', async () => {
      const token = tokenInput ? tokenInput.value.trim() : '';
      const chatId = chatIdInput ? chatIdInput.value.trim() : '';

      if (!token || !chatId) {
        if (tgStatusMsg) {
          tgStatusMsg.textContent = "Iltimos, Bot Token va Guruh Chat ID maydonlarini to'ldiring!";
          tgStatusMsg.style.color = "var(--color-danger)";
          tgStatusMsg.style.display = "block";
        }
        return;
      }

      localStorage.setItem('laura_telegram_token', token);
      localStorage.setItem('laura_telegram_chat_id', chatId);

      if (btnTestTg) btnTestTg.textContent = "Yuborilmoqda... ⏳";
      const res = await window.restaurantTelegram.sendMessage("🔔 <b>L'Aura Gastronomy</b> test xabari: Telegram botingiz muvaffaqiyatli ulandi! Endi saytdan tushgan barcha buyurtmalar shu guruhga keladi.");
      if (btnTestTg) btnTestTg.textContent = "Test Xabar Yuborish";

      if (tgStatusMsg) {
        if (res.success) {
          tgStatusMsg.textContent = "✅ Ajoyib! Telegram guruhingizga test xabar yetib bordi.";
          tgStatusMsg.style.color = "var(--color-success)";
        } else {
          tgStatusMsg.textContent = "❌ Xatolik: " + (res.error || "Ulanib bo'lmadi. Bot guruhga qo'shilgan va admin qilinganligini tekshiring.");
          tgStatusMsg.style.color = "var(--color-danger)";
        }
        tgStatusMsg.style.display = "block";
      }
    });
  }

  // =========================================================================
  // LANGUAGE SELECTOR SETUP
  // =========================================================================
  const langSelector = document.getElementById('langSelector');
  const langActiveBtn = document.getElementById('langActiveBtn');

  if (langActiveBtn && langSelector) {
    langActiveBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSelector.classList.toggle('is-open');
    });

    document.querySelectorAll('.lang-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = btn.getAttribute('data-lang');
        if (window.I18N && window.I18N.setLanguage) {
          window.I18N.setLanguage(selectedLang);
        }
        langSelector.classList.remove('is-open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langSelector.contains(e.target)) {
        langSelector.classList.remove('is-open');
      }
    });
  }

  // Mobile bottom nav active indicator on scroll & click
  const mobileNavLinks = document.querySelectorAll('.mobile-bottom-nav a.mobile-nav-item');
  if (mobileNavLinks.length > 0) {
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    const sections = [
      { id: 'hero', nav: mobileNavLinks[0] },
      { id: 'signatureShowcase', nav: mobileNavLinks[1] },
      { id: 'menuSection', nav: mobileNavLinks[2] }
    ];

    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          mobileNavLinks.forEach(l => l.classList.remove('active'));
          if (sections[i].nav) sections[i].nav.classList.add('active');
          break;
        }
      }
    }, { passive: true });
  }

  // Global functions for I18N dynamic re-rendering
  window.renderMenuDishes = renderDishesGrid;
  window.renderSignatureDishes = renderHorizontalShowcase;
  window.updateCategoryTabsLanguage = renderCategories;

  // =========================================================================
  // INITIAL RENDER
  // =========================================================================
  renderHorizontalShowcase();
  renderCategories();
  renderDishesGrid();

  // Initialize language from storage or default
  if (window.I18N && window.I18N.currentLanguage) {
    window.I18N.setLanguage(window.I18N.currentLanguage());
  }
});
