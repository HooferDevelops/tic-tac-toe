let animatedBackgroundNames = [
    "xo-1.svg",
    "xo-2.svg",
    "xo-3.svg"
]

let currentBackgroundIndex = 0

setInterval(() => {
    let randomBackground = animatedBackgroundNames[currentBackgroundIndex]
    
    let backgroundClasses = document.getElementsByClassName("background");

    for (let i = 0; i < backgroundClasses.length; i++) {
        backgroundClasses[i].style.maskImage = `url(/assets/${randomBackground})`;
        backgroundClasses[i].style.webkitMaskImage = `url(/assets/${randomBackground})`;
    }

    currentBackgroundIndex = (currentBackgroundIndex + 1) % animatedBackgroundNames.length;
}, 200);