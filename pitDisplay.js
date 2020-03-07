var index = -1;

// progress bar
var progressUpdateInterval = 1000;
var cycleProgress = document.getElementById("cycleProgress");
cycleProgress.value = 0;
cycleProgress.max = images.length;
document.getElementById("progressSizing").innerHTML = "#cycleProgress[value]::-webkit-progress-bar, #cycleProgress[value]::-webkit-progress-value { background-size: " + (window.innerWidth / images.length) + "px; }";

function showNextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById("imageContainer").style.backgroundImage = "url(\"" + images[index].src + "\")";
    cycleProgress.value = index + 1;
}

function showNextImageRAF() {
    window.requestAnimationFrame(showNextImage);
}

showNextImageRAF();

setInterval(showNextImageRAF, imageDuration);
