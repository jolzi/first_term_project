const SpeakWrapper = async (message, pitch=1, volume=1, rate=1) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = message;

    await new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 10);
        }
    ).then((voices) =>  msg.voice = voices.filter(function(voice) { return voice.name == 'Google US English'; })[0]);

    msg.volume = volume; // 0 to 1
    msg.rate = rate; // 0.1 to 10
    msg.pitch = pitch; //0 to 2

    console.log(pitch);

    await new Promise(function (resolve) {
        //console.log(msg.text);
        msg.onend = resolve;
        speechSynthesis.speak(msg);
    });
};

export default SpeakWrapper;