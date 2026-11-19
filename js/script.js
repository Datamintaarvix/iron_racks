/**
 * MODI'S IRON RACKS - PRODUCTION JAVASCRIPT ENGINE
 * Shared Master Script (Used across all 5 HTML pages)
 * Built for:
 * - Brand: MODI'S IRON RACKS (Estd 2001, Shivaji Nagar, Bengaluru)
 * - Maximum Glassmorphism Design System
 * - Real Product Database with Verified Specifications
 * - Instant Live Search Modal with Keyword & Dimension Matching
 * - Swiggy/Fintech Style Cart Drawer & 4-Step Checkout Stepper
 * - Viewport Video IntersectionObserver (Autoplay showcase, manual gallery)
 * - 60-Photo Masonry Portfolio & Fullscreen Lightbox
 * - Customer Review Slider & Direct WhatsApp/Razorpay Order Transmission
 */

// --------------------------------------------------------------------------
// 1. BUSINESS CONSTANTS & REAL PRODUCT MANIFEST
// --------------------------------------------------------------------------
const BUSINESS_NAME = "MODI'S IRON RACKS";
const BUSINESS_PHONE_PRIMARY = '7892043478';
const BUSINESS_PHONE_SECONDARY = '7090300368';
const BUSINESS_WHATSAPP = '917892043478';
const BUSINESS_MAPS_URL = 'https://maps.google.com/?cid=7309597060288561889';
const BUSINESS_ADDRESS = "1st Block, 4, Sultan Gunta Road, Sulthangunta, Shivaji Nagar, Bengaluru, Karnataka 560051, India";

const PRODUCTS = [
  {
    id: 1,
    key: 'angle',
    category: 'Slotted Angle Racks',
    name: 'Slotted Angle Rack',
    price: 2300,
    priceDisplay: '₹2,300',
    unit: 'per rack',
    image: 'assets/ecom_product/Per_shelf.jpeg',
    gallery: [
      'assets/ecom_product/Per_shelf.jpeg',
      'assets/gallery/rack1.jpg',
      'assets/gallery/rack5.jpg',
      'assets/gallery/rack8.jpg'
    ],
    shortSpecs: '6 ft × 3 ft × 11 in | 5 Plates | 30 kg/shelf',
    specs: {
      'Height': '6 ft',
      'Length': '3 ft',
      'Depth': '11 inches',
      'Number of Shelves': '5 plates/shelves',
      'Shelf Load Capacity': '30 kg per shelf',
      'Material': 'High-Grade Stiffened Cold-Rolled Steel',
      'Finish': 'Industrial Protective Enamel',
      'Corner Gussets': 'Bolted triangular corner gussets for structural rigidity'
    },
    description: "Modi's Slotted Angle Rack is our signature high-utility storage solution. Crafted with precision pre-punched slotted angle uprights and stiffened steel shelf plates, this system delivers maximum cubic storage density for warehouses, retail stockrooms, offices, and residential utility rooms."
  },
  {
    id: 2,
    key: 'wall',
    category: 'Wall Mounted Racks',
    name: 'Wall Mounted Rack',
    price: 4000,
    priceDisplay: '₹4,000',
    unit: 'per set',
    image: 'assets/ecom_product/Wall_Mounting.jpeg',
    gallery: [
      'assets/ecom_product/Wall_Mounting.jpeg',
      'assets/gallery/rack12.jpg',
      'assets/gallery/rack17.jpg',
      'assets/gallery/rack22.jpg'
    ],
    shortSpecs: '6 ft / 3 ft Available | 11 in Depth | 5 Shelves',
    specs: {
      'Height': '6 ft (available as supplied)',
      'Length': '3 ft (available as supplied)',
      'Depth': '11 inches',
      'Number of Shelves': '5 shelves',
      'Shelf Load Capacity': 'Firm wall-anchored capacity (confirm wall type with team)',
      'Upright Channels': 'Heavy slotted wall tracks with adjustable bracket arms',
      'Finish': 'Anti-corrosive industrial finish',
      'Dimension Note': 'Confirm exact orientation & bracket alignment before ordering'
    },
    description: "Optimized for locations where floor space is limited, our Wall Mounted Rack mounts firmly to masonry walls to elevate your inventory. Designed with slotted vertical uprights and bracket-mounted shelves, it provides clean, accessible vertical storage."
  },
  {
    id: 3,
    key: 'powder',
    category: 'Powder Coated Racks',
    name: 'Powder Coated Rack',
    price: 3000,
    priceDisplay: '₹3,000',
    unit: 'per rack',
    image: 'assets/ecom_product/Powder_Coated_Racks.jpeg',
    gallery: [
      'assets/ecom_product/Powder_Coated_Racks.jpeg',
      'assets/gallery/rack21.jpg',
      'assets/gallery/rack23.jpg',
      'assets/gallery/rack27.jpg'
    ],
    shortSpecs: '6 ft × 3 ft × 11 in | 5 Plates | Anti-Scratch Finish',
    specs: {
      'Height': '6 ft',
      'Length': '3 ft',
      'Depth': '11 inches',
      'Number of Shelves': '5 plates/shelves',
      'Coating Technology': 'Electrostatic Thermoset Polymer Powder Coating',
      'Surface Protection': 'Superior resistance against moisture, scratching, and chips',
      'Finish Texture': 'Sleek industrial finish'
    },
    description: "Our Powder Coated Rack provides rugged structural integrity combined with an aesthetically refined, resilient protective finish. The electrostatic powder coating creates an impact-resistant polymer barrier that repels humidity, scratches, and daily commercial wear."
  },
  {
    id: 4,
    key: 'pipe',
    category: 'Pipe Racks',
    name: 'Pipe Rack',
    price: 5000,
    priceDisplay: '₹5,000',
    unit: 'per set',
    image: 'assets/ecom_product/PIPE_RACKS.jpeg',
    gallery: [
      'assets/ecom_product/PIPE_RACKS.jpeg',
      'assets/gallery/rack33.jpg',
      'assets/gallery/rack42.jpg',
      'assets/gallery/rack47.jpg'
    ],
    shortSpecs: '6 ft × 3 ft × 1 ft | 5 Shelves | Tubular Steel Frame',
    specs: {
      'Height': '6 ft',
      'Length': '3 ft',
      'Depth': '1 ft (12 inches)',
      'Number of Shelves': '5 plates/shelves',
      'Framework': 'Heavy cylindrical steel pipe frame',
      'Torsional Rigidity': 'High load stability with welded hollow section base',
      'Best Suited For': 'Garment display, cloth stores, textile stock, industrial parts'
    },
    description: "Built with tubular hollow-section steel uprights, Modi's Pipe Rack system is engineered for retail display and heavy inventory storage. The cylindrical steel frame delivers exceptional torsional stability and a clean aesthetic favored by showrooms and retail shops."
  }
];

const CUSTOMER_REVIEWS = [
  { name: 'Arjun A', rating: 5, text: 'The product is perfect. Best quality at a reasonable price! Smooth and early delivery. They guided me professionally to choose the right size instead of forcing me to buy a particular product and delivered the exact product as promised. Thank you Mr. Abdur Rehman. We are happy with the purchase :-)', critical: false },
  { name: 'Atta ul Rehman', rating: 5, text: 'Had a hassle free experience. Got some shelvings work done by them for our store room. Genuine suggestions by them. Mr. Kashif was amazing person to interact with. Thanks.', critical: false },
  { name: 'Ajay G', rating: 5, text: "He suggests as per our needs. Doesn't force any add on or take any advantage. Very professional. The prices are reasonable. I highly recommend this shop for your storage space needs.", critical: false },
  { name: 'Karimanu Gowda', rating: 5, text: "Good Quality and Value for Money! I bought an iron rack, hook rack, and double side rack from Modi's Iron Racks.", critical: false },
  { name: 'SYED / SYED', rating: 5, text: 'Got their reference from a colleague, Got the job done instantly. Good collections. Satisfied. Thanks to Mr, Kashif.', critical: false },
  { name: 'Rashmi Sudar', rating: 5, text: 'Wonderful service.. on time delivery and competitive pricing.. highly recommended.', critical: false },
  { name: 'Indraneel Bommisetty', rating: 1, text: 'A very sloppy job! Did not even bother to align the legs!', critical: true },
  { name: 'Maaz Khan', rating: 5, text: 'Genuine seller. Bought iron racks through online/telephone mode. Delivery was done through Porter at extra charges.', critical: false },
  { name: 'Sai Moulani', rating: 5, text: 'Highly recommend. Excellent quality and incredibly sturdy!', critical: false },
  { name: 'Stevenson RJ', rating: 5, text: 'The store keeper was very helpful and resourceful. He understood my specific requirements for a steel rack table and provided the correct parts and ideas. Also fast service.', critical: false },
  { name: 'Design Studio', rating: 1, text: 'Worst place to buy rack in this shop... All scarp items rack waste of money...', critical: true },
  { name: 'Giffy Creations', rating: 5, text: 'We wanted few racks for our office. Visited their shop in Shivaji Nagar, they explained about the different variations and pricing well. Pricing is wholesale. Installation was done the very next day and was done quickly and properly.', critical: false },
  { name: 'Arfath Qureshi', rating: 5, text: 'Purchased 2 sets of racks. Good!', critical: false },
  { name: 'Shayaar Alam', rating: 5, text: 'Got some racks customised for household purposes. There was a day delay in delivery, but the quality and finishing is amazing.', critical: false },
  { name: 'Nurus Sabah', rating: 5, text: 'Good quality metal racks and great service.', critical: false },
  { name: 'Md kaif Md kaif', rating: 5, text: 'Purchased for warehouse, Good Quality, SUPPORTIVE.', critical: false },
  { name: 'Niveditha Rao', rating: 5, text: 'Amazing Quality and best in town for metal racks. On-time delivery. They customise any colour you need!', critical: false },
  { name: 'MohsIn Nawaz', rating: 5, text: 'These people spent lot of time to show all items we wanted to see, patiently explained all our queries. We had a very satisfying experience.', critical: false }
];

// --------------------------------------------------------------------------
// 2. STATE & STORAGE MANAGEMENT
// --------------------------------------------------------------------------
const STORAGE_KEYS = {
  CART: 'modis_glass_cart_v5',
  PROFILE: 'modis_glass_profile_v5',
  ORDERS: 'modis_glass_orders_v5'
};

function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateCartCounters();
  renderCartDrawer();
}

function getProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return raw ? JSON.parse(raw) : { name: '', phone: '', address: '', email: '', pincode: '', landmark: '' };
  } catch (e) {
    return { name: '', phone: '', address: '', email: '', pincode: '', landmark: '' };
  }
}

function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
}

function getOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ORDERS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
}

// --------------------------------------------------------------------------
// 3. CART OPERATIONS
// --------------------------------------------------------------------------
function addToCart(productId, qty = 1, showToastMsg = true) {
  const product = PRODUCTS.find(p => p.id === Number(productId));
  if (!product) return;
  
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  
  if (existing) {
    existing.qty += Number(qty);
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: Number(qty),
      unit: product.unit,
      shortSpecs: product.shortSpecs
    });
  }
  
  saveCart(cart);
  if (showToastMsg) {
    showToast(`Added ${product.name} (Qty: ${qty}) to cart!`, 'success');
  }
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== Number(productId));
  saveCart(cart);
  showToast('Item removed from cart', 'info');
}

function updateCartQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === Number(productId));
  if (!item) return;
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart(cart);
  }
}

function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);
  return { subtotal, itemCount };
}

function updateCartCounters() {
  const { itemCount } = getCartTotals();
  document.querySelectorAll('.header-cart-badge, .cart-count-pill').forEach(el => {
    el.textContent = itemCount;
    el.style.display = itemCount > 0 ? 'flex' : 'none';
  });
}

function directBookProduct(productId, qty = 1) {
  addToCart(productId, qty, false);
  window.location.href = `booking.html?product=${productId}&qty=${qty}`;
}

// --------------------------------------------------------------------------
// 4. TOAST NOTIFICATIONS
// --------------------------------------------------------------------------
function showToast(message, type = 'info') {
  let shelf = document.getElementById('toast-shelf');
  if (!shelf) {
    shelf = document.createElement('div');
    shelf.id = 'toast-shelf';
    shelf.style.cssText = 'position:fixed; top:24px; right:24px; z-index:4000; display:flex; flex-direction:column; gap:0.5rem; pointer-events:none;';
    document.body.appendChild(shelf);
  }
  
  const bubble = document.createElement('div');
  const bg = type === 'success' ? 'linear-gradient(135deg, #073B83 0%, #0879D9 100%)' : 'rgba(16, 18, 22, 0.9)';
  bubble.style.cssText = `
    pointer-events: auto;
    background: ${bg};
    color: #FFFFFF;
    padding: 0.9rem 1.5rem;
    border-radius: 12px;
    font-size: 0.925rem;
    font-weight: 700;
    box-shadow: 0 10px 30px rgba(7, 59, 131, 0.3), 0 0 15px rgba(8, 185, 238, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: opacity 0.3s ease;
  `;
  bubble.innerHTML = `<span>${message}</span>`;
  shelf.appendChild(bubble);
  
  setTimeout(() => {
    bubble.style.opacity = '0';
    setTimeout(() => bubble.remove(), 300);
  }, 3200);
}

// --------------------------------------------------------------------------
// 5. LIVE SEARCH MODAL
// --------------------------------------------------------------------------
function initSearchModal() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('global-search-input');
  const resultsMount = document.getElementById('global-search-results');
  
  function openSearch() {
    if (modal) {
      modal.classList.add('active');
      setTimeout(() => { if (input) input.focus(); }, 100);
    }
  }
  
  function closeSearch() {
    if (modal) modal.classList.remove('active');
  }
  
  document.querySelectorAll('.open-search-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  });
  
  document.querySelectorAll('.close-search-modal').forEach(btn => {
    btn.addEventListener('click', closeSearch);
  });
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSearch();
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeSearch();
    }
  });
  
  if (input && resultsMount) {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        resultsMount.innerHTML = `
          <div style="padding:1.5rem; text-align:center; color:var(--brand-muted); font-size:0.9rem;">
            Type a rack name, category, or dimension (e.g. 6 ft, angle, wall, powder, pipe)
          </div>
        `;
        return;
      }
      
      const matched = PRODUCTS.filter(p => {
        const specsText = Object.values(p.specs).join(' ').toLowerCase();
        return p.name.toLowerCase().includes(q) ||
               p.category.toLowerCase().includes(q) ||
               p.description.toLowerCase().includes(q) ||
               specsText.includes(q);
      });
      
      if (matched.length === 0) {
        resultsMount.innerHTML = `
          <div style="padding:1.5rem; text-align:center; color:var(--brand-muted);">
            <p style="font-weight:700; margin-bottom:0.35rem; color:var(--color-black);">No direct match for "${q}"</p>
            <p style="font-size:0.85rem;">We manufacture custom sizes! Call us directly at ${BUSINESS_PHONE_PRIMARY}.</p>
          </div>
        `;
        return;
      }
      
      resultsMount.innerHTML = matched.map(p => `
        <a href="product.html?id=${p.id}" class="search-result-row" style="display:flex; align-items:center; gap:1rem; padding:0.85rem 1rem; border-radius:10px; text-decoration:none;">
          <img src="${p.image}" alt="${p.name}" style="width:56px; height:56px; border-radius:8px; object-fit:cover; background:#F3F7FC; border:1px solid #E5EBF2;">
          <div style="flex:1;">
            <div style="font-weight:800; color:var(--color-black); font-size:1rem;">${p.name}</div>
            <div style="font-size:0.825rem; color:var(--brand-muted);">${p.shortSpecs}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:800; color:var(--color-navy); font-size:1.05rem;">${p.priceDisplay}</div>
            <span style="font-size:0.75rem; color:var(--color-cyan); font-weight:700;">View Details &rarr;</span>
          </div>
        </a>
      `).join('');
    });
  }
}

// --------------------------------------------------------------------------
// 6. DRAWERS: CART & PROFILE & MOBILE MENU
// --------------------------------------------------------------------------
function initDrawers() {
  if (!document.getElementById('cart-drawer-overlay')) {
    const backdrop = document.createElement('div');
    backdrop.id = 'cart-drawer-overlay';
    backdrop.style.cssText = 'position:fixed; inset:0; background:rgba(16,18,22,0.65); backdrop-filter:blur(8px); z-index:2800; display:none; opacity:0; transition:opacity 0.25s ease;';
    document.body.appendChild(backdrop);
    
    // Glass Cart Drawer
    const cartDrawer = document.createElement('div');
    cartDrawer.id = 'clean-cart-drawer';
    cartDrawer.style.cssText = 'position:fixed; top:0; right:-460px; width:100%; max-width:420px; height:100%; background:rgba(255,255,255,0.92); backdrop-filter:blur(28px); border-left:1.5px solid rgba(8,185,238,0.4); box-shadow:-10px 0 40px rgba(7,59,131,0.2); z-index:2900; transition:right 0.32s cubic-bezier(0.16,1,0.3,1); display:flex; flex-direction:column;';
    cartDrawer.innerHTML = `
      <div style="padding:1.35rem 1.5rem; border-bottom:1.5px solid rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.5);">
        <h3 style="font-size:1.2rem; font-weight:800; color:#101216; display:flex; align-items:center; gap:0.6rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#073B83" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          Your Shopping Cart
        </h3>
        <button id="btn-close-cart" style="width:36px; height:36px; border-radius:50%; border:1px solid #E5EBF2; font-size:1.3rem; cursor:pointer; display:flex; align-items:center; justify-content:center;">&times;</button>
      </div>
      <div id="cart-drawer-items" style="padding:1.5rem; overflow-y:auto; flex:1;"></div>
      <div id="cart-drawer-footer" style="padding:1.35rem 1.5rem; border-top:1.5px solid rgba(255,255,255,0.7); background:rgba(243,247,252,0.85);"></div>
    `;
    document.body.appendChild(cartDrawer);
    
    // Glass Profile Drawer
    const profileDrawer = document.createElement('div');
    profileDrawer.id = 'clean-profile-drawer';
    profileDrawer.style.cssText = 'position:fixed; top:0; right:-460px; width:100%; max-width:420px; height:100%; background:rgba(255,255,255,0.92); backdrop-filter:blur(28px); border-left:1.5px solid rgba(8,185,238,0.4); box-shadow:-10px 0 40px rgba(7,59,131,0.2); z-index:2900; transition:right 0.32s cubic-bezier(0.16,1,0.3,1); display:flex; flex-direction:column;';
    profileDrawer.innerHTML = `
      <div style="padding:1.35rem 1.5rem; border-bottom:1.5px solid rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.5);">
        <h3 style="font-size:1.2rem; font-weight:800; color:#101216; display:flex; align-items:center; gap:0.6rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#073B83" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Saved Profile & Orders
        </h3>
        <button id="btn-close-profile" style="width:36px; height:36px; border-radius:50%; border:1px solid #E5EBF2; font-size:1.3rem; cursor:pointer; display:flex; align-items:center; justify-content:center;">&times;</button>
      </div>
      <div id="profile-drawer-body" style="padding:1.5rem; overflow-y:auto; flex:1;"></div>
    `;
    document.body.appendChild(profileDrawer);
    
    backdrop.addEventListener('click', closeAllDrawers);
    document.getElementById('btn-close-cart').addEventListener('click', closeAllDrawers);
    document.getElementById('btn-close-profile').addEventListener('click', closeAllDrawers);
  }
  
  document.querySelectorAll('.open-cart-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); openCartDrawer(); });
  });
  
  document.querySelectorAll('.open-profile-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); openProfileDrawer(); });
  });
}

function openCartDrawer() {
  closeAllDrawers();
  renderCartDrawer();
  const ov = document.getElementById('cart-drawer-overlay');
  const d = document.getElementById('clean-cart-drawer');
  if (ov && d) {
    ov.style.display = 'block';
    setTimeout(() => { ov.style.opacity = '1'; d.style.right = '0'; }, 10);
  }
}

function openProfileDrawer() {
  closeAllDrawers();
  renderProfileDrawer();
  const ov = document.getElementById('cart-drawer-overlay');
  const d = document.getElementById('clean-profile-drawer');
  if (ov && d) {
    ov.style.display = 'block';
    setTimeout(() => { ov.style.opacity = '1'; d.style.right = '0'; }, 10);
  }
}

function closeAllDrawers() {
  const ov = document.getElementById('cart-drawer-overlay');
  const cd = document.getElementById('clean-cart-drawer');
  const pd = document.getElementById('clean-profile-drawer');
  if (cd) cd.style.right = '-460px';
  if (pd) pd.style.right = '-460px';
  if (ov) {
    ov.style.opacity = '0';
    setTimeout(() => { ov.style.display = 'none'; }, 250);
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const footer = document.getElementById('cart-drawer-footer');
  if (!container || !footer) return;
  
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4.5rem 1rem; color: var(--brand-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" stroke-width="1.5" style="margin: 0 auto 1.25rem;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p style="font-weight: 800; font-size:1.1rem; color: var(--color-black); margin-bottom: 0.35rem;">Your Cart is Empty</p>
        <p style="font-size: 0.875rem;">Discover our heavy-duty slotted angle & industrial racks.</p>
        <a href="product.html" class="btn btn-primary btn-sm" style="margin-top: 1.5rem;" onclick="closeAllDrawers()">Explore Racks Collection</a>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }
  
  const { subtotal } = getCartTotals();
  
  container.innerHTML = cart.map(item => `
    <div style="display:flex; gap:1rem; padding: 0.95rem 0; border-bottom: 1px solid rgba(0,0,0,0.06); align-items:center;">
      <img src="${item.image}" alt="${item.name}" style="width: 64px; height: 64px; border-radius: 10px; object-fit: cover; background: #F3F7FC; border:1px solid #E5EBF2;">
      <div style="flex:1;">
        <div style="font-weight: 800; font-size: 0.95rem; color: var(--color-black);">${item.name}</div>
        <div style="font-size: 0.8rem; color: var(--brand-muted); margin-bottom: 0.4rem;">₹${item.price.toLocaleString('en-IN')} each</div>
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div style="display:inline-flex; align-items:center; border:1px solid #E5EBF2; border-radius:8px; background:#FFFFFF; overflow:hidden;">
            <button style="padding:0.25rem 0.6rem; font-weight:800; font-size:0.95rem;" onclick="updateCartQty(${item.id}, -1)">-</button>
            <span style="padding:0.25rem 0.6rem; font-size:0.85rem; font-weight:800;">${item.qty}</span>
            <button style="padding:0.25rem 0.6rem; font-weight:800; font-size:0.95rem;" onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
          <span style="font-weight:800; font-size: 1rem; color: var(--color-navy);">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
        </div>
      </div>
      <button onclick="removeFromCart(${item.id})" title="Remove item" style="color:var(--brand-muted); padding: 0.35rem; cursor:pointer;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
  `).join('');
  
  footer.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom: 0.5rem;">
      <span style="font-weight: 700; color: var(--brand-muted);">Subtotal</span>
      <span style="font-weight: 800; font-size: 1.35rem; color: var(--color-navy);">₹${subtotal.toLocaleString('en-IN')}</span>
    </div>
    <p style="font-size: 0.775rem; color: var(--brand-muted); margin-bottom: 1.25rem;">
      * Delivery calculated based on distance from Shivaji Nagar via local transport.
    </p>
    <a href="booking.html" class="btn btn-primary btn-block" onclick="closeAllDrawers()" style="padding: 0.95rem;">
      Proceed to 4-Step Checkout &rarr;
    </a>
  `;
}

function renderProfileDrawer() {
  const container = document.getElementById('profile-drawer-body');
  if (!container) return;
  const profile = getProfile();
  const orders = getOrders();
  
  container.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 1.05rem; margin-bottom: 0.85rem; color: var(--color-black); font-weight:800;">Saved Customer Details</h4>
      <form onsubmit="handleProfileDrawerSubmit(event)" style="display:flex; flex-direction:column; gap:0.85rem;">
        <input type="text" id="prof-drw-name" value="${profile.name || ''}" placeholder="Full Name" style="padding:0.8rem 1rem; border:1px solid #E5EBF2; border-radius:10px; background:#FFF;" required>
        <input type="tel" id="prof-drw-phone" value="${profile.phone || ''}" placeholder="10-digit Phone" pattern="[0-9]{10}" style="padding:0.8rem 1rem; border:1px solid #E5EBF2; border-radius:10px; background:#FFF;" required>
        <textarea id="prof-drw-address" rows="2" placeholder="Complete Delivery Address" style="padding:0.8rem 1rem; border:1px solid #E5EBF2; border-radius:10px; background:#FFF;" required>${profile.address || ''}</textarea>
        <button type="submit" class="btn btn-secondary btn-sm btn-block">Save Customer Profile</button>
      </form>
    </div>
    <div>
      <h4 style="font-size: 1.05rem; margin-bottom: 0.85rem; color: var(--color-black); font-weight:800;">Previous Bookings (${orders.length})</h4>
      ${orders.length === 0 ? '<p style="font-size:0.85rem; color:var(--brand-muted);">No orders logged yet on this device.</p>' : orders.map(o => `
        <div style="border:1.5px solid #E5EBF2; border-radius:12px; padding:1rem; margin-bottom:0.85rem; background:#FFFFFF; box-shadow:0 4px 14px rgba(7,59,131,0.05);">
          <div style="display:flex; justify-content:space-between; font-weight:800; color:var(--color-navy); font-size:0.95rem;">
            <span>#${o.orderId}</span>
            <span>₹${o.total.toLocaleString('en-IN')}</span>
          </div>
          <div style="font-size:0.825rem; color:var(--brand-muted); margin:0.4rem 0;">
            ${o.items.map(i => `${i.name} (×${i.qty})`).join(', ')}
          </div>
          <button class="btn btn-secondary btn-sm btn-block" style="font-size:0.775rem; padding:0.4rem;" onclick="reorderPrevious('${o.orderId}')">Reorder Rack</button>
        </div>
      `).join('')}
    </div>
  `;
}

function handleProfileDrawerSubmit(e) {
  e.preventDefault();
  saveProfile({
    name: document.getElementById('prof-drw-name').value.trim(),
    phone: document.getElementById('prof-drw-phone').value.trim(),
    address: document.getElementById('prof-drw-address').value.trim()
  });
  showToast('Profile details updated successfully!', 'success');
}

function reorderPrevious(orderId) {
  const o = getOrders().find(order => order.orderId === orderId);
  if (!o) return;
  o.items.forEach(i => addToCart(i.id, i.qty, false));
  closeAllDrawers();
  showToast('Items added to cart from past booking', 'success');
  window.location.href = 'booking.html';
}

function initMobileDrawer() {
  const overlay = document.getElementById('mobile-drawer-overlay');
  document.querySelectorAll('.open-mobile-drawer').forEach(btn => {
    btn.addEventListener('click', () => {
      if (overlay) overlay.classList.add('active');
    });
  });
  document.querySelectorAll('.close-mobile-drawer').forEach(btn => {
    btn.addEventListener('click', () => {
      if (overlay) overlay.classList.remove('active');
    });
  });
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('active');
    });
  }
}

function initHeaderScroll() {
  const headerWrap = document.querySelector('.framed-header-wrap');
  if (!headerWrap) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      headerWrap.classList.add('scrolled');
    } else {
      headerWrap.classList.remove('scrolled');
    }
  }, { passive: true });
}

// --------------------------------------------------------------------------
// 7. VIDEO AUTOPLAY & VIEWPORT INTERSECTION OBSERVER
// --------------------------------------------------------------------------
function initVideoObserver() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  
  const videos = document.querySelectorAll('video[autoplay], video.video-autoplay-viewport');
  if (!videos.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const vid = entry.target;
      if (entry.isIntersecting && !document.hidden) {
        vid.muted = true;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        vid.pause();
      }
    });
  }, { threshold: 0.15 });
  
  videos.forEach(v => observer.observe(v));
  
  document.addEventListener('visibilitychange', () => {
    videos.forEach(v => {
      if (document.hidden) {
        v.pause();
      } else {
        const rect = v.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          v.play().catch(() => {});
        }
      }
    });
  });
}

function toggleVideoPlayback(btn) {
  const container = btn.closest('.brand-video-cinematic, .video-showcase-glass, div');
  const video = container ? container.querySelector('video') : null;
  if (!video) return;
  if (video.paused) {
    video.play();
    btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
  } else {
    video.pause();
    btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  }
}

// --------------------------------------------------------------------------
// 8. PAGE 01: HOMEPAGE CONTROLLER
// --------------------------------------------------------------------------
let activeReviewIndex = 0;

function initHomePage() {
  initReviewsSlider();
  initGalleryReel();
  initVideoObserver();
}

function initReviewsSlider() {
  renderActiveReview();
  const prevBtn = document.getElementById('review-prev-btn');
  const nextBtn = document.getElementById('review-next-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      activeReviewIndex = (activeReviewIndex - 1 + CUSTOMER_REVIEWS.length) % CUSTOMER_REVIEWS.length;
      renderActiveReview();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      activeReviewIndex = (activeReviewIndex + 1) % CUSTOMER_REVIEWS.length;
      renderActiveReview();
    });
  }
}

function renderActiveReview() {
  const mount = document.getElementById('review-active-mount');
  if (!mount) return;
  const r = CUSTOMER_REVIEWS[activeReviewIndex];
  const initial = r.name.charAt(0).toUpperCase();
  const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  
  mount.innerHTML = `
    <div class="review-glass-card" style="${r.critical ? 'border-left: 5px solid #EF4444;' : 'border-left: 5px solid var(--color-cyan);'}">
      <div class="review-stars-row">${stars}</div>
      <p class="review-text-quote">"${r.text}"</p>
      <div class="review-author-group">
        <div class="review-avatar-circle">${initial}</div>
        <div>
          <div style="font-weight:800; color:var(--color-black); font-size:1.05rem;">${r.name}</div>
          <div style="font-size:0.8rem; color:var(--brand-muted);">${r.critical ? 'Customer Feedback' : 'Verified Google Review'} &bull; Review ${activeReviewIndex + 1} of ${CUSTOMER_REVIEWS.length}</div>
        </div>
      </div>
    </div>
  `;
}

function initGalleryReel() {
  const container = document.getElementById('homepage-gallery-reel');
  const prev = document.getElementById('reel-prev-btn');
  const next = document.getElementById('reel-next-btn');
  if (!container) return;
  
  if (prev) {
    prev.addEventListener('click', () => {
      container.scrollBy({ left: -360, behavior: 'smooth' });
    });
  }
  if (next) {
    next.addEventListener('click', () => {
      container.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }
}

// --------------------------------------------------------------------------
// 9. PAGE 02: PRODUCT CATALOGUE & PDP CONTROLLER
// --------------------------------------------------------------------------
function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const prodId = Number(urlParams.get('id')) || 1;
  const product = PRODUCTS.find(p => p.id === prodId) || PRODUCTS[0];
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  
  document.title = `${product.name} | ${BUSINESS_NAME}`;
  
  const mount = document.getElementById('pdp-mount');
  if (!mount) return;
  
  mount.innerHTML = `
    <!-- Breadcrumb & Top Indicator -->
    <div style="margin-bottom: 2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
      <div style="font-size:0.9rem; color:var(--brand-muted);">
        <a href="index.html" style="color:var(--color-black); font-weight:700;">Home</a> &nbsp;/&nbsp;
        <a href="product.html" style="color:var(--color-black); font-weight:700;">Products</a> &nbsp;/&nbsp;
        <span style="color:var(--color-navy); font-weight:800;">${product.name}</span>
      </div>
      <span class="section-pill-tag" style="margin:0;">${product.category}</span>
    </div>

    <!-- Category Filter Bar (Fast Switching) -->
    <div class="gallery-glass-tabs" style="margin-bottom:2.5rem;">
      ${PRODUCTS.map(p => `
        <a href="product.html?id=${p.id}" class="gallery-glass-pill ${p.id === product.id ? 'active' : ''}">
          ${p.name}
        </a>
      `).join('')}
    </div>

    <!-- Main Glassmorphism PDP Container -->
    <div class="pdp-split-glass-container">
      <!-- Media Left Column -->
      <div>
        <div class="pdp-main-photo-glass">
          <img id="pdp-active-photo" src="${product.gallery[0]}" alt="${product.name}" onclick="openPhotoLightboxDirect(this.src, '${product.name}')">
        </div>
        <div class="pdp-thumbnails-strip">
          ${product.gallery.map((img, idx) => `
            <div class="pdp-thumb-box ${idx === 0 ? 'active' : ''}" onclick="switchPdpPhoto('${img}', this)">
              <img src="${img}" alt="${product.name} thumbnail ${idx + 1}">
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Details & Purchase Right Column -->
      <div>
        <h1 style="font-size:clamp(1.9rem, 3.2vw, 2.5rem); font-weight:800; color:var(--color-black); margin-bottom:0.5rem; line-height:1.2;">
          ${product.name}
        </h1>
        <div class="product-price-highlight" style="font-size:clamp(2rem, 3.5vw, 2.6rem); margin-bottom:1.25rem;">
          ${product.priceDisplay}
          <span>/ ${product.unit} (Direct Wholesale Pricing)</span>
        </div>
        <p style="font-size:1.05rem; line-height:1.7; color:var(--brand-muted); margin-bottom:1.75rem;">
          ${product.description}
        </p>
        
        <h3 style="font-size:1.15rem; font-weight:800; color:var(--color-black); margin-bottom:0.85rem;">
          Verified Technical Specifications
        </h3>
        <table class="story-specs-table" style="margin-bottom:2rem;">
          <tbody>
            ${Object.entries(product.specs).map(([k, v]) => `
              <tr>
                <td style="width:42%; font-weight:700; color:var(--color-black);">${k}</td>
                <td>${v}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <!-- Quantity & Order Controls -->
        <div style="display:flex; flex-wrap:wrap; gap:1rem; align-items:center; margin-bottom:1.5rem; padding:1.5rem 0; border-top:1px solid #E5EBF2; border-bottom:1px solid #E5EBF2;">
          <div class="qty-counter-glass">
            <button onclick="adjustPdpQty(-1)">-</button>
            <input type="number" id="pdp-qty-val" value="1" min="1" max="100" onchange="syncPdpStickyBar()">
            <button onclick="adjustPdpQty(1)">+</button>
          </div>
          
          <button class="btn btn-secondary" style="flex:1;" onclick="addCurrentPdpToCart(${product.id})">Add to Cart</button>
          <button class="btn btn-primary" style="flex:1.2;" onclick="buyCurrentPdpNow(${product.id})">Book Your Rack</button>
        </div>
        
        <a href="https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(`Hi ${BUSINESS_NAME}, I would like to book or inquire about ${product.name} (${product.priceDisplay}).`)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block" style="padding:1rem; margin-bottom:1.25rem;">
          Inquire on WhatsApp (${BUSINESS_PHONE_PRIMARY})
        </a>

        <div style="font-size:0.85rem; color:var(--brand-muted); display:flex; align-items:center; gap:0.5rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0879D9" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
          Same-day / next-day delivery available across Bengaluru metro via local transport.
        </div>
      </div>
    </div>

    <!-- Video Showcase Section (rackvideo05) -->
    <div class="glass-panel-dark" style="padding:clamp(2.5rem, 4.5vw, 4rem); margin-bottom:4.5rem; color:#FFFFFF;">
      <div style="max-width:700px; margin-bottom:2rem; position:relative; z-index:2;">
        <span class="section-pill-tag" style="background:rgba(8, 185, 238, 0.15); color:var(--color-cyan); border-color:rgba(8, 185, 238, 0.35);">
          MANUFACTURING QUALITY
        </span>
        <h2 style="font-size:clamp(1.6rem, 3vw, 2.3rem); font-weight:800; color:#FFFFFF; margin-bottom:0.85rem;">
          High-Precision Steel Rack Fabrication
        </h2>
        <p style="color:#CBD8E6; font-size:1rem; line-height:1.65;">
          Watch our precision cold-rolled sheet punching, structural bending, and protective coating process in our Shivaji Nagar workshop.
        </p>
      </div>

      <div style="border-radius:var(--radius-lg); overflow:hidden; position:relative; max-height:480px; box-shadow:var(--shadow-glass-dark); border:1.5px solid rgba(8, 185, 238, 0.35);">
        <video class="video-autoplay-viewport" autoplay muted loop playsinline preload="none" poster="assets/videos/poster05.jpg" style="width:100%; height:100%; object-fit:cover; display:block;">
          <source src="assets/videos/rackvideo05.mp4" type="video/mp4">
        </video>
        <button class="video-play-btn-circle" aria-label="Toggle Play" onclick="toggleVideoPlayback(this)" style="position:absolute; bottom:20px; right:20px; width:52px; height:52px; margin:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
      </div>
    </div>

    <!-- Related Products -->
    <div style="margin-bottom: 4.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:2rem; flex-wrap:wrap; gap:1rem;">
        <div>
          <span class="section-pill-tag">EXPLORE MORE</span>
          <h2 style="font-size:1.85rem; font-weight:800; color:var(--color-black);">Related Storage Solutions</h2>
        </div>
        <a href="product.html" class="btn btn-secondary btn-sm">View All Racks &rarr;</a>
      </div>

      <div class="product-retail-grid">
        ${related.map(r => `
          <div class="product-glass-card">
            <div class="product-glass-thumb">
              <img src="${r.image}" alt="${r.name}">
            </div>
            <div class="product-glass-body">
              <h4 class="product-glass-title">${r.name}</h4>
              <div class="product-price-highlight" style="font-size:1.3rem; margin-bottom:0.5rem;">
                ${r.priceDisplay}
                <span style="font-size:0.75rem;">/${r.unit}</span>
              </div>
              <p class="product-glass-specs">${r.shortSpecs}</p>
              <div class="product-glass-actions">
                <a href="product.html?id=${r.id}" class="btn btn-secondary btn-sm">Details</a>
                <button class="btn btn-primary btn-sm" onclick="directBookProduct(${r.id})">Book Now</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Custom Rack Requirements CTA -->
    <div class="final-cta-navy-section" style="margin-bottom:2rem; padding:3.5rem 2.5rem;">
      <h2>Need Custom Dimensions or Bulk Commercial Pricing?</h2>
      <p>We manufacture custom heights, depths, shelf gauges, and supermarket aisle configurations for shops and warehouses.</p>
      <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
        <a href="https://wa.me/${BUSINESS_WHATSAPP}?text=Hi%20Modi's%20Iron%20Racks,%20I%20need%20custom%20rack%20dimensions." target="_blank" rel="noopener" class="btn btn-whatsapp">
          Chat on WhatsApp
        </a>
        <a href="company.html#contact-section" class="btn btn-ghost-dark">
          Send Production Inquiry
        </a>
      </div>
    </div>

    <!-- Mobile Sticky Book Now Bar -->
    <div class="mobile-pdp-sticky-bar" id="mobile-pdp-bar">
      <div>
        <div style="font-size:0.75rem; color:var(--brand-muted); font-weight:700;">TOTAL ESTIMATE</div>
        <div style="font-size:1.25rem; font-weight:800; color:var(--color-navy);" id="mobile-pdp-price">
          ${product.priceDisplay}
        </div>
      </div>
      <button class="btn btn-primary" style="padding:0.75rem 1.6rem; font-size:0.925rem;" onclick="buyCurrentPdpNow(${product.id})">
        BOOK NOW &rarr;
      </button>
    </div>
  `;
  
  initVideoObserver();
}

function switchPdpPhoto(src, thumbEl) {
  const mainPhoto = document.getElementById('pdp-active-photo');
  if (mainPhoto) mainPhoto.src = src;
  document.querySelectorAll('.pdp-thumb-box').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function adjustPdpQty(delta) {
  const inp = document.getElementById('pdp-qty-val');
  if (!inp) return;
  let val = parseInt(inp.value) || 1;
  val = Math.max(1, val + delta);
  inp.value = val;
  syncPdpStickyBar();
}

function syncPdpStickyBar() {
  const urlParams = new URLSearchParams(window.location.search);
  const prodId = Number(urlParams.get('id')) || 1;
  const product = PRODUCTS.find(p => p.id === prodId) || PRODUCTS[0];
  const inp = document.getElementById('pdp-qty-val');
  const qty = inp ? parseInt(inp.value) || 1 : 1;
  const priceMount = document.getElementById('mobile-pdp-price');
  if (priceMount) {
    priceMount.textContent = `₹${(product.price * qty).toLocaleString('en-IN')}`;
  }
}

function addCurrentPdpToCart(id) {
  const inp = document.getElementById('pdp-qty-val');
  const qty = inp ? parseInt(inp.value) || 1 : 1;
  addToCart(id, qty, true);
}

function buyCurrentPdpNow(id) {
  const inp = document.getElementById('pdp-qty-val');
  const qty = inp ? parseInt(inp.value) || 1 : 1;
  addToCart(id, qty, false);
  window.location.href = `booking.html?product=${id}&qty=${qty}`;
}

// --------------------------------------------------------------------------
// 10. PAGE 03: 4-STEP BOOKING & CHECKOUT CONTROLLER
// --------------------------------------------------------------------------
function initBookingPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const directId = urlParams.get('product');
  const directQty = parseInt(urlParams.get('qty')) || 1;
  
  if (directId) {
    const p = PRODUCTS.find(prod => prod.id === Number(directId));
    if (p) {
      const cart = getCart();
      if (!cart.some(i => i.id === p.id)) {
        addToCart(p.id, directQty, false);
      }
    }
  }
  
  renderBookingView();
}

function renderBookingView() {
  const mount = document.getElementById('booking-view-mount');
  if (!mount) return;
  
  const cart = getCart();
  const profile = getProfile();
  
  if (cart.length === 0) {
    mount.innerHTML = `
      <div class="glass-panel" style="text-align: center; padding: 4.5rem 1.5rem; max-width: 620px; margin: 2rem auto;">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" stroke-width="1.5" style="margin: 0 auto 1.25rem;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color:var(--color-black);">Your Booking Cart is Empty</h2>
        <p style="color: var(--brand-muted); margin-bottom: 1.75rem;">Explore our factory inventory of metal racks to start your booking.</p>
        <a href="product.html" class="btn btn-primary">Browse Racks Collection</a>
      </div>
    `;
    return;
  }
  
  const { subtotal } = getCartTotals();
  
  mount.innerHTML = `
    <!-- 4-Step Animated Stepper -->
    <div class="stepper-glass-bar">
      <div class="stepper-step-node active">
        <div class="step-bubble">1</div>
        <span class="step-text-title">01 PRODUCT</span>
      </div>
      <div style="flex:1; height:2px; background:var(--gradient-cyan-accent); margin:0 0.5rem; box-shadow:var(--glow-cyan);"></div>
      <div class="stepper-step-node active">
        <div class="step-bubble">2</div>
        <span class="step-text-title">02 DELIVERY</span>
      </div>
      <div style="flex:1; height:2px; background:#E5EBF2; margin:0 0.5rem;"></div>
      <div class="stepper-step-node">
        <div class="step-bubble">3</div>
        <span class="step-text-title">03 PAYMENT</span>
      </div>
      <div style="flex:1; height:2px; background:#E5EBF2; margin:0 0.5rem;"></div>
      <div class="stepper-step-node">
        <div class="step-bubble">4</div>
        <span class="step-text-title">04 CONFIRM</span>
      </div>
    </div>
    
    <div class="checkout-grid-layout">
      <!-- Form & Items Left Column -->
      <div>
        <!-- Step 1: Product Review -->
        <div class="checkout-glass-box">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; padding-bottom:0.85rem; border-bottom:1.5px solid rgba(0,0,0,0.06);">
            <h3 style="font-size:1.2rem; font-weight:800; color:var(--color-black); margin:0;">
              01 &bull; Review Selected Racks
            </h3>
            <a href="product.html" style="font-size:0.875rem; color:var(--color-navy); font-weight:800;">+ Add More Racks</a>
          </div>
          <div style="display:flex; flex-direction:column; gap:1.25rem;">
            ${cart.map(item => `
              <div style="display:flex; gap:1.25rem; align-items:center; padding-bottom:1.25rem; border-bottom:1px solid #E5EBF2;">
                <img src="${item.image}" alt="${item.name}" style="width:72px; height:72px; border-radius:12px; object-fit:cover; background:#F3F7FC; border:1px solid #E5EBF2;">
                <div style="flex:1;">
                  <strong style="font-size:1.05rem; color:var(--color-black); display:block;">${item.name}</strong>
                  <span style="font-size:0.825rem; color:var(--brand-muted);">${item.shortSpecs || ''}</span>
                  <div style="font-weight:800; color:var(--color-navy); font-size:1rem; margin-top:0.35rem;">₹${item.price.toLocaleString('en-IN')} each</div>
                </div>
                <div style="display:flex; align-items:center; gap:0.85rem;">
                  <div class="qty-counter-glass" style="box-shadow:none;">
                    <button style="width:32px; height:34px;" onclick="adjustBookingQty(${item.id}, -1)">-</button>
                    <span style="padding:0 0.6rem; font-weight:800; font-size:0.9rem;">${item.qty}</span>
                    <button style="width:32px; height:34px;" onclick="adjustBookingQty(${item.id}, 1)">+</button>
                  </div>
                  <strong style="min-width:85px; text-align:right; font-size:1.1rem; color:var(--color-black);">
                    ₹${(item.price * item.qty).toLocaleString('en-IN')}
                  </strong>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Step 2: Customer Delivery Details -->
        <div class="checkout-glass-box">
          <h3 style="font-size:1.2rem; font-weight:800; color:var(--color-black); margin-bottom:1.5rem; padding-bottom:0.85rem; border-bottom:1.5px solid rgba(0,0,0,0.06);">
            02 &bull; Customer &amp; Delivery Information
          </h3>
          <form id="booking-checkout-form" onsubmit="handleCheckoutSubmission(event)">
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom:1.25rem;">
              <div>
                <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--color-black); margin-bottom:0.4rem;">Full Name *</label>
                <input type="text" id="chk-order-name" value="${profile.name || ''}" placeholder="e.g. Abdur Rehman" style="width:100%; padding:0.85rem 1rem; border-radius:10px; border:1.5px solid #E5EBF2; background:#FFF; font-size:0.95rem;" required>
              </div>
              <div>
                <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--color-black); margin-bottom:0.4rem;">Mobile Number *</label>
                <input type="tel" id="chk-order-phone" value="${profile.phone || ''}" placeholder="10-digit mobile" pattern="[0-9]{10}" style="width:100%; padding:0.85rem 1rem; border-radius:10px; border:1.5px solid #E5EBF2; background:#FFF; font-size:0.95rem;" required>
              </div>
            </div>
            
            <div style="margin-bottom:1.25rem;">
              <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--color-black); margin-bottom:0.4rem;">Complete Delivery Address *</label>
              <textarea id="chk-order-address" rows="3" placeholder="Building/Shop No, Street, Area in Bengaluru" style="width:100%; padding:0.85rem 1rem; border-radius:10px; border:1.5px solid #E5EBF2; background:#FFF; font-size:0.95rem;" required>${profile.address || ''}</textarea>
            </div>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom:1.25rem;">
              <div>
                <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--color-black); margin-bottom:0.4rem;">PIN Code (Optional)</label>
                <input type="text" id="chk-order-pincode" value="${profile.pincode || ''}" placeholder="e.g. 560051" style="width:100%; padding:0.85rem 1rem; border-radius:10px; border:1.5px solid #E5EBF2; background:#FFF; font-size:0.95rem;">
              </div>
              <div>
                <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--color-black); margin-bottom:0.4rem;">Landmark (Optional)</label>
                <input type="text" id="chk-order-landmark" value="${profile.landmark || ''}" placeholder="Nearby spot" style="width:100%; padding:0.85rem 1rem; border-radius:10px; border:1.5px solid #E5EBF2; background:#FFF; font-size:0.95rem;">
              </div>
            </div>
            
            <div style="margin-bottom:2rem;">
              <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--color-black); margin-bottom:0.4rem;">Email Address (Optional)</label>
              <input type="email" id="chk-order-email" value="${profile.email || ''}" placeholder="For tax invoice copy" style="width:100%; padding:0.85rem 1rem; border-radius:10px; border:1.5px solid #E5EBF2; background:#FFF; font-size:0.95rem;">
            </div>
            
            <!-- Step 3: Payment Options -->
            <h3 style="font-size:1.2rem; font-weight:800; color:var(--color-black); margin-bottom:1rem; padding-bottom:0.85rem; border-bottom:1.5px solid rgba(0,0,0,0.06);">
              03 &bull; Select Payment Method
            </h3>
            
            <div style="display:flex; flex-direction:column; gap:0.85rem; margin-bottom:2.25rem;">
              <label class="payment-glass-card active">
                <input type="radio" name="chkPayment" value="RAZORPAY" checked style="margin-top:0.35rem;">
                <div>
                  <strong style="display:block; color:var(--color-black); font-size:1rem;">Razorpay Online Payment (UPI, Cards, NetBanking)</strong>
                  <span style="font-size:0.825rem; color:var(--brand-muted);">Secure verified transaction with immediate payment confirmation.</span>
                </div>
              </label>
              
              <label class="payment-glass-card">
                <input type="radio" name="chkPayment" value="COD" style="margin-top:0.35rem;">
                <div>
                  <strong style="display:block; color:var(--color-black); font-size:1rem;">Cash on Delivery / Direct Bank Transfer</strong>
                  <span style="font-size:0.825rem; color:var(--brand-muted);">Pay upon delivery or NEFT/IMPS after telephone confirmation with our shop.</span>
                </div>
              </label>
              
              <label class="payment-glass-card">
                <input type="radio" name="chkPayment" value="WHATSAPP_INSTANT" style="margin-top:0.35rem;">
                <div>
                  <strong style="display:block; color:var(--color-black); font-size:1rem;">Instant WhatsApp Booking (${BUSINESS_PHONE_PRIMARY})</strong>
                  <span style="font-size:0.825rem; color:var(--brand-muted);">Send prefilled order directly to Mr. Abdur Rehman.</span>
                </div>
              </label>
            </div>
            
            <button type="submit" id="btn-confirm-order" class="btn btn-primary btn-block" style="padding:1.1rem; font-size:1.05rem;">
              Confirm Order &amp; Place Booking &rarr;
            </button>
          </form>
        </div>
      </div>
      
      <!-- Summary Sidebar Right Column (Floating Glass) -->
      <div>
        <div class="sticky-order-summary-glass">
          <h3 style="font-size:1.3rem; font-weight:800; color:var(--color-black); margin-bottom:1.5rem;">Order Summary</h3>
          
          <div style="border-bottom:1.5px solid rgba(0,0,0,0.06); padding-bottom:1.25rem; margin-bottom:1.25rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.65rem; font-size:0.95rem;">
              <span style="color:var(--brand-muted);">Items Subtotal (${cart.reduce((s,i)=>s+i.qty,0)} items)</span>
              <strong style="color:var(--color-black);">₹${subtotal.toLocaleString('en-IN')}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.65rem; font-size:0.95rem;">
              <span style="color:var(--brand-muted);">Delivery Charge</span>
              <span style="color:var(--brand-muted); font-size:0.825rem;">Calculated upon dispatch (Porter/local transport)</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:1.25rem; font-size:1.45rem; font-weight:800;">
              <span>Grand Total</span>
              <span style="color:var(--color-navy);">₹${subtotal.toLocaleString('en-IN')}</span>
            </div>
          </div>
          
          <div style="background:rgba(8,185,238,0.08); border:1px solid rgba(8,185,238,0.25); border-radius:10px; padding:1rem; font-size:0.825rem; color:var(--color-navy); margin-bottom:1.5rem;">
            <strong style="display:block; margin-bottom:0.25rem; font-size:0.875rem;">Delivery Charge Notice:</strong>
            Charges are based strictly on distance from our Shivaji Nagar workshop and confirmed upon dispatch.
          </div>
          
          <div style="display:flex; align-items:center; gap:0.65rem; font-size:0.875rem; color:#10B981; font-weight:700;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Direct Manufacturer Warranty &amp; Wholesale Support</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Sticky Checkout Bar -->
    <div class="mobile-checkout-sticky-bar">
      <div>
        <div style="font-size:0.75rem; color:var(--brand-muted); font-weight:700;">TOTAL PAYABLE</div>
        <div style="font-size:1.25rem; font-weight:800; color:var(--color-navy);">
          ₹${subtotal.toLocaleString('en-IN')}
        </div>
      </div>
      <button type="submit" form="booking-checkout-form" class="btn btn-primary" style="padding:0.75rem 1.6rem; font-size:0.925rem;">
        CONTINUE &rarr;
      </button>
    </div>
  `;
}

function adjustBookingQty(id, delta) {
  updateCartQty(id, delta);
  renderBookingView();
}

async function handleCheckoutSubmission(e) {
  e.preventDefault();
  const btn = document.getElementById('btn-confirm-order');
  if (btn) { btn.disabled = true; btn.textContent = 'Transmitting Order...'; }
  
  const cart = getCart();
  const { subtotal } = getCartTotals();
  
  const name = document.getElementById('chk-order-name').value.trim();
  const phone = document.getElementById('chk-order-phone').value.trim();
  const address = document.getElementById('chk-order-address').value.trim();
  const pincode = document.getElementById('chk-order-pincode').value.trim();
  const landmark = document.getElementById('chk-order-landmark').value.trim();
  const email = document.getElementById('chk-order-email').value.trim();
  const payMethod = document.querySelector('input[name="chkPayment"]:checked').value;
  
  saveProfile({ name, phone, address, pincode, landmark, email });
  
  const orderId = `MIR-${Date.now().toString().slice(-6)}`;
  const orderData = {
    orderId,
    customer: { name, phone, address, pincode, landmark, email },
    items: cart,
    subtotal,
    total: subtotal,
    paymentMethod: payMethod,
    paymentStatus: payMethod === 'RAZORPAY' ? 'PENDING' : 'CONFIRMED (MANUAL/COD)',
    timestamp: new Date().toISOString()
  };
  
  if (payMethod === 'RAZORPAY') {
    handleRazorpayFlow(orderData, btn);
  } else {
    completeOrderSuccess(orderData);
  }
}

function handleRazorpayFlow(orderData, btn) {
  if (typeof Razorpay === 'undefined') {
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload = () => executeRazorpay(orderData, btn);
    s.onerror = () => {
      showToast('Razorpay Gateway unreachable. Switching to guaranteed WhatsApp confirmation.', 'info');
      orderData.paymentStatus = 'MANUAL VERIFICATION REQUIRED';
      completeOrderSuccess(orderData);
    };
    document.body.appendChild(s);
  } else {
    executeRazorpay(orderData, btn);
  }
}

async function executeRazorpay(orderData, btn) {
  let rzpOrderId = null;
  let keyId = 'rzp_test_placeholder';
  
  try {
    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: orderData.total * 100,
        receipt: orderData.orderId,
        notes: { customer_name: orderData.customer.name, phone: orderData.customer.phone }
      })
    });
    if (res.ok) {
      const data = await res.json();
      rzpOrderId = data.id;
      keyId = data.keyId || keyId;
    }
  } catch (err) {}
  
  if (keyId === 'rzp_test_placeholder' && !rzpOrderId) {
    const confirmed = confirm(
      "Razorpay Live Gateway keys are not yet configured on this hosting server.\n\n" +
      "Would you like to complete this order via our guaranteed Manual / WhatsApp / Cash on Delivery booking?"
    );
    if (confirmed) {
      orderData.paymentMethod = 'COD';
      orderData.paymentStatus = 'CONFIRMED (TELEPHONE / WHATSAPP VERIFICATION)';
      completeOrderSuccess(orderData);
    } else {
      if (btn) { btn.disabled = false; btn.textContent = 'Confirm Order & Place Booking →'; }
    }
    return;
  }
  
  const options = {
    key: keyId,
    amount: orderData.total * 100,
    currency: 'INR',
    name: BUSINESS_NAME,
    description: `Order #${orderData.orderId}`,
    image: 'assets/logo/logo.png',
    order_id: rzpOrderId,
    prefill: {
      name: orderData.customer.name,
      contact: orderData.customer.phone,
      email: orderData.customer.email || 'customer@example.com'
    },
    theme: { color: '#073B83' },
    handler: async function (response) {
      orderData.paymentStatus = 'PAID';
      orderData.razorpayPaymentId = response.razorpay_payment_id;
      try {
        await fetch('/api/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(response)
        });
      } catch (e) {}
      completeOrderSuccess(orderData);
    },
    modal: {
      ondismiss: function () {
        if (btn) { btn.disabled = false; btn.textContent = 'Confirm Order & Place Booking →'; }
      }
    }
  };
  
  const rzp = new Razorpay(options);
  rzp.open();
}

function completeOrderSuccess(orderData) {
  saveOrder(orderData);
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
  updateCartCounters();
  
  try {
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
  } catch (e) {}
  
  const itemsText = orderData.items.map(i => `${i.name} (Qty: ${i.qty})`).join(', ');
  const waMsg = 
`NEW ORDER – ${BUSINESS_NAME}

Customer Name: ${orderData.customer.name}
Phone: ${orderData.customer.phone}
Delivery Address: ${orderData.customer.address}
Product: ${itemsText}
Quantity: ${orderData.items.reduce((s, i) => s + i.qty, 0)}
Total Amount: ₹${orderData.total.toLocaleString('en-IN')}
Payment Status: ${orderData.paymentStatus}
Order ID: ${orderData.orderId}`;

  const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(waMsg)}`;
  const waSecUrl = `https://wa.me/91${BUSINESS_PHONE_SECONDARY}?text=${encodeURIComponent(waMsg)}`;
  
  const mount = document.getElementById('booking-view-mount');
  mount.innerHTML = `
    <div class="glass-panel" style="padding:3.5rem 2.25rem; max-width:700px; margin:2rem auto; text-align:center;">
      <div style="width:72px; height:72px; border-radius:50%; background:var(--gradient-brand); color:#FFF; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; box-shadow:var(--glow-cyan);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      
      <span class="section-pill-tag" style="margin-bottom:0.75rem;">CONFIRMED ORDER</span>
      <h2 style="font-size:2.2rem; margin-bottom:0.5rem; color:var(--color-black);">ORDER RECEIVED SUCCESSFULLY!</h2>
      <p style="color:var(--brand-muted); margin-bottom:1.75rem; font-size:1.05rem;">
        Thank you, <strong>${orderData.customer.name}</strong>. Your rack booking has been transmitted to our Shivaji Nagar workshop.
      </p>
      
      <div style="background:#FFFFFF; border:1px solid #E5EBF2; border-radius:14px; padding:1.5rem; text-align:left; margin-bottom:1.75rem; font-size:0.925rem; box-shadow:var(--shadow-glass);">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.6rem;">
          <span style="color:var(--brand-muted);">Order ID</span>
          <strong style="color:var(--color-navy); font-size:1.05rem;">#${orderData.orderId}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.6rem;">
          <span style="color:var(--brand-muted);">Contact Phone</span>
          <span style="font-weight:700;">${orderData.customer.phone}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.6rem;">
          <span style="color:var(--brand-muted);">Items Booked</span>
          <span style="font-weight:700;">${itemsText}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.6rem;">
          <span style="color:var(--brand-muted);">Delivery Address</span>
          <span style="max-width:320px; text-align:right;">${orderData.customer.address}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding-top:0.75rem; border-top:1.5px dashed #E5EBF2; font-size:1.25rem; font-weight:800;">
          <span>Grand Total</span>
          <span style="color:var(--color-navy);">₹${orderData.total.toLocaleString('en-IN')}</span>
        </div>
      </div>
      
      <div style="display:flex; flex-direction:column; gap:0.85rem;">
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block" style="padding:1rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.697.062-2.148-.544-1.727-.723-2.842-2.483-2.928-2.598-.086-.115-.699-.929-.699-1.771 0-.843.443-1.258.601-1.431.157-.173.344-.216.459-.216.115 0 .23 0 .33.007.108.007.252-.041.394.302.144.346.49 1.196.533 1.282.043.087.072.188.014.303-.058.115-.086.188-.172.289-.086.101-.182.226-.26.303-.086.086-.176.18-.076.353.1.173.444.733.953 1.187.654.582 1.205.763 1.378.85.172.086.273.072.374-.043.101-.116.43-.504.545-.677.115-.173.23-.144.388-.086.158.058 1.006.475 1.178.562.173.086.287.13.33.202.044.072.044.418-.1.823z"/></svg>
          Confirm on Primary WhatsApp (${BUSINESS_PHONE_PRIMARY})
        </a>
        <div style="display:flex; gap:0.65rem;">
          <a href="${waSecUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-block btn-sm">
            Secondary WhatsApp (${BUSINESS_PHONE_SECONDARY})
          </a>
          <a href="tel:${BUSINESS_PHONE_PRIMARY}" class="btn btn-primary btn-block btn-sm">
            Call Store Directly
          </a>
        </div>
        <a href="index.html" class="btn btn-secondary btn-sm" style="margin-top:0.75rem;">
          Back to Store
        </a>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 11. PAGE 04: GALLERY CONTROLLER (ALL 60 PHOTOS & ALL 6 VIDEOS)
// --------------------------------------------------------------------------
let galleryAllPhotos = [];
let activeLightboxIndex = 0;

function initGalleryPage() {
  const mount = document.getElementById('gallery-all-photos-mount');
  
  galleryAllPhotos = [];
  for (let i = 1; i <= 60; i++) {
    let cat = 'Slotted Angle Racks';
    if (i % 5 === 0) cat = 'Pipe Racks';
    else if (i % 4 === 0) cat = 'Powder Coated Racks';
    else if (i % 3 === 0) cat = 'Wall Mounted Racks';
    
    galleryAllPhotos.push({
      index: i,
      src: `assets/gallery/rack${i}.jpg`,
      alt: `${BUSINESS_NAME} Photo ${i}`,
      category: cat,
      caption: `Rack Project #${i} - ${cat}`
    });
  }
  
  if (mount) {
    mount.innerHTML = galleryAllPhotos.map((item, idx) => `
      <div class="gallery-tile-glass" data-category="${item.category}" onclick="openPhotoLightbox(${idx})">
        <div class="gallery-tile-thumb">
          <img src="${item.src}" alt="${item.alt}" loading="lazy">
          <div class="gallery-tile-overlay">
            <span class="gallery-tile-zoom-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              Inspect Rack
            </span>
          </div>
        </div>
        <div class="gallery-tile-info">
          <span class="gallery-tile-cat">${item.category}</span>
          <span class="gallery-tile-badge">#${item.index}</span>
        </div>
      </div>
    `).join('');
  }
  
  setupGalleryLightbox();
  initVideoObserver();
}

function filterGalleryCategory(cat, btn) {
  document.querySelectorAll('.gallery-glass-pill, .gallery-filter-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  
  const cards = document.querySelectorAll('#gallery-all-photos-mount .gallery-tile-glass');
  const photosSuite = document.getElementById('gallery-photos-suite');
  const videoSec = document.getElementById('gallery-video-suite');
  const counterEl = document.getElementById('gallery-count-indicator');
  
  if (cat === 'Videos') {
    if (photosSuite) photosSuite.style.display = 'none';
    if (videoSec) {
      videoSec.style.display = 'block';
      videoSec.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }
  
  if (photosSuite) photosSuite.style.display = 'block';
  if (videoSec) videoSec.style.display = 'block';
  
  let visibleCount = 0;
  cards.forEach(c => {
    if (cat === 'ALL' || c.getAttribute('data-category') === cat) {
      c.style.display = 'flex';
      visibleCount++;
    } else {
      c.style.display = 'none';
    }
  });

  if (counterEl) {
    counterEl.textContent = cat === 'ALL' 
      ? `Showing all 60 photographs` 
      : `Showing ${visibleCount} ${cat} photographs`;
  }
}

function setupGalleryLightbox() {
  if (document.getElementById('photo-lightbox-modal')) return;
  const lb = document.createElement('div');
  lb.id = 'photo-lightbox-modal';
  lb.className = 'lightbox-glass-modal';
  lb.innerHTML = `
    <button class="lightbox-close-icon" onclick="closePhotoLightbox()">&times;</button>
    <button class="lightbox-nav-arrow prev" onclick="navPhotoLightbox(-1)">&#10094;</button>
    <div class="lightbox-content-frame">
      <img id="lightbox-full-img" src="" alt="Modi's Rack Preview">
      <div id="lightbox-caption" style="color:#FFF; font-size:1.05rem; margin-top:1.2rem; font-weight:700; text-shadow:0 2px 10px rgba(0,0,0,0.8);"></div>
    </div>
    <button class="lightbox-nav-arrow next" onclick="navPhotoLightbox(1)">&#10095;</button>
  `;
  document.body.appendChild(lb);
  
  window.addEventListener('keydown', (e) => {
    const el = document.getElementById('photo-lightbox-modal');
    if (el && el.classList.contains('active')) {
      if (e.key === 'Escape') closePhotoLightbox();
      if (e.key === 'ArrowLeft') navPhotoLightbox(-1);
      if (e.key === 'ArrowRight') navPhotoLightbox(1);
    }
  });
}

function openPhotoLightbox(idx) {
  activeLightboxIndex = idx;
  const lb = document.getElementById('photo-lightbox-modal');
  const img = document.getElementById('lightbox-full-img');
  const cap = document.getElementById('lightbox-caption');
  const item = galleryAllPhotos[idx];
  img.src = item.src;
  cap.textContent = `${item.caption} (Photograph ${idx + 1} of 60)`;
  lb.classList.add('active');
}

function openPhotoLightboxDirect(src, caption) {
  setupGalleryLightbox();
  const lb = document.getElementById('photo-lightbox-modal');
  const img = document.getElementById('lightbox-full-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = src;
  cap.textContent = caption || BUSINESS_NAME;
  lb.classList.add('active');
}

function closePhotoLightbox() {
  const lb = document.getElementById('photo-lightbox-modal');
  if (lb) lb.classList.remove('active');
}

function navPhotoLightbox(delta) {
  activeLightboxIndex += delta;
  if (activeLightboxIndex < 0) activeLightboxIndex = galleryAllPhotos.length - 1;
  if (activeLightboxIndex >= galleryAllPhotos.length) activeLightboxIndex = 0;
  const item = galleryAllPhotos[activeLightboxIndex];
  document.getElementById('lightbox-full-img').src = item.src;
  document.getElementById('lightbox-caption').textContent = `${item.caption} (Photograph ${activeLightboxIndex + 1} of 60)`;
}

// --------------------------------------------------------------------------
// 12. PAGE 05 & 06: COMPANY PROFILE & CONTACT CONTROLLER
// --------------------------------------------------------------------------
function initCompanyPage() {
  const mount = document.getElementById('company-reviews-mount');
  if (mount) {
    mount.innerHTML = CUSTOMER_REVIEWS.map(r => `
      <div class="glass-panel" style="padding:1.85rem; display:flex; flex-direction:column; ${r.critical ? 'border-left: 5px solid #EF4444;' : 'border-left: 5px solid var(--color-cyan);'}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <strong style="font-size:1.05rem; color:var(--color-black);">${r.name}</strong>
          <span style="color:${r.critical ? '#EF4444' : '#F59E0B'}; font-size:1.1rem;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
        </div>
        <p style="font-size:0.95rem; color:var(--color-black); line-height:1.65; margin-bottom:1rem; flex:1; font-style:italic;">"${r.text}"</p>
        <span style="font-size:0.75rem; font-weight:800; color:${r.critical ? '#EF4444' : 'var(--color-navy)'};">
          ${r.critical ? 'Customer Feedback' : 'Verified Purchase'}
        </span>
      </div>
    `).join('');
  }
  
  initVideoObserver();
}

function initContactPage() {
  initVideoObserver();
  initContactFormListeners();
}

function initContactFormListeners() {
  const form = document.getElementById('unified-contact-form');
  if (!form) return;

  // Real-time error clearing on input
  const inputs = form.querySelectorAll('.form-input-custom, .form-select-custom, .form-textarea-custom');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      const err = document.getElementById(`err-${input.id}`);
      if (err) err.classList.remove('visible');
    });
    input.addEventListener('change', () => {
      input.classList.remove('is-invalid');
      const err = document.getElementById(`err-${input.id}`);
      if (err) err.classList.remove('visible');
    });
  });
}

function validateUnifiedContactForm() {
  let isValid = true;
  let firstInvalid = null;

  const setErr = (id, show) => {
    const input = document.getElementById(id);
    const err = document.getElementById(`err-${id}`);
    if (show) {
      isValid = false;
      if (input) {
        input.classList.add('is-invalid');
        if (!firstInvalid) firstInvalid = input;
      }
      if (err) err.classList.add('visible');
    } else {
      if (input) input.classList.remove('is-invalid');
      if (err) err.classList.remove('visible');
    }
  };

  // 1. Full Name
  const nameEl = document.getElementById('contact-name');
  const name = nameEl ? nameEl.value.trim() : '';
  if (!name || name.length < 2) {
    setErr('contact-name', true);
  } else {
    setErr('contact-name', false);
  }

  // 2. Mobile Number (10 digits)
  const mobileEl = document.getElementById('contact-mobile');
  const mobile = mobileEl ? mobileEl.value.trim().replace(/[^0-9]/g, '') : '';
  if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
    setErr('contact-mobile', true);
  } else {
    setErr('contact-mobile', false);
  }

  // 3. Email (optional, but validate if supplied)
  const emailEl = document.getElementById('contact-email');
  const email = emailEl ? emailEl.value.trim() : '';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setErr('contact-email', true);
  } else {
    setErr('contact-email', false);
  }

  // 4. Enquiry Type
  const enqTypeEl = document.getElementById('contact-enquiry-type');
  const enqType = enqTypeEl ? enqTypeEl.value : '';
  if (!enqType) {
    setErr('contact-enquiry-type', true);
  } else {
    setErr('contact-enquiry-type', false);
  }

  // 5. Product Category
  const prodEl = document.getElementById('contact-product');
  const product = prodEl ? prodEl.value : '';
  if (!product) {
    setErr('contact-product', true);
  } else {
    setErr('contact-product', false);
  }

  // 6. Quantity (optional, but validate positive integer if provided)
  const qtyEl = document.getElementById('contact-quantity');
  const qty = qtyEl ? qtyEl.value.trim() : '';
  if (qty && (!/^[1-9]\d*$/.test(qty) || parseInt(qty, 10) <= 0)) {
    setErr('contact-quantity', true);
  } else {
    setErr('contact-quantity', false);
  }

  // 7. Requirements & Dimensions
  const reqEl = document.getElementById('contact-requirements');
  const requirements = reqEl ? reqEl.value.trim() : '';
  if (!requirements || requirements.length < 5) {
    setErr('contact-requirements', true);
  } else {
    setErr('contact-requirements', false);
  }

  if (firstInvalid) {
    firstInvalid.focus();
  }

  return {
    isValid,
    data: { name, phone: mobile, email, enquiryType: enqType, product, quantity: qty, message: requirements }
  };
}

async function submitUnifiedContactForm(e) {
  e.preventDefault();
  const feedback = document.getElementById('contact-form-feedback');
  if (feedback) {
    feedback.style.display = 'none';
    feedback.className = 'contact-feedback-box';
    feedback.innerHTML = '';
  }

  const { isValid, data } = validateUnifiedContactForm();
  if (!isValid) return;

  const submitBtn = document.getElementById('contact-submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

  // Set loading state
  if (submitBtn) {
    submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnSpinner) btnSpinner.style.display = 'inline-block';
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      // Build WhatsApp follow up message
      const waMsg = 
`HELLO MODI'S IRON RACKS,
I have submitted enquiry #${result.reference || 'DIRECT'} on your website:
Name: ${data.name}
Mobile: ${data.phone}
Email: ${data.email || 'Not provided'}
Type: ${data.enquiryType}
Product: ${data.product}
Quantity: ${data.quantity || 'Not specified'}
Requirements:
${data.message}`;

      const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(waMsg)}`;

      // Replace container with Confirmation Panel
      const container = document.getElementById('company-form-container');
      if (container) {
        container.innerHTML = `
          <div style="text-align:center; padding: 2.5rem 1rem;">
            <div style="width:72px; height:72px; border-radius:50%; background:var(--gradient-brand); color:#FFF; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; box-shadow:var(--glow-cyan);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span class="section-pill-tag">ENQUIRY TRANSMITTED</span>
            <h2 style="font-size:1.85rem; color:var(--color-black); margin:0.5rem 0 0.5rem; font-weight:800;">
              THANK YOU FOR CONTACTING US!
            </h2>
            <p style="font-size:1.05rem; color:var(--color-navy); font-weight:700; margin-bottom:0.35rem;">
              Enquiry Reference: #${result.reference || 'MR-' + Date.now().toString().slice(-6)}
            </p>
            <p style="color:var(--brand-muted); max-width:520px; margin:0 auto 2rem; font-size:0.95rem; line-height:1.6;">
              Dear <strong>${data.name}</strong>, your requirement has been received by our engineering team. We are preparing your factory wholesale quotation.
            </p>
            <div style="display:flex; flex-direction:column; gap:0.85rem; max-width:440px; margin:0 auto;">
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block" style="padding:1rem; font-weight:800; font-size:1rem;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.697.062-2.148-.544-1.727-.723-2.842-2.483-2.928-2.598-.086-.115-.699-.929-.699-1.771 0-.843.443-1.258.601-1.431.157-.173.344-.216.459-.216.115 0 .23 0 .33.007.108.007.252-.041.394.302.144.346.49 1.196.533 1.282.043.087.072.188.014.303-.058.115-.086.188-.172.289-.086.101-.182.226-.26.303-.086.086-.176.18-.076.353.1.173.444.733.953 1.187.654.582 1.205.763 1.378.85.172.086.273.072.374-.043.101-.116.43-.504.545-.677.115-.173.23-.144.388-.086.158.058 1.006.475 1.178.562.173.086.287.13.33.202.044.072.044.418-.1.823z"/>
                </svg>
                CONTINUE VIA WHATSAPP (FASTEST)
              </a>
              <button onclick="window.location.reload()" class="btn btn-secondary btn-block">
                SUBMIT ANOTHER REQUIREMENT
              </button>
            </div>
          </div>
        `;
      }
    } else {
      throw new Error(result.error || 'Server rejected submission');
    }
  } catch (err) {
    console.error('Form submission error:', err);
    if (feedback) {
      feedback.style.display = 'block';
      feedback.className = 'contact-feedback-box error';
      feedback.innerHTML = `
        <strong>Submission Failed:</strong> ${err.message || 'Unable to communicate with server.'}
        <br>Please check your connection, or <a href="javascript:sendInquiryViaWhatsApp()" style="color:#073B83; font-weight:800; text-decoration:underline;">Click Here to Send Directly on WhatsApp</a>.
      `;
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      if (btnText) btnText.style.display = 'inline-block';
      if (btnSpinner) btnSpinner.style.display = 'none';
    }
  }
}

function sendInquiryViaWhatsApp() {
  const name = document.getElementById('contact-name')?.value.trim() || 'Valued Customer';
  const phone = document.getElementById('contact-mobile')?.value.trim() || 'Not specified';
  const email = document.getElementById('contact-email')?.value.trim() || 'Not specified';
  const enqType = document.getElementById('contact-enquiry-type')?.value || 'General Enquiry';
  const product = document.getElementById('contact-product')?.value || 'Storage Racks';
  const qty = document.getElementById('contact-quantity')?.value.trim() || 'Not specified';
  const reqs = document.getElementById('contact-requirements')?.value.trim() || 'Interested in storage rack specifications and quotation.';

  const waMsg = 
`*NEW RACK ENQUIRY – MODI'S IRON RACKS*
*Customer Name:* ${name}
*Mobile Number:* ${phone}
*Email Address:* ${email}
*Enquiry Type:* ${enqType}
*Product Interested:* ${product}
*Quantity Required:* ${qty}
*Dimensions & Requirements:*
${reqs}`;

  const waUrl = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(waMsg)}`;
  window.open(waUrl, '_blank');
}

function submitCompanyInquiry(e) {
  // Backwards compatibility forwarder
  submitUnifiedContactForm(e);
}

// --------------------------------------------------------------------------
// 13. GLOBAL DOM INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initDrawers();
  updateCartCounters();
  initSearchModal();
  initMobileDrawer();
  initHeaderScroll();
  
  const path = window.location.pathname.toLowerCase();
  
  // Dispatch page controllers based on current URL
  if (path.includes('product.html')) {
    initProductPage();
  } else if (path.includes('booking.html')) {
    initBookingPage();
  } else if (path.includes('gallery.html')) {
    initGalleryPage();
  } else if (path.includes('company.html')) {
    initCompanyPage();
  } else if (path.includes('contact.html')) {
    initContactPage();
  } else {
    initHomePage();
  }
});
