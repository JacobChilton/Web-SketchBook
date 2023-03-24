const player = document.getElementById("soundPlayer");
const videoPlayer = document.getElementById("videoPlayer");

function playSound() {
    if (player.paused) {
        player.play()
        console.log("play")
    }
    else {
        player.pause()
        console.log("pause")
    }
}

function playVideo() {
    if (videoPlayer.paused) {
        videoPlayer.play()
        console.log("play")
    } else {
        videoPlayer.pause()
        console.log("pause")
    }
}
