import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ImageCardInactive from "./ImageCardInactive";
import Overlay from "./Overlay";
import RecommendCard from "./RecommendCard";
import SpeakWrapper from "./SpeakWrapper";


const Final = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();
    const isInitialMount = useRef(true);
    
    let pitch = 1.0;
    let volume = 1.1;

    const [renderComponent, setRenderComponent] = useState(<div>
        <RecommendCard className="recommendCard hide" />
        <Overlay className="overlay hide" />
        <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc="/grayfriend.png" notFriendSrc="/graynotfriend.png" />
    </div>);

    useEffect(async () => {
        setImgHash(Date.now);
        Axios.get("http://localhost:3001/classification").then((response) => {
            setClassification(response.data.classification);
            setCertainty(response.data.certainty);
            setTone(response.data.tone);
            displayOverlay();
        })
    }, []);

    const Loop = () => {
        useEffect(async () => {
            if (isInitialMount.current) {
                isInitialMount.current = false;
            } else {
                if (volume > 0.0) await WaitForMessage();
            }
        }, [certainty]);
    }

    Loop();

    const WaitForMessage = async () => {
        volume -= volume * 0.45;
        console.log(volume);
        await finalSpeakWrapper("Can You?");
        pitch -= volume * 0.45;
        if (volume > 0.0) await WaitForMessage();
    };


    const setUpClassificationMessage = (classification) => {

        return `${classification}. `
    };

    const displayOverlay = () => {

        setRenderComponent(<div>
            <RecommendCard className="recommendCard" />
            <Overlay className="overlay" />
            <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc="/grayfriend.png" notFriendSrc="/graynotfriend.png" />
        </div>)
    };

    const finalSpeakWrapper = async (message) => {
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
        ).then((voices) => msg.voice = voices.filter(function (voice) { return voice.name == 'Google US English'; })[0]);

        msg.volume = volume; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = pitch; //0 to 2

        await new Promise(function (resolve) {
            //console.log(msg.text);
            msg.onend = resolve;
            speechSynthesis.speak(msg);
        });
    };


    return renderComponent;
};

export default Final;
