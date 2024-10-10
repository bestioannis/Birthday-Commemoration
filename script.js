// 控制背景音樂播放和暫停
function playPauseBGM() {
    var bgm = document.getElementById('bgm');
    if (bgm.paused) {
        bgm.play();
    } else {
        bgm.pause();
    }
}
