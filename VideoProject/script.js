const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');

playPauseButton.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});