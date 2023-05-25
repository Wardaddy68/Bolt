document.addEventListener('DOMContentLoaded', function() {
    // Get the product information and price from the URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const price = urlParams.get('price');
  
    // Set the product name and price on the product.html page
    const nameElement = document.getElementById('name');
    const priceElement = document.getElementById('price');
    nameElement.textContent = name;
    priceElement.textContent = 'Price: $' + price;
  });
  function addToCart(name, price) {
    // Redirect to the product.html page with the selected item's information and price
    window.location.href = `product.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
  }
  