document.getElementById("placeOrder").addEventListener("click", function() {
  const rainbowQty = parseInt(document.getElementById("rainbow").value) || 0;
  const chocoQty = parseInt(document.getElementById("choco").value) || 0;
  const redVelvetQty = parseInt(document.getElementById("redvelvet").value) || 0;
  const blackForestQty = parseInt(document.getElementById("blackforest").value) || 0;

  // Cake prices
  const rainbowPrice = 300;
  const chocoPrice = 200;
  const redVelvetPrice = 250;
  const blackForestPrice = 350;

  // Calculate total
  const total =
    rainbowQty * rainbowPrice +
    chocoQty * chocoPrice +
    redVelvetQty * redVelvetPrice +
    blackForestQty * blackForestPrice;

  // Show bill
  document.getElementById("bill").style.display = "block";
  document.getElementById("totalPrice").textContent = "Total Price: Rs. " + total;
});