document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.querySelector('.search-input');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeSwitch = document.getElementById('theme-switch');

    // Sample product data
    const products = [
        { id: 1, name: 'Bitcoin Flash Tool V6.5.1', price: 250.00, image: 'https://storage.sell.app/store/49175/listings/hs9KNLIrVKmiqK9GExzjpk5vwbuWfV2th7Iq6YAn.jpg' },
        { id: 2, name: 'Flash Miner for Windows', price: 100.00, image: 'https://storage.sell.app/store/49175/listings/5jHYcH7r0Pcr1Pp8yjWlSNHLdM7bl9yystNCuCQO.webp' },
        { id: 3, name: 'Flash USDT Full Package', price: 300.00, image: 'https://storage.sell.app/store/49175/listings/kcdSyWdCFmRyYU86U7CqDyUO9oCk9JYWYzVvyXID.png' },
        { id: 4, name: 'Metamusk Crypto Drainer', price: 200.00, image: 'https://www.cryptounitoffice.com/images/metamask.png' },
        { id: 5, name: 'Angel Drainer', price: 150.00, image: 'https://defi-planet.com/wp-content/uploads/2024/07/Crypto-Malware-Angel-Drainer-Reportedly-Shuts-Down-Following-Identification-of-Developers.jpeg' },
        { id: 6, name: 'SeedSigner', price: 50.00, image: 'https://bitcoiner.guide/assets/img/SeedSigner.png' },
    ];

    // Function to render product cards
    function renderProducts(productsToRender) {
        productsContainer.innerHTML = ''; // Clear previous products
        if (productsToRender.length === 0) {
            productsContainer.innerHTML = '<p class="no-results">No products found.</p>';
        } else {
            productsToRender.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
        }
    }

    // Initial render
    renderProducts(products);

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });

    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle functionality
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
