// Get all the product cards
const productCards = document.querySelectorAll(".card");

// Function to update total price
function updateTotalPrice() {
  let total = 0;
  productCards.forEach((card) => {
    const unitPrice = parseFloat(
      card.querySelector(".unit-price").textContent.replace("$", "")
    );
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });
  document.querySelector(".total").textContent = `${total} $`;
}

// Event listener for quantity increase (+)
productCards.forEach((card) => {
  const increaseBtn = card.querySelector(".fa-plus-circle");
  const quantityElement = card.querySelector(".quantity");

  increaseBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
  });
});

// Event listener for quantity decrease (-)
productCards.forEach((card) => {
  const decreaseBtn = card.querySelector(".fa-minus-circle");
  const quantityElement = card.querySelector(".quantity");

  decreaseBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotalPrice();
    }
  });
});

// Event listener for item deletion
productCards.forEach((card) => {
  const deleteBtn = card.querySelector(".fa-trash-alt");

  deleteBtn.addEventListener("click", () => {
    card.remove(); // Remove the card from the DOM
    updateTotalPrice(); // Recalculate total price
  });
});

// Event listener for liking an item (heart button)
productCards.forEach((card) => {
  const likeBtn = card.querySelector(".fa-heart");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });
});

// Initialize total price on page load
updateTotalPrice();
