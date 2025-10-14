$(document).ready(function(){
    function calculateTotal(){
        let rainbow = parseInt($("#rainbow").val()) || 0;
        let choco = parseInt($("#choco").val()) || 0;
        let velvet = parseInt($("#velvet").val()) || 0;
        let black = parseInt($("#black").val()) || 0;

        let total = (rainbow * 300) + (choco * 200) + (velvet * 250) + (black * 350);
        $("#bill").html("Total Price: Rs. " + total);
    }

    // Trigger total update automatically on typing or changing input
    $("input").on("keyup change", function(){
        calculateTotal();
    });
});
