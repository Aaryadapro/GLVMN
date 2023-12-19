song ="";

function preload(){
    song = loadSound("music.mp3");
   
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}