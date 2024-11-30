document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.querySelector('.search-input');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeSwitch = document.getElementById('theme-switch');

    // Sample product data
    const products = [
        { id: 1, name: 'Digital Marketing Course', price: 99.99, image: 'https://example.com/product1.jpg' },
        { id: 2, name: 'Web Development Bootcamp', price: 149.99, image: 'https://example.com/product2.jpg' },
        { id: 3, name: 'Graphic Design Masterclass', price: 79.99, image: 'https://example.com/product3.jpg' },
        { id: 4, name: 'Data Science Fundamentals', price: 129.99, image: 'https://example.com/product4.jpg' },
        { id: 5, name: 'Mobile App Development Course', price: 89.99, image: 'https://example.com/product5.jpg' },
    ];

    // Function to render product cards
    function renderProducts(productsToRender) {
        productsContainer.innerHTML = '';
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

