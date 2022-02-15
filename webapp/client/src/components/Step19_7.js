import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ImageCardInactive from "./ImageCardInactive";


const Step19_7 = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();
    const isInitialMount = useRef(true);

    useEffect(async () => {
        setImgHash(Date.now);
        Axios.get("http://localhost:3001/classification").then((response) => {
            setClassification(response.data.classification);
            setCertainty(response.data.certainty);
            setTone(response.data.tone);
        })
    }, []);

    useEffect(async () => 
    { 
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            setTimeout(waitForMessage, 200);
        }
    }, [certainty]);

    const waitForMessage = async () => {
        await speakWrapper(setUpClassificationMessage(classification));
        props.nextStep();
    };

    const setUpClassificationMessage = (classification) => {

        return `${classification}. `
    };

    const speakWrapper = async (message) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = message;

        msg.lang = 'en-US';
        msg.volume = 1; // 0 to 1
        msg.rate = 1.2; // 0.1 to 10
        msg.pitch = 1; //0 to 2

        await new Promise(function (resolve) {
            msg.onend = resolve;
            speechSynthesis.speak(msg);
        });
    };


    return <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc="/grayfriend.png" notFriendSrc="/graynotfriend.png"/>;
};

export default Step19_7;
