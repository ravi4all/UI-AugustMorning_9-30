window.addEventListener("load", init);

var audio;
var songArray;
var songDuration;
var slider;
function init(){
    audio = document.getElementById("audio");
    songArray = document.getElementsByTagName("a");
    songDuration = document.getElementById("endTime");
    slider = document.getElementById("slider");
    slider.addEventListener("change", seekSong);
    document.getElementById("playSong").addEventListener("click", resumeSong);
    document.getElementById("pauseSong").addEventListener("click", pauseSong);
    for(var i =0 ; i<songArray.length; i++){
        songArray[i].addEventListener("click", playSong);
    }
}

function playSong(){
    var songName = event.srcElement.innerHTML;
    audio.src = "songs/"+songName.trim()+".mp3";
    audio.play();
    setInterval(moveSlider, 1000);
}

function resumeSong(){
    audio.play();
}

function pauseSong(){
    audio.pause();
}

function moveSlider(){
    slider.value = audio.currentTime;
    songDuration.innerHTML = (audio.duration/60).toFixed(2);
}

function seekSong(){
    audio.currentTime = slider.value;
}