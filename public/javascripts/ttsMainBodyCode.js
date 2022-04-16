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
            if(!flag){
                //so code is not re run if play is clicked multiple times
                flag = true;
                //setup the tts parameters
                //tells tts what to look for (text inside 'article'
                utterance = new SpeechSynthesisUtterance(
                    document.querySelector('article').textContent);
                //first TTS voice
                utterance.voice = synth.getVoices()[0];
                //document done being read
                utterance.onend = function(){
                    flag = false;
                };
                //starts narration
                synth.speak(utterance);
            }
            //if speech was paused
            if(synth.paused) { //unpause/resume narration
                synth.resume();
            }
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