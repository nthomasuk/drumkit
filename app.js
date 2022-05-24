const boomElem = document.getElementById("boom");
const clapElem = document.getElementById("clap");
const hihatElem = document.getElementById("hihat");
const kickElem = document.getElementById("kick");
const openhatElem = document.getElementById("openhat");
const rideElem = document.getElementById("ride");
const snareElem = document.getElementById("snare");
const tinkElem = document.getElementById("tink");
const tomElem = document.getElementById("tom");
const boomAudio = new Audio("/sounds/boom.wav");
const clapAudio = new Audio("/sounds/clap.wav");
const hihatAudio = new Audio("/sounds/hihat.wav");
const kickAudio = new Audio("/sounds/kick.wav");
const openhatAudio = new Audio("/sounds/openhat.wav");
const rideAudio = new Audio("/sounds/ride.wav");
const snareAudio = new Audio("/sounds/snare.wav");
const tinkAudio = new Audio("/sounds/tink.wav");
const tomAudio = new Audio("/sounds/tom.wav");

boomElem.addEventListener('click', () => {
    boomAudio.pause();
    boomAudio.currentTime = 0;
    boomAudio.play();
})

clapElem.addEventListener('click', () => {
    clapAudio.pause();
    clapAudio.currentTime = 0;
    clapAudio.play();
})

hihatElem.addEventListener('click', () => {
    hihatAudio.pause();
    hihatAudio.currentTime = 0;
    hihatAudio.play();
})

kickElem.addEventListener('click', () => {
    kickAudio.pause();
    kickAudio.currentTime = 0;
    kickAudio.play();
})

openhatElem.addEventListener('click', () => {
    openhatAudio.pause();
    openhatAudio.currentTime = 0;
    openhatAudio.play();
})

rideElem.addEventListener('click', () => {
    rideAudio.pause();
    rideAudio.currentTime = 0;
    rideAudio.play();
})

snareElem.addEventListener('click', () => {
    snareAudio.pause();
    snareAudio.currentTime = 0;
    snareAudio.play();
})

tinkElem.addEventListener('click', () => {
    tinkAudio.pause();
    tinkAudio.currentTime = 0;
    tinkAudio.play();
})

tomElem.addEventListener('click', () => {
    tomAudio.pause();
    tomAudio.currentTime = 0;
    tomAudio.play();
})

window.addEventListener("keydown", (e) =>{
    if(e.key == "1") {
        boomAudio.pause();
        boomAudio.currentTime = 0;
        boomAudio.play();
    } else if(e.key == "2") {
        clapAudio.pause();
        clapAudio.currentTime = 0;
        clapAudio.play();
    } else if(e.key == "3") {
        hihatAudio.pause();
        hihatAudio.currentTime = 0;
        hihatAudio.play();
    } else if(e.key == "4") {
        kickAudio.pause();
        kickAudio.currentTime = 0;
        kickAudio.play();
    } else if(e.key == "5") {
        openhatAudio.pause();
        openhatAudio.currentTime = 0;
        openhatAudio.play();
    } else if(e.key == "6") {
        rideAudio.pause();
        rideAudio.currentTime = 0;
        rideAudio.play();
    } else if(e.key == "7") {
        snareAudio.pause();
        snareAudio.currentTime = 0;
        snareAudio.play();
    } else if(e.key == "8") {
        tinkAudio.pause();
        tinkAudio.currentTime = 0;
        tinkAudio.play();
    } else if(e.key == "9") {
        tomAudio.pause();
        tomAudio.currentTime = 0;
        tomAudio.play();
    }
})
