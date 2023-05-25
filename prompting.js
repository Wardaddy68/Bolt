const addToCartLinks = document.querySelectorAll('.add-to-cart');

// Attach click event listeners to each link
addToCartLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the link from redirecting

    // Display the "Added to cart" message
    alert('Added to cart');
  });
});