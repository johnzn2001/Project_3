// This code is for the Web Speech JavaScript API
// This allows for Text-to-Speech functionality
onload = function () {
    if ('speechSynthesis' in window){
        //tts is supported
        var synth = speechSynthesis;
        var flag = false;

        /* references to the buttons */
        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');

        /* click event handlers for the buttons */
        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

        function onClickPlay() {
        }
        function onClickPause() {
        }
        function onClickStop() {
        }
    }
    else {
        //not supported
    }
}