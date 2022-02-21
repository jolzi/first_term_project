const SpeakWrapper = async (message) => {
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

    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2

    await new Promise(function (resolve) {
        console.log(msg.text);
        msg.onend = resolve;
        speechSynthesis.speak(msg);
    });
};

export default SpeakWrapper;