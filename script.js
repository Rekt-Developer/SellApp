document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
    const products = [
        { title: 'Small Product', price: 99.99 },
        { title: 'Medium Product', price: 100.00 },
        { title: 'Large Product', price: 101.00 },
        { title: 'Extra Large Product', price: 101.00 }
    ];

    const imageUrl = 'IMG_3999.png';

    products.forEach(product => {
        const productCard = document.createElement('article');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${imageUrl}" alt="${product.title}" loading="lazy">
            </div>
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-stock">∞ in stock</p>
        `;
        productsContainer.appendChild(productCard);
    });

    // Add smooth scroll behavior for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Implement a simple search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Implement a simple dark/light mode toggle
    const body = document.body;
    const toggleDarkMode = () => {
        body.classList.toggle('light-mode');
    };

    // Create a button for dark/light mode toggle
    const modeToggle = document.createElement('button');
    modeToggle.innerText = 'Toggle Light/Dark Mode';
    modeToggle.style.position = 'fixed';
    modeToggle.style.bottom = '20px';
    modeToggle.style.right = '20px';
    modeToggle.style.padding = '10px';
    modeToggle.style.backgroundColor = 'var(--accent-yellow)';
    modeToggle.style.color = 'var(--background)';
    modeToggle.style.border = 'none';
    modeToggle.style.borderRadius = '5px';
    modeToggle.style.cursor = 'pointer';
    modeToggle.addEventListener('click', toggleDarkMode);
    body.appendChild(modeToggle);

    // Implement a simple lazy loading for images
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.src = img.dataset.src;
                img.removeAttribute('loading');
            }
        });
    };

    window.addEventListener('scroll', lazyLoadImages);
    window.addEventListener('resize', lazyLoadImages);
    lazyLoadImages();
});
