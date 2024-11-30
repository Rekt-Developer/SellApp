document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const orderList = document.getElementById('order-list');
    const addProductBtn = document.getElementById('add-product');
    const settingsForm = document.getElementById('settings-form');

    // Sample product data
    const products = [
        { id: 1, name: 'Digital Marketing Course', price: 99.99 },
        { id: 2, name: 'Web Development Bootcamp', price: 149.99 },
        { id: 3, name: 'Graphic Design Masterclass', price: 79.99 },
        { id: 4, name: 'Data Science Fundamentals', price: 129.99 },
        { id: 5, name: 'Mobile App Development Course', price: 89.99 },
    ];

    // Sample order data
    const orders = [
        { id: 1001, customer: 'John Doe', total: 99.99, status: 'Completed' },
        { id: 1002, customer: 'Jane Smith', total: 149.99, status: 'Processing' },
        { id: 1003, customer: 'Bob Johnson', total: 79.99, status: 'Shipped' },
        { id: 1004, customer: 'Alice Brown', total: 129.99, status: 'Pending' },
        { id: 1005, customer: 'Charlie Wilson', total: 89.99, status: 'Completed' },
    ];

    // Function to render product rows
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>
                    <button class="admin-btn edit-product" data-id="${product.id}">Edit</button>
                    <button class="admin-btn delete-product" data-id="${product.id}">Delete</button>
                </td>
            `;
            productList.appendChild(row);
        });
    }

    // Function to render order rows
    function renderOrders() {
        orderList.innerHTML = '';
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customer}</td>
                <td>$${order.total.toFixed(2)}</td>
                <td>${order.status}</td>
                <td>
                    <button class="admin-btn view-order" data-id="${order.id}">View</button>
                    <button class="admin-btn update-status" data-id="${order.id}">Update Status</button>
                </td>
            `;
            orderList.appendChild(row);
        });
    }

    // Initial render
    renderProducts();
    renderOrders();

    // Add product functionality
    addProductBtn.addEventListener('click', () => {
        const newProduct = {
            id: products.length + 1,
            name: prompt('Enter product name:'),
            price: parseFloat(prompt('Enter product price:'))
        };
        products.push(newProduct);
        renderProducts();
    });

    // Edit and delete product functionality
    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-product')) {
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            product.name = prompt('Enter new product name:', product.name);
            product.price = parseFloat(prompt('Enter new product price:', product.price));
            renderProducts();
        } else if (e.target.classList.contains('delete-product')) {
            const productId = parseInt(e.target.dataset.id);
            const index = products.findIndex(p => p.id === productId);
            products.splice(index, 1);
            renderProducts();
        }
    });

    // View order and update status functionality
    orderList.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-order')) {
            const orderId = parseInt(e.target.dataset.id);
            const order = orders.find(o => o.id === orderId);
            alert(`Order Details:\nID: ${order.id}\nCustomer: ${order.customer}\nTotal: $${order.total.toFixed(2)}\nStatus: ${order.status}`);
        } else if (e.target.classList.contains('update-status')) {
            const orderId = parseInt(e.target.dataset.id);
            const order = orders.find(o => o.id === orderId);
            const newStatus = prompt('Enter new status:', order.status);
            if (newStatus) {
                order.status = newStatus;
                renderOrders();
            }
        }
    });

    // Settings form submission
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const siteName = document.getElementById('site-name').value;
        const currency = document.getElementById('currency').value;
        const theme = document.getElementById('theme').value;
        alert(`Settings saved:\nSite Name: ${siteName}\nCurrency: ${currency}\nTheme: ${theme}`);
    });

    // Simple charting (placeholder)
    function drawChart(chartId, data) {
        const chart = document.getElementById(chartId);
        chart.innerHTML = `<p>Chart placeholder for ${chartId}</p>`;
        // In a real application, you would use a charting library like Chart.js or D3.js here
    }

    // Draw sample charts
    drawChart('sales-chart', {});
    drawChart('top-products-chart', {});
});

