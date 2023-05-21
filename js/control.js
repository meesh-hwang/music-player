// Variables
var music= document.getElementById("audio");
var volVal = document.getElementById('volume');
var list = document.getElementById('songList');
 
// Play and Pause Button  
function playAudio() {
    if(music.paused) {
        music.play();
        playButton.className = "pause";
    } else {
        music.pause();
        playButton.className="play";
    }
}

// Volume Adjustment
function setVolume(volume) {
    music.volume= volume;
}

// Volume Mute
function setVolumeNone() {
    if(music.volume > 0) {
        music.volume = 0;
        volVal.value = 0;
    } else {
        music.volume = 1;
        volVal.value = 1;

    }
}

// Track Selection
list.onclick = function(e) {
    e.preventDefault();

    var elm= e.target;

    var source= document.getElementById('audioSource');

    source.src = elm.getAttribute('data-track');

    music.load();

    playAudio();
}
