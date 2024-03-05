let flavours = document.getElementsByClassName("flavours");
let slideIndex = 1;

showFlavours(slideIndex);

function showFlavours(num) {
    // go to first flavour, after clicking forward from last button
    if(num > flavours.length) {
        slideIndex = 1;
    }
    //Go to last flavour, when clicking backwards from first flavour
    if(num < 1) {
        slideIndex = flavours.length;
    }
    // For loop to hide all the flavours
    for (let i = 0; i < flavours.length; i++) {
        flavours[i].style.display = "none";
    }
    flavours[slideIndex - 1].style.display = "flex";
}

function navigateFlavours(num) {
    // Change the slideinded based on back or forward arrow
    showFlavours((slideIndex += num));
}