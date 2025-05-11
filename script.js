// Data Produk
const products = [
    {
        id: 1,
        name: "Sepatu Sneakers",
        price: 350000,
        image: "images/sepatu.jpg",
        description: "Sepatu sneakers nyaman untuk sehari-hari"
    },
    {
        id: 2,
        name: "Tas Ransel",
        price: 250000,
        image: "images/tas.jpg",
        description: "Tas ransel dengan banyak kompartemen"
    },
    {
        id: 3,
        name: "Jam Tangan",
        price: 500000,
        image: "images/jam.jpg",
        description: "Jam tangan elegan dengan bahan berkualitas"
    },
    {
        id: 4,
        name: "Kemeja Casual",
        price: 180000,
        image: "images/kemeja.jpg",
        description: "Kemeja casual dengan bahan katun nyaman"
    },
    {
        id: 5,
        name: "Celana Jeans",
        price: 280000,
        image: "images/jeans.jpg",
        description: "Celana jeans slim fit berbagai warna"
    },
    {
        id: 6,
        name: "Topi Baseball",
        price: 120000,
        image: "images/topi.jpg",
        description: "Topi baseball dengan logo stylish"
    }
];

// Nomor WhatsApp admin (ganti dengan nomor Anda)
const whatsappNumber = "6281234567890"; // Format: 62 kode negara Indonesia tanpa + atau 0
const whatsappMessage = "Halo admin, saya ingin memesan produk berikut:";

// Variabel keranjang belanja
let cart = [];

// Fungsi untuk menampilkan produk
function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-price">Rp ${product.price.toLocaleString('id-ID')}</span>
                <p>${product.description}</p>
                <button class="buy-btn" data-id="${product.id}">Beli via WhatsApp</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });

    // Tambahkan event listener ke tombol beli
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        
        // Buat pesan WhatsApp
        const message = encodeURIComponent(`${whatsappMessage}\n\n*${product.name}*\nHarga: Rp ${product.price.toLocaleString('id-ID')}\n\nSaya ingin memesan produk ini.`);
        const whatsappUrl = `https://wa.me/${62895411950673}?text=${message}`;
        
        // Buka WhatsApp
        window.open(whatsappUrl, '_blank');
    }
}

// Fungsi untuk update jumlah keranjang
function updateCartCount() {
    document.querySelector('.cart-count').textContent = cart.length;
}

// Fungsi untuk setup tombol WhatsApp float
function setupWhatsAppFloat() {
    const whatsappLink = document.getElementById('whatsappLink');
    const message = encodeURIComponent("Halo admin, saya ingin bertanya tentang produk yang dijual.");
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupWhatsAppFloat();
});
