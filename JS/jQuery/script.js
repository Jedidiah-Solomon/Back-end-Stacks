$(document).ready(function() {

    // When the button is clicked, hide all <p> elements
    $("#hideButton").click(function() {
        $("p").hide();
    });

    $("#boxOffice").mouseover(function(){
        $("#boxOffice").hide();
    })

});
console.log($("p").hide());//an object
//$("p") -- selects all p

//$("#hideButton") -- This selector targets the element with the ID of "hideButton"

//$(document) -- This selector represents the entire HTML document. It allows you to attach event handlers or perform actions globally across the entire page.


$(document).ready(function() {
    // Fade in the element when the "Fade In" button is clicked
    $("#fadeInButton").click(function() {
        $("#myElement").fadeIn();
    });

    // Slide down the element when the "Slide Down" button is clicked
    $("#slideDownButton").click(function() {
        $("#myElement").slideDown();
    });

    // Animate multiple CSS properties when the "Animate" button is clicked
    $("#animateButton").click(function() {
        $("#myElement").animate({
            width: "800px",
            height: "400px",
            backgroundColor: "#e74c3c",
            fontSize: "24px"
        }, 1000); // Animation duration: 1000 milliseconds (1 second)
    });
});



$(document).ready(function() {
    // Get text content when the "Get Text" button is clicked
    $("#getTextButton").click(function() {
        const textContent = $("#myElement2").text();
        alert(`Text content: ${textContent}`);
    });

    // Set text content when the "Set Text" button is clicked
    $("#setTextButton").click(function() {
        $("#myElement2").text("New content");
    });

    // Get the "id" attribute value when the "Get Attribute" button is clicked
    $("#getAttributeButton").click(function() {
        const idValue = $("#myElement2").attr("id");
        alert(`Attribute value (id): ${idValue}`);
    });

    // Set the "class" attribute value when the "Set Attribute" button is clicked
    $("#setAttributeButton").click(function() {
        //$("#myElement2").attr("class", "highlighted");
        $("#myElement2").attr({"class": "highlighted", "title": "myBOX"});
    });
});