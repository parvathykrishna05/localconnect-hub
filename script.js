document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const address = document.getElementById('address').value;
  const role = document.getElementById('role').value;

  document.getElementById('login-section').style.display = 'none';
  document.getElementById('dashboard-section').style.display = 'block';
  document.getElementById('dashboard-title').textContent = `${role} Dashboard`;

  if (role === 'user') {
    document.getElementById('user-dashboard').style.display = 'block';
    loadItems();
  } else if (role === 'seller') {
    document.getElementById('seller-dashboard').style.display = 'block';
    loadSellerItems();
  }
});

document.getElementById('logout-button').addEventListener('click', function() {
  document.getElementById('dashboard-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
});

document.getElementById('item-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const category = document.getElementById('category').value;

  const item = { name, description, price, category };
  addItem(item);
});

function loadItems() {
  // Simulating items for demo purposes
  const items = [
    { name: 'Bananas', description: 'Fresh bananas', price: 50, category: 'Produce', image: 'images/bananas.jpg' },
    { name: 'Wooden Craft', description: 'Handmade wooden craft', price: 150, category: 'Handicrafts', image: 'images/wooden_craft.jpg' },
  ];

  const container = document.getElementById('user-items-container');
  container.innerHTML = '';
  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item-card';
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <p>Price: ₹${item.price}</p>
      <button class="buy-button" data-item='${JSON.stringify(item)}'>Buy</button>
    `;
    container.appendChild(itemElement);
  });

  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
      const item = JSON.parse(button.getAttribute('data-item'));
      initiatePayment(item);
    });
  });
}

function loadSellerItems() {
  // Simulating seller's items for demo purposes
  const items = [
    { name: 'Bananas', description: 'Fresh bananas', price: 50, category: 'Produce', image: 'images/bananas.jpg' },
    { name: 'Wooden Craft', description: 'Handmade wooden craft', price: 150, category: 'Handicrafts', image: 'images/wooden_craft.jpg' },
  ];

  const container = document.getElementById('seller-items-container');
  container.innerHTML = '';
  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item-card';
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <p>Price: ₹${item.price}</p>
    `;
    container.appendChild(itemElement);
  });
}

function addItem(item) {
  // Simulate adding item to inventory
  const container = document.getElementById('seller-items-container');
  const itemElement = document.createElement('div');
  itemElement.className = 'item-card';
  itemElement.innerHTML = `
    <img src="images/${item.name.toLowerCase().replace(' ', '_')}.jpg" alt="${item.name}">
    <h4>${item.name}</h4>
    <p>${item.description}</p>
    <p>Price: ₹${item.price}</p>
  `;
  container.appendChild(itemElement);
}

function initiatePayment(item) {
  document.getElementById('dashboard-section').style.display = 'none';
  document.getElementById('payment-section').style.display = 'block';

  document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    processPayment(item);
  });
}

function processPayment(item) {
  const name = document.getElementById('payment-name').value;
  const address = document.getElementById('payment-address').value;
  const cardNumber = document.getElementById('payment-card-number').value;
  const expiry = document.getElementById('payment-expiry').value;
  const cvc = document.getElementById('payment-cvc').value;

  // Simulating payment processing
  alert(`Payment for ${item.name} (₹${item.price}) successful!
Name: ${name}
Address: ${address}`);

  document.getElementById('payment-section').style.display = 'none';
  document.getElementById('dashboard-section').style.display = 'block';
}
