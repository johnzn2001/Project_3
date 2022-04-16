// This code is for the Web Speech JavaScript API
// This allows for Text-to-Speech functionality
onload = function () {
    var synth = speechSynthesis;
    synth.cancel();
    if ('speechSynthesis' in window){
        //tts is supported
        var synth = speechSynthesis;
        var flag = false;
        var pauseflag = false;
        var stopflag = false;

        /* references to the buttons */
        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');

        /* click event handlers for the buttons */
        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);

        playEle.className = '';
        stopEle.className = '';
        pauseEle.className = '';

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
                    playEle.className = pauseEle.className = '';
                    stopEle.className = 'stopped';
                };
                //starts narration
                playEle.className = 'played';
                stopEle.className = '';
                synth.speak(utterance);
            }
            //if speech was paused
            if(synth.paused) { //unpause/resume narration
                playEle.className = 'played';
                stopEle.className = '';
                pauseEle.className = '';
                synth.resume();
            }
        }

        function onClickPause() {
            if (synth.speaking && !synth.paused) { /* pause narration */
                pauseEle.className = 'paused';
                playEle.className = '';
                synth.pause();
            }
        }

        function onClickStop() {
            if (synth.speaking) { /* stop narration */
                stopEle.className = 'stopped';
                playEle.className = pauseEle.className = '';
                /* for safari */
                flag = false;

                synth.cancel();
            }
        }
    }
    else {
        //not supported
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }
}