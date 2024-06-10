// LANA B C DE ARAUJO
document.getElementById('playBtn').addEventListener('click', function() {
    document.getElementById('audio').play();
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    document.getElementById('audio').pause();
});

document.getElementById('stopBtn').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
});
