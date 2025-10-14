$(document).ready(function() {
    $("#calc").click(function() {
        // Get the input values
        let rainbow = parseInt($("#rainbow").val()) || 0;
        let choco = parseInt($("#choco").val()) || 0;
        let velvet = parseInt($("#velvet").val()) || 0;
        let black = parseInt($("#black").val()) || 0;

        // Calculate total
        let total = (rainbow * 300) + (choco * 200) + (velvet * 250) + (black * 350);

        // Display total price
        $("#bill").html("Total Price: Rs. " + total);

        // Optional: Add a popup confirmation
        if (total > 0) {
            alert("🎉 Your order has been placed! Total: Rs. " + total);
        }
    });
});
