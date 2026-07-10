// --- Extensive Database (Strictly Rods, Reels, Lines, Hooks, Accessories) ---
// All images verified directly from Eprofishing CDN
const products = [
    // --- REELS ---
    { 
        id: 1, category: 'reels', 
        name: 'Okuma Tomcat Spinning Reel', 
        brand: 'Okuma', sku: '4718947067067',
        price: 1960.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-tomcat-spinning-reel-tmc-4000-1367827_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>Okuma Tomcat Spinning Reel<br>
            Built tough with a corrosion-resistant graphite body and precision gearing, the Tomcat series delivers dependable long-distance performance.</p>
            
            <h3>المميزات (Features):</h3>
            <ul>
                <li>Corrosion-resistant graphite body</li>
                <li>6 ball bearings + 1 roller bearing for smooth operation</li>
                <li>Quick-Set infinite anti-reverse system for solid hooksets</li>
                <li>Precision elliptical oscillation for smooth line handling</li>
                <li>Multi-disc Japanese-oiled felt drag washers for consistent drag</li>
            </ul>

            <h3>المواصفات (Specs):</h3>
            <ul>
                <li>Gear Ratio: 5.0:1</li>
                <li>Bearings: 6BB + 1RB</li>
                <li>Weight: 301 g</li>
                <li>Max Drag: 8 kg</li>
            </ul>
        `
    },
    { 
        id: 2, category: 'reels', 
        name: 'Okuma Azores Spinning Reel', 
        brand: 'Okuma', sku: '4718947029737',
        price: 4020.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-azores-spinning-reel-4000-2769073_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Okuma Azores Blue Spinning Reel is built for anglers who demand serious durability in harsh conditions. Designed with Okuma’s proven DFD Dual Force Drag system, heavy-duty gearing, and a fully rigid die-cast aluminum body.</p>
            
            <h3>المميزات (Features):</h3>
            <ul>
                <li>DFD: Precision Dual Force Drag system</li>
                <li>Precision click drag adjustment for more precise settings</li>
                <li>6HPB + 1RB corrosion resistant stainless steel bearings</li>
                <li>Machined aluminum, 2-tone anodized spool</li>
            </ul>

            <h3>المواصفات (Specs):</h3>
            <ul>
                <li>Gear Ratio: 5.8:1</li>
                <li>Weight: 341 g</li>
                <li>Max Drag: 13 kg</li>
            </ul>
        `
    },
    { 
        id: 3, category: 'reels', 
        name: 'Okuma Safina Spinning Reel', 
        brand: 'Okuma', sku: 'SN-4000',
        price: 1135.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-safina-spinning-reel-sn-4000-9935479_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>Built with a corrosion-resistant graphite body and precise ergonomics, the Safina series offers reliable, entry-level performance for freshwater applications.</p>
            
            <h3>المواصفات (Specs):</h3>
            <ul>
                <li>Corrosion-resistant graphite body</li>
                <li>CFR: Cyclonic Flow Rotor technology</li>
                <li>1 ball bearing + 1 roller bearing</li>
                <li>Quick-Set infinite anti-reverse system</li>
            </ul>
        `
    },
    { 
        id: 4, category: 'reels', 
        name: 'Okuma Wave Power Spinning Reel', 
        brand: 'Okuma', sku: 'WP-3000A1',
        price: 900.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-wave-power-spinning-reel-wp-3000a1-1319205_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Okuma Wave Power reel delivers dependable performance at an unbeatable value. Built with a corrosion-resistant graphite body, it's perfect for daily fishing trips in the Nile.</p>
        `
    },
    { 
        id: 5, category: 'reels', 
        name: 'Okuma Cedros Spinning Reel', 
        brand: 'Okuma', sku: 'CJ-6000H',
        price: 3060.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-cedros-spinning-reel-cj-6000h-8688880_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Cedros series blends lightweight yet durable LITECAST® construction with Okuma’s powerful Dual Force Drag (DFD) system. Engineered for immense pulling power.</p>
        `
    },
    { 
        id: 6, category: 'reels', 
        name: 'Okuma Metaloid Spinning Reel', 
        brand: 'Okuma', sku: 'MS-65S',
        price: 6500.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-metaloid-spinning-reel-ms-65s-1844354_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Okuma Metaloid Reel is built for anglers who demand strength, smoothness, and dependable performance when fighting giant fish.</p>
        `
    },
    { 
        id: 7, category: 'reels', 
        name: 'Okuma Tesoro Spinning Reel', 
        brand: 'Okuma', sku: 'TSA-8000PA',
        price: 14800.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-tesoro-spinning-reel-tsa-8000pa-6646810_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Okuma Tesoro Spinning Reel is engineered for anglers who demand absolute power, durability, and waterproof protection. A premium piece of machinery.</p>
        `
    },
    { 
        id: 20, category: 'reels', 
        name: 'Okuma Salina II Spinning Reel', 
        brand: 'Okuma', sku: 'SA-II-16000',
        price: 3900.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/okuma-salina-ii-spinning-reel-sa-ii-16000-2662442_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Salina II 16000 is a heavy-duty spinning reel designed for anglers targeting large game. Built with LITECAST construction to handle the toughest conditions effortlessly.</p>
        `
    },

    // --- RODS ---
    { 
        id: 8, category: 'rods', 
        name: 'Oceans Legacy Adrenalin Vertical Jigging Rod', 
        brand: 'Oceans Legacy', sku: 'ADDG-S561ML',
        price: 16000.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/oceans-legacy-adrenalin-vertical-jigging-rod-addg-s561ml-120g-260g-168m-spin-2991799_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>Developed through years of testing on powerful gamefish, the Ocean's Legacy Adrenalin is built to stop giants in their tracks.</p>
            <h3>المواصفات (Specs):</h3>
            <ul>
                <li>Casting Weight: 120g - 260g</li>
                <li>Length: 1.68m</li>
                <li>Type: Spin</li>
            </ul>
        `
    },
    { 
        id: 9, category: 'rods', 
        name: 'Oceans Legacy Elementus Speed Jigging', 
        brand: 'Oceans Legacy', sku: 'ELSPD-B611XH',
        price: 19000.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/oceans-legacy-elementus-speed-jigging-elspd-b611xh-200-450-g-185-overhead-spiral-6654558_512x367.webp',
        description: `
            <h3>وصف المنتج</h3>
            <p>Specifically designed for targeting huge predators, the Ocean’s Legacy Elementus Speed Jigging rod is incredibly powerful and sensitive.</p>
            <h3>المواصفات (Specs):</h3>
            <ul>
                <li>Casting Weight: 200g - 450g</li>
                <li>Length: 1.85m</li>
            </ul>
        `
    },
    { 
        id: 10, category: 'rods', 
        name: 'Oceans Legacy Element Slow Jigging', 
        brand: 'Oceans Legacy', sku: 'ELSJ-S62M',
        price: 11500.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/oceans-legacy-element-slow-jigging-elsj-s62m-120g-300g-188-m-6312229_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Ocean’s Legacy Slow Element is a balanced slow-pitch jigging rod designed for anglers who want precise jig control and heavy pulling power.</p>
        `
    },
    { 
        id: 11, category: 'rods', 
        name: 'Oceans Legacy Focal II Offshore Casting', 
        brand: 'Oceans Legacy', sku: 'FCL2-S7112HH',
        price: 18800.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/oceans-legacy-focal-ii-offshore-casting-fcl2-s7112hh-80-160g-241m-spin-6078568_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>The Ocean's Legacy Focal II Casting series has been redesigned to be stronger, faster, and lighter for incredible casting distance.</p>
        `
    },
    { 
        id: 12, category: 'rods', 
        name: 'Oceans Legacy Specialist Landbased', 
        brand: 'Oceans Legacy', sku: 'SSG-S1022H',
        price: 17500.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/oceans-legacy-specialist-landbased-casting-shore-jigging-ssg-s1022h-60-130g-310m-2pc-spin-6895771_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>Designed for serious land-based anglers, the Ocean's Legacy Specialist series combines exceptional casting distance with massive stopping power.</p>
        `
    },

    // --- LINES ---
    { 
        id: 13, category: 'lines', 
        name: 'Sufix XL Strong 240M/300M', 
        brand: 'Sufix', sku: '024777323032',
        price: 85.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/sufix-xl-strong-240m300m10-x-100m-connected-020-mm-8865777_512x367.jpg',
        description: `
            <h3>وصف المنتج</h3>
            <p>Sufix XL Strong is an exceptionally soft, smooth and supple fishing line with the perfect balance of tensile and knot strength.</p>
            <h3>المميزات:</h3>
            <ul>
                <li>High knot strength</li>
                <li>Low memory</li>
                <li>High abrasion resistance</li>
            </ul>
        `
    },
    { 
        id: 14, category: 'lines', 
        name: 'Sufix 832 Advanced Superline Braid 250M', 
        brand: 'Sufix', sku: '024777664531',
        price: 1680.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/sufix-832-advanced-superline-braid-250m-018-mm-6672628_512x512.jpg',
        description: `
            <h3>وصف المنتج</h3>
            <p>Sufix 832 Advanced Superline® is the strongest, most durable small diameter braid. It is built with 8 fibers (7 HMPE plus 1 GORE® Performance Fiber) at 32 pics per inch.</p>
        `
    },
    { 
        id: 15, category: 'lines', 
        name: 'Sufix Invisiline Fluorocarbon Leader 20M', 
        brand: 'Sufix', sku: '024777707498',
        price: 350.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/Sufix_Fluorocarbon_Invisiline_Leader_20M_512x367.svg',
        description: `
            <h3>وصف المنتج</h3>
            <p>Sufix Invisiline® is a premium quality and high integrity leader material. It is made from 100% fluorocarbon, making it practically invisible in water.</p>
        `
    },
    { 
        id: 16, category: 'lines', 
        name: 'Handline Super Soft', 
        brand: 'Sufix', sku: 'HL-SS-060',
        price: 210.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/handline-super-soft-050-mm-7050136_512x367.jpg',
        description: `
            <h3>وصف المنتج</h3>
            <p>Experience unmatched performance with the Sufix Handline Super Soft. Crafted for superior handling, this ultra-smooth line offers exceptional flexibility.</p>
        `
    },

    // --- HOOKS & TERMINAL TACKLE ---
    { 
        id: 17, category: 'hooks', 
        name: 'VMC 7360 - Dynamic Live Bait', 
        brand: 'VMC', sku: 'VMC-7360',
        price: 310.00, 
        image: 'https://www.eprofishing.co/cdn/shop/products/vmc-7360-dynamic-live-bait-2-10-pcs-9609863_512x367.jpg',
        description: `
            <h3>وصف المنتج</h3>
            <p>The VMC 7360 Dynamic Live Bait hook is engineered for serious anglers who demand maximum hook-setting power. Perfect for live bait applications.</p>
        `
    },
    { 
        id: 18, category: 'accessories', 
        name: 'VMC 3565 - EZ Split', 
        brand: 'VMC', sku: 'VMC-3565',
        price: 220.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/vmc-3565-ez-split-1-12-6821087_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>EZ Split – Heavy-Duty Snap. The EZ Split is a high-strength snap offering a faster, safer, and more efficient alternative to traditional split rings.</p>
        `
    },
    { 
        id: 19, category: 'hooks', 
        name: 'Lure Us In 60LB Treble Hook Assemblies', 
        brand: 'Lure Us In', sku: 'LUI-TH-60LB',
        price: 600.00, 
        image: 'https://www.eprofishing.co/cdn/shop/files/lure-us-in-60lb80mm-size-2-treble-hook-assemblies-1224060_512x367.png',
        description: `
            <h3>وصف المنتج</h3>
            <p>Upgrade your trolling setup with these heavy-duty 60lb Treble Hook Assemblies, designed for secure hookups on giant predators.</p>
        `
    }
];

let cart = JSON.parse(localStorage.getItem('sayadProCart')) || [];

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; 
    
    if(items.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 30px;">عفواً، لا توجد منتجات مطابقة.</p>';
        return;
    }

    items.forEach(product => {
        grid.innerHTML += `
            <div class="card" onclick="showProductDetails(${product.id})">
                <div class="card-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <h3>${product.name}</h3>
                <div class="price-row">
                    <button class="btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})">أضف للسلة</button>
                    <span class="price">LE ${product.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
            </div>
        `;
    });
}

function filterProducts(category) {
    goHome();
    const title = document.getElementById('category-title');
    document.getElementById('search-input').value = ''; 
    
    document.querySelectorAll('.desktop-nav button, .mobile-bottom-nav .nav-item').forEach(el => el.classList.remove('active'));
    if(event && event.currentTarget) event.currentTarget.classList.add('active');

    if(category === 'all') {
        title.innerText = 'وصل حديثاً (معدات النيل)';
        renderProducts(products);
    } else {
        const catMap = {
            'rods': 'السنارات والبوص', 
            'reels': 'الماكينات', 
            'lines': 'الخيوط', 
            'hooks': 'السنون',
            'accessories': 'مستلزمات الصيد'
        };
        title.innerText = catMap[category] || 'المنتجات';
        renderProducts(products.filter(p => p.category === category));
    }
}

function searchProducts() {
    goHome();
    const query = document.getElementById('search-input').value.toLowerCase();
    document.getElementById('category-title').innerText = `نتائج البحث عن: "${query}"`;
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));
    renderProducts(filtered);
}

function goHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('product-view').style.display = 'none';
    window.scrollTo(0, 0);
}

function showProductDetails(id) {
    const product = products.find(p => p.id === id);
    document.getElementById('home-view').style.display = 'none';
    const prodView = document.getElementById('product-view');
    prodView.style.display = 'block';

    document.getElementById('product-details-container').innerHTML = `
        <div class="pd-img">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div>
            <h1 class="pd-title">${product.name}</h1>
            <div class="pd-brand">بواسطة ${product.brand} | رمز المنتج: ${product.sku}</div>
            
            <p class="pd-price">LE ${product.price.toLocaleString('en-US', {minimumFractionDigits: 2})}</p>

            <button class="btn-primary" style="width: 100%; padding: 15px; font-size: 1.2rem;" onclick="addToCart(${product.id})">
                أضف إلى السلة
            </button>

            <!-- Trust Badges exactly like the screenshot -->
            <div class="pd-trust-badges">
                <div><i class="fa-solid fa-truck"></i> <span>توصيل سريع وموثوق 🚚<br><small style="color:#777; font-weight:normal;">احصل على معداتك بسرعة! نوفر شحن سريع وآمن لضمان وصول طلبك في الوقت المناسب.</small></span></div>
                <div><i class="fa-solid fa-rotate-left"></i> <span>استرجاع سهل 🔁<br><small style="color:#777; font-weight:normal;">مش راضي عن المنتج؟ ولا يهمك! نوفر استرجاع واستبدال بسهولة.</small></span></div>
                <div><i class="fa-solid fa-check-circle"></i> <span>جودة مضمونة ✅<br><small style="color:#777; font-weight:normal;">كل المنتجات يتم اختبارها لضمان الأداء والمتانة، عشان تصيد بثقة.</small></span></div>
            </div>

            <div class="pd-full-desc">
                ${product.description}
            </div>
        </div>
    `;
    window.scrollTo(0, 0);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) existingItem.quantity += 1; 
    else cart.push({ ...product, quantity: 1 }); 

    saveCart();
    
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = "✓ تمت الإضافة";
    btn.style.background = "#56ad6a"; // Success green
    btn.style.borderColor = "#56ad6a";
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.style.borderColor = "";
    }, 1500);
}

// Function to remove item completely from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

function saveCart() {
    localStorage.setItem('sayadProCart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    if(document.getElementById('cart-count-desktop')) document.getElementById('cart-count-desktop').innerText = count;
    if(document.getElementById('cart-count-mobile')) document.getElementById('cart-count-mobile').innerText = count;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    updateCartModal();
}

function updateCartModal() {
    const cartItemsDiv = document.getElementById('cart-items');
    let total = 0;
    let emailText = 'طلب جديد (اَلصَّيَّاد):\n\n'; 

    cartItemsDiv.innerHTML = '';
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align:center; padding: 20px;">عربة التسوق فارغة.</p>';
    } else {
        cart.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            // Added the Delete (Trash) button here
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <div style="flex: 1;">
                        <span style="font-size: 0.95rem; display:block; margin-bottom:5px;">${item.quantity}x ${item.name}</span>
                        <span style="color:var(--text-dark);">LE ${itemTotal.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="حذف المنتج">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
            emailText += `- ${item.quantity}x ${item.name} (السعر: LE ${item.price})\n`;
        });
    }

    document.getElementById('cart-total').innerText = `LE ${total.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    emailText += `\nالإجمالي: LE ${total.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
    document.getElementById('hidden-order-details').value = emailText;
}

function clearCartOnSubmit() {
    localStorage.removeItem('sayadProCart');
    cart = [];
}

window.onload = () => {
    renderProducts(products);
    updateCartCount();
};