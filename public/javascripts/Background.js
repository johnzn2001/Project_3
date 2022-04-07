var tag = document.createElement('script');
tag.id = 'bgvideo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('background-iframe', {
        playerVars: { 'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'playsinline': 1,
            'modestbranding': 1,
            'fs': 0,
            'disablekb': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.isMuted(true);
    event.target.seekTo(1.8);
    event.target.playVideo();
}

function onPlayerError(event) {
    alert('Inside error function');
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 109000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
    done = false;
    player.isMuted(true);
    player.playVideo();
}

window.onload = function() {
    stopVideo();
}