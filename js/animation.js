//Define DOM elements
const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid_tl");
const tr = document.querySelector("#grid_tr");
// const bl = document.querySelector("#grid_bl");
// const br = document.querySelector("#grid_br");

const tlBtn = document.querySelector("#grid_tl__btn");
const trBtn = document.querySelector("#grid_tr__btn");
// const blBtn = document.querySelector("#grid_bl__btn");
// const brBtn = document.querySelector("#grid_br__btn");

const tlContent = document.querySelector("#grid_tl__content");
const trContent = document.querySelector("#grid_tr__content");
// const blContent = document.querySelector("#grid_bl__content");
// const brContent = document.querySelector("#grid_br__content");

// const projectOne = document.querySelector(".p-1");
// const projectTwo = document.querySelector(".p-2");
// const projectThree = document.querySelector(".p-3");

//Define color and positions
const bgColor ="var(--bg)";
const bgColorAlt ="var(--bg-alt)";
const textColor ="var(--text)";
const textColorAlt ="var(--text-alt)";

let tlActive = "translate(5vw) translateY(0)";
let tlHidden = "transform: translateX(-100vw) translateY(-100vh);";

let trActive = "translate(-5vw) translateY(0)";
let trHidden = "transform: translateX(100vw) translateY(-100vh);";

let blActive = "translate(10vw) translateY(7vh)";
let blHidden = "transform: translateX(-100vw) translateY(100vh);";

let brActive = "translate(-5vw) translateY(0)";
let brHidden = "transform: translateX(100vw) translateY(100vh);";

// Define corner that is open
let activeCorner = "";

// Add an event listener to the window object to listen for resize events
window.addEventListener("resize", handleWindowResize);

// Function that handles the styling when resizing window
function handleWindowResize() {
     switch (activeCorner) {
         case "top-left":
            if (window.innerwidth <= 1100) {
                tlActive = "translate(0) translateY(0)";
                tlContent.style.transform = "translate(5vw) translateY(0)";
                tlContent.style.width = "100vw";
                tlContent.style.height = "100vh";
                tlContent.style.top = "0";
                tlContent.style.display = "flex";
                tlContent.style.alignItems = "center";
                tlContent.style.justifyContent = "center";
                tlContent.style.background = "var(--bg-transparent)";
                tlContent.style.zIndex = "200";
                tlBtn.style.zIndex = "300";
                trBtn.style.zIndex = "100";
                // blBtn.style.zIndex = "100";
                // brBtn.style.zIndex = "100";
            } else {
                tlActive = "translate(5vw) translateY(0)";
                tlContent.style.transform = "translate(5vw) translateY(0)";
                tlContent.style.width = "30vw";
                tlContent.style.height = "0";
                tlContent.style.top = "10vh";
                tlContent.style.display = "block";
            }
             break;

         case "top-right":
            if (window.innerwidth <= 1100) {
                trActive = "translate(0) translateY(0)";
                trContent.style.transform = "translate(0) translateY(0)";
                trContent.style.width = "100vw";
                trContent.style.height = "100vh";
                trContent.style.top = "0";
                trContent.style.display = "flex";
                trContent.style.alignItems = "center";
                trContent.style.justifyContent = "center";
                trContent.style.background = "var(--bg-transparent)";
                trContent.style.zIndex = "200";
                trBtn.style.zIndex = "300";
                tlBtn.style.zIndex = "100";
                // blBtn.style.zIndex = "100";
                // brBtn.style.zIndex = "100";
            } else {
                trActive = "translate(-5vw) translateY(0)";
                trContent.style.transform = "translate(5vw) translateY(0)";
                trContent.style.width = "30vw";
                trContent.style.height = "0";
                trContent.style.top = "10vh";
                trContent.style.display = "block";
            }
             break;

         case "bottom-left":
             //some code
             break;

         case "bottom-right":
             //some code
             break;

             default:
     }
}

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

// Play animation function
function playAnimation(animation, reverseAnimation) {
// Remove all the animation classes from heroImage
heroImage.className = "";

    if (lastReverseAnimation !== "") {
        heroImage.classList.add(lastReverseAnimation);
        setTimeout(function () {
            heroImage.classList.remove(lastReverseAnimation);
            heroImage.classList.add(animation);
            lastReverseAnimation = reverseAnimation;
        }, 200);
    } else {
        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
    }
}

function playClosingAnimation(reverseAnimation) {
    tlBtn.innerHTML = "About Us"
    trBtn.innerHTML = "Ingredients"
    // blBtn.innerHTML = "Flavours"
    // brBtn.innerHTML = "Policies"

    switch (activeCorner) {
        case "top-left":
            tlBtn.style.background = bgColor;
            tlBtn.style.color = textColor;
            tlContent.style.transform = tlHidden;
            break;
            case "top-right":
            trBtn.style.background = bgColor;
            trBtn.style.color = textColor;
            trContent.style.transform = trHidden;
            break;
            // case "bottom-left":
            // tlBtn.style.background = bgColor;
            // tlBtn.style.color = textColor;
            // tlContent.style.transform = tlHidden;
            // break;
            // case "bottom-right":
            // tlBtn.style.background = bgColor;
            // tlBtn.style.color = textColor;
            // tlContent.style.transform = tlHidden;
            // break;

            default:
    }

    heroImage.className = "";
    lastReverseAnimation = "";
    activeCorner = "";
    heroImage.classList.add(reverseAnimation);
    setTimeout(function () {
        heroImage.classList.remove(reverseAnimation);
    }, 200);
}

// Onclick corner button functions
tlBtn.onclick = function () {
    if(activeCorner === "top-left") {
        playClosingAnimation("reverse-animate-top-left");
    } else {
        trBtn.innerHTML = "Ingredients";
        // blBtn.innerHTML = "Flavours";
        // brBtn.innerHTML = "Policies";
        
        // Setting activeCorner
        activeCorner ="top-left";
        tlBtn.innerHTML = "&uarr;<br/>About us";

        handleWindowResize();
        playAnimation("animate-top-left", "reverse-animate-top-left");

        //Change background colors
        trBtn.style.background = bgColor;        
        // brBtn.style.background = bgColor;        
        tlBtn.style.background = bgColorAlt;        
        // blBtn.style.background = bgColor;
        
        // Change text colors
        trBtn.style.color = textColor;        
        // brBtn.style.color = textColor;        
        tlBtn.style.color = textColorAlt;        
        // blBtn.style.color = textColor;

        // Change positions of the corner content
        trContent.style.transform = trHidden;        
        // brContent.style.transform = brHidden;        
        tlContent.style.transform = tlActive;        
        // blContent.style.transform = blHidden;


    }
};

 trBtn.onclick = function () {
     if(activeCorner == "top-right") {
         playClosingAnimation("reverse-animate-top-right");
     } else {
         tlBtn.innerHTML = "About us";
        //  blBtn.innerHTML = "Flavours";
        //  brBtn.innerHTML = "Policies";

         // Setting activeCorner
         activeCorner ="top-left";
         tlBtn.innerHTML = "&uarr;<br/>Ingredients";

         handleWindowResize();
         playAnimation("animate-top-right", "reverse-animate-top-right");

         //Change background colors
         trBtn.style.background = bgColorAlt;        
         // brBtn.style.background = bgColor;        
         tlBtn.style.background = bgColor;        
         // blBtn.style.background = bgColor;
        
         // Change text colors
         trBtn.style.color = textColorAlt;        
         // brBtn.style.color = textColor;        
         tlBtn.style.color = textColor;        
         // blBtn.style.color = textColor;

         // Change positions of the corner content
         trContent.style.transform = trActive;        
         //brContent.style.transform = brHidden;        
         tlContent.style.transform = tlHidden;        
         //blContent.style.transform = blHidden;

    }
};

// blBtn.onclick = function () {
//     if(activeCorner == "bottom-left") {
//         playClosingAnimation("reverse-animate-bottom-left");
//     } else {
//         tlBtn.innerHTML = "About us";
//         trBtn.innerHTML = "Ingredients";
//         brBtn.innerHTML = "Policies";

//         // Setting activeCorner
//         activeCorner ="bottom-left";
//         tlBtn.innerHTML = "Flavours<br/>&darr;";

//         handleWindowResize();
//         playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

//         //Change background colors
//         trBtn.style.background = bgColor;        
//         brBtn.style.background = bgColor;        
//         tlBtn.style.background = bgColor;        
//         blBtn.style.background = bgColorAlt;
        
//         // Change text colors
//         trBtn.style.color = textColor;        
//         brBtn.style.color = textColor;        
//         tlBtn.style.color = textColor;        
//         blBtn.style.color = textColorAlt;

//         // Change positions of the corner content
//         trContent.style.transform = trHidden;        
//         brContent.style.transform = brHidden;        
//         tlContent.style.transform = tlHidden;        
//         blContent.style.transform = blActive;


//     }
// }

// brBtn.onclick = function () {
//     if(activeCorner == "bottom-right") {
//         playClosingAnimation("reverse-animate-bottom-right");
//     } else {
//         tlBtn.innerHTML = "About us";
//         trBtn.innerHTML = "Ingredients";
//         blBtn.innerHTML = "Flavours";

//         // Setting activeCorner
//         activeCorner ="bottom-left";
//         tlBtn.innerHTML = "Policies<br/>&darr;";

//         handleWindowResize();
//         playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

//         //Change background colors
//         trBtn.style.background = bgColor;        
//         brBtn.style.background = bgColorAlt;        
//         tlBtn.style.background = bgColor;        
//         blBtn.style.background = bgColor;
        
//         // Change text colors
//         trBtn.style.color = textColor;        
//         brBtn.style.color = textColorAlt;        
//         tlBtn.style.color = textColor;        
//         blBtn.style.color = textColor;

//         // Change positions of the corner content
//         trContent.style.transform = trHidden;        
//         brContent.style.transform = brActive;        
//         tlContent.style.transform = tlHidden;        
//         blContent.style.transform = blHidden;


//     }
// }