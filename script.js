// --- 1. MJEWELLERS CATEGORIZED ADVANCED DATA ARCHITECTURE ---
const mjewellersProducts = [

    {
        id: "MJ-SC-M02",
        name: "Royal Cuban Silver Chain",
        type: "Silver Chain",
        purity: "925 Silver",
        price: 5299,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
    },
    
    {
        id: "MJ-SC-M03",
        name: "Classic Rope Silver Chain",
        type: "Silver Chain",
        purity: "925 Silver",
        price: 4199,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000&auto=format&fit=crop",
    },
    // ================= GOLD CHAINS =================

{
    id: "MJ-GC-01",
    name: "Royal Cuban Gold Chain",
    type: "Gold Chain",
    purity: "22K Gold",
    price: 125000,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-GC-02",
    name: "Luxury Rope Gold Chain",
    type: "Gold Chain",
    purity: "22K Gold",
    price: 98000,
    image: "https://images.unsplash.com/photo-1627293509201-cd0c780043e6?q=80&w=1000&auto=format&fit=crop",
},

// ================= GOLD BANGLES =================

{
    id: "MJ-GB-01",
    name: "Royal Antique Gold Bangle",
    type: "Gold Bangle",
    purity: "22K Gold",
    price: 148000,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-GB-02",
    name: "Classic Bridal Gold Kada",
    type: "Gold Bangle",
    purity: "22K Gold",
    price: 176000,
    image: "https://images.unsplash.com/photo-1620656798579-1984d9e87df7?q=80&w=1000&auto=format&fit=crop",
},

// ================= GOLD RINGS =================

{
    id: "MJ-GR-01",
    name: "Royal Diamond Gold Ring",
    type: "Gold Ring",
    purity: "18K Gold",
    price: 42000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-GR-02",
    name: "Luxury Engagement Ring",
    type: "Gold Ring",
    purity: "18K Gold",
    price: 56000,
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1000&auto=format&fit=crop",
},

// ================= EARRINGS =================

{
    id: "MJ-ER-01",
    name: "Princess Diamond Earrings",
    type: "Earrings",
    purity: "18K Gold",
    price: 67000,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-ER-02",
    name: "Luxury Pearl Drop Earrings",
    type: "Earrings",
    purity: "18K Gold",
    price: 49000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
},
// ================= SILVER RINGS =================

{
    id: "MJ-SR-01",
    name: "Royal Sterling Silver Ring",
    type: "Silver Ring",
    purity: "925 Silver",
    price: 3499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-SR-02",
    name: "Luxury Silver Couple Ring",
    type: "Silver Ring",
    purity: "925 Silver",
    price: 4299,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
},

// ================= SILVER BRACELETS =================

{
    id: "MJ-SB-01",
    name: "Cuban Silver Bracelet",
    type: "Silver Bracelet",
    purity: "925 Silver",
    price: 5999,
    image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-SB-02",
    name: "Luxury Rope Silver Bracelet",
    type: "Silver Bracelet",
    purity: "925 Silver",
    price: 4799,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000&auto=format&fit=crop",
},

// ================= DIAMOND NECKLACES =================

{
    id: "MJ-DN-01",
    name: "Royal Diamond Necklace",
    type: "Diamond Necklace",
    purity: "18K Gold",
    price: 285000,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-DN-02",
    name: "Luxury Bridal Diamond Set",
    type: "Diamond Necklace",
    purity: "18K Gold",
    price: 425000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
},

// ================= PENDANTS =================

{
    id: "MJ-PD-01",
    name: "Heart Shape Gold Pendant",
    type: "Pendant",
    purity: "22K Gold",
    price: 18999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
},

{
    id: "MJ-PD-02",
    name: "Luxury Diamond Pendant",
    type: "Pendant",
    purity: "18K Gold",
    price: 38999,
    image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1000&auto=format&fit=crop",
},
 
    // YAHAN paste karo
 
 ];

let vaultCart = [];

// ================= RENDER PRODUCTS =================
function renderCategorizedMarketplace() {

    const container = document.getElementById('jewelleryGrid');

    if (!container) return;

    container.innerHTML = '';

    mjewellersProducts.forEach(item => {

        container.innerHTML += `
        
        <div class="bg-[#111625] rounded-2xl p-4 border border-amber-500/10">

            <div class="rounded-xl overflow-hidden aspect-square mb-4">
                <img src="${item.image}" 
                     class="w-full h-full object-cover">
            </div>

            <h4 class="text-sm">${item.name}</h4>

            <p class="text-amber-400 font-bold mt-2">
                ₹${item.price.toLocaleString('en-IN')}
            </p>

            <button 
                onclick="addToVault('${item.id}')"
                class="w-full gold-bg text-black py-2 rounded-lg mt-4">
                Add To Vault
            </button>

        </div>
        `;
    });
}

// ================= ADD TO CART =================
function addToVault(id) {

    const targetItem = mjewellersProducts.find(p => p.id === id);

    const exists = vaultCart.find(item => item.id === id);

    if (exists) {
        exists.qty += 1;
    } else {
        vaultCart.push({
            ...targetItem,
            qty: 1
        });
    }

    updateVaultUI();
}

// ================= UPDATE CART =================
function updateVaultUI() {

    const countEl = document.getElementById('cartCount');
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotal');

    const totalItems = vaultCart.reduce((sum, item) => {
        return sum + item.qty;
    }, 0);

    if (countEl) {
        countEl.innerText = totalItems;
    }

    if (!container) return;

    if (vaultCart.length === 0) {

        container.innerHTML = `
            <p class="text-center text-gray-500 py-6">
                Vault is empty.
            </p>
        `;

        totalEl.innerText = "₹0";

        return;
    }

    container.innerHTML = '';

    let grandTotal = 0;

    vaultCart.forEach(item => {

        grandTotal += item.price * item.qty;

        container.innerHTML += `
        
        <div class="flex justify-between border-b border-gray-700 pb-3">

            <div>
                <h5>${item.name}</h5>

                <p class="text-amber-400">
                    ₹${item.price} × ${item.qty}
                </p>
            </div>

            <button onclick="removeFromVault('${item.id}')">
                ❌
            </button>

        </div>
        `;
    });

    totalEl.innerText =
        `₹${grandTotal.toLocaleString('en-IN')}`;
}

// ================= REMOVE ITEM =================
function removeFromVault(id) {

    vaultCart =
        vaultCart.filter(item => item.id !== id);

    updateVaultUI();
}

// ================= TOGGLE CART =================
function toggleCartModal() {

    const modal =
        document.getElementById('cartModal');

    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}

// ================= CHECKOUT =================
function checkoutVault() {

    if (vaultCart.length === 0) {

        alert("Your vault is empty.");

        return;
    }

    let message =
        "✨ *M JEWELLERS ORDER REQUEST* ✨\n\n";

    vaultCart.forEach((item, index) => {

        message += `${index + 1}. ${item.name}\n`;
        message += `SKU: ${item.id}\n`;
        message += `Metal: ${item.metal}\n`;
        message += `Purity: ${item.purity}\n`;
        message += `Qty: ${item.qty}\n`;
        message += `Price: ₹${item.price}\n`;
        message += `Subtotal: ₹${item.price * item.qty}\n\n`;

    });

    const total = vaultCart.reduce((sum, item) => {

        return sum + (item.price * item.qty);

    }, 0);

    message += `🛍 Total: ₹${total}`;

    // YOUR WHATSAPP NUMBER
    const phone = "918529990974";

    // FINAL URL
    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    // OPEN WHATSAPP
    window.open(url, "_blank");
}

// ================= COPY SKU =================
function copyMJSku(id) {

    navigator.clipboard.writeText(id);

    alert(`MJEWELLERS SKU [ ${id} ] Copied!`);
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {

    renderCategorizedMarketplace();

});
