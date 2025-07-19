let products = [
  { id: 1, name: 'Watermelon', type: 'Fruit', price: 150, image: 'watermelon.jpg' },
  { id: 2, name: 'Coke', type: 'Soft drink', price: 190, image: 'coke.png'  },
  { id: 3, name: 'Bread', type: 'Meal', price: 90, image: 'bread.jpg' },
  { id: 4, name: 'Soyabeans', type: 'Beans', price: 210, image: 'soyabean.jpeg' },
  { id: 5, name: 'Gundruk', type: 'Nepali food', price: 85, image: 'gundruk.jpeg' },
  { id: 6, name: 'Rice', type: 'Long grain', price: 190, image: 'rice.webp' },
  { id: 7, name: 'Spinach', type: 'Vegetable', price: 40, image: 'spinach.webp' },
  { id: 8, name: 'Mustard leaf', type: 'Vegetable', price: 35, image: 'mleaf.webp' },
  { id: 9, name: 'Carrots', type: 'Vegetable', price: 75, image: 'carrot.jpg' },
  { id: 10, name: 'Ketchup', type: 'Supplement', price: 90, image: 'ketchup.webp' },
  { id: 11, name: 'Mix masala', type: 'Spice', price: 130, image: 'mmasala.jpg' },
  { id: 12, name: 'Fanta', type: 'Soft drink', price: 190, image: 'fanta.png' },
  { id: 13, name: 'Tuborg', type: 'Hard drink', price: 200, image: 'tuborg.png' },
  { id: 14, name: 'Vodka', type: 'Alcohol', price: 335, image: 'vodka.webp' },
  { id: 15, name: 'Flour', type: 'Meal', price: 140, image: 'flour.jpg' },
  { id: 16, name: 'Lays', type: 'Chips', price: 100, image: 'lays.jpg' },
  { id: 17, name: 'Nepali chips', type: 'Spiced potato Chips', price: 50, image: 'nchips.webp' },
  { id: 18, name: 'Oreo', type: 'Biscuit', price: 25, image: 'oreo.webp' },
  { id: 19, name: 'Dairy milk', type: 'Chocolate', price: 60, image: 'dmilk.webp' },
  { id: 20, name: 'WaiWai', type: 'Noodles', price: 20, image: 'waiwai.jpg' },
  // more products here
];
//displaying products code
function displayProducts(productArray) {
  const productList = document.querySelector('.main-content');
  productList.innerHTML = ''; // Clear the list
  productArray.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>Type: ${product.type}</p>
          <p>Price: Rs ${product.price}/-</p>
        </div>
        <div>
          <button class="button buy-now">Buy now</button>
          <button class="button add-to-cart">Add to cart</button>
        </div>
      </div>
    `;
  });
  document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
});
}

// Function to search products code
function searchProducts() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.type.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
}

// Initial display of products
displayProducts(products);