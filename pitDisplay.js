var imageDuration = 8000; // in ms
var index = -1;

function showNextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById("imageContainer").style.backgroundImage = "url(\"" + images[index].src + "\")";
}

function showNextImageRAF() {
    window.requestAnimationFrame(showNextImage);
}

showNextImageRAF();

setInterval(showNextImageRAF, imageDuration);

// progress bar
var progressUpdateInterval = 1000;
var cycleProgress = document.getElementById("cycleProgress");
cycleProgress.value = 0;
cycleProgress.max = images.length * imageDuration;
document.getElementById("progressSizing").innerHTML = "#cycleProgress[value]::-webkit-progress-bar, #cycleProgress[value]::-webkit-progress-value { background-size: " + (window.innerWidth / images.length) + "px; }";

function updateProgress() {
    var newValue = parseInt(cycleProgress.value) + progressUpdateInterval;
    if (newValue > cycleProgress.max) {
        newValue = 0;
    }
    cycleProgress.value = newValue;
}

function updateProgressRAF() {
    window.requestAnimationFrame(updateProgress);
}

setInterval(updateProgressRAF, progressUpdateInterval);
