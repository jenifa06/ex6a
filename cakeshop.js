$(document).ready(function(){
    $("#calc").click(function(){   // <-- make sure the button id matches 'calc'
        let rainbow = parseInt($("#rainbow").val()) || 0;
        let choco = parseInt($("#choco").val()) || 0;
        let velvet = parseInt($("#velvet").val()) || 0;
        let black = parseInt($("#black").val()) || 0;

        let total = (rainbow * 300) + (choco * 200) + (velvet * 250) + (black * 350);

        $("#bill").html("Total Price: Rs. " + total);
    });
});
