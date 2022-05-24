const boomElem = document.getElementById("boom");
const clapElem = document.getElementById("clap");
const hihatElem = document.getElementById("hihat");
const kickElem = document.getElementById("kick");
const openhatElem = document.getElementById("openhat");
const rideElem = document.getElementById("ride");
const snareElem = document.getElementById("snare");
const tinkElem = document.getElementById("tink");
const tomElem = document.getElementById("tom");
const boomAudio = new Audio("./sounds/boom.wav");
const clapAudio = new Audio("./sounds/clap.wav");
const hihatAudio = new Audio("./sounds/hihat.wav");
const kickAudio = new Audio("./sounds/kick.wav");
const openhatAudio = new Audio("./sounds/openhat.wav");
const rideAudio = new Audio("./sounds/ride.wav");
const snareAudio = new Audio("./sounds/snare.wav");
const tinkAudio = new Audio("./sounds/tink.wav");
const tomAudio = new Audio("./sounds/tom.wav");

const playSound = (audio, element) => {
    animate(element);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};

const animate = (element) => {
    if (!element || !element.style) return;
    element.style.border = "10px solid #2132e4"
    element.style.margin = "10px";
    element.style.background = "radial-gradient(#2132e4, #e66465)";
    setTimeout(() => {
        element.style.border = "none";
        element.style.margin = "20px";
        element.style.background = "radial-gradient(#e66465, #2132e4)";
    }, 100);
}; 

boomElem.addEventListener('click', () => playSound(boomAudio, boomElem));
clapElem.addEventListener('click', () => playSound(clapAudio, clapElem));
hihatElem.addEventListener('click', () => playSound(hihatAudio, hihatElem));
kickElem.addEventListener('click', () => playSound(kickAudio, kickElem));
openhatElem.addEventListener('click', () => playSound(openhatAudio, openhatElem));
rideElem.addEventListener('click', () => playSound(rideAudio, rideElem));
snareElem.addEventListener('click', () => playSound(snareAudio, snareElem));
tinkElem.addEventListener('click', () => playSound(tinkAudio, tinkElem));
tomElem.addEventListener('click', () => playSound(tomAudio, tomElem));

window.addEventListener("keydown", (e) =>{
    switch(e.key) {
        case "1": playSound(boomAudio, boomElem); break;
        case "2": playSound(clapAudio, clapElem); break;
        case "3": playSound(hihatAudio, hihatElem); break;
        case "4": playSound(kickAudio, kickElem); break;
        case "5": playSound(openhatAudio, openhatElem); break;
        case "6": playSound(rideAudio, rideElem); break;
        case "7": playSound(snareAudio, snareElem); break;
        case "8": playSound(tinkAudio, tinkElem); break;
        case "9": playSound(tomAudio, tomElem); break;
        default: return;
    }
});
