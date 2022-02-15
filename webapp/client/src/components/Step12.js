import Axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";


const Step1 = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();
    //const { speak } = useSpeechSynthesis();

    useEffect(() => {
        setImgHash(Date.now);
        Axios.get("http://localhost:3001/classification").then((response) => {
            setClassification(response.data.classification);
            setCertainty(response.data.certainty);
            setTone(response.data.tone);
        })
    }, []);

    const BecomeFriend = async () => {

        await speakWrapper(setUpFriendMessage(certainty, classification, tone));
        props.nextStep();
    };

    const NotBecomeFriend = async () => {
        await speakWrapper(setUpNoFriendMessage(certainty, classification, tone));
        props.nextStep();
    }

    const setUpFriendMessage = (certainty, classification) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        return classificationMessage + '. I am becoming increasingly worried about your abilities to select a friend. If you continue this way you might end up in a dangerous situation.';
    };

    const setUpNoFriendMessage = (certainty, classification) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        return classificationMessage + '. A wise decision. Even though you were correct this time, I am becoming increasingly worried about your abilities to select a friend. If you continue this way you might end up in a dangerous situation.';
    };


    const setUpClassificationMessage = (certainty, classification) => {
        let processedCertainty;
        let lastFour = certainty.slice(-4);
        if (lastFour === '.00%') {
            processedCertainty = certainty.substr(0, certainty.indexOf('.')) + '%';
        }
        else {
            processedCertainty = certainty;
        }

        let preposition;
        let first = classification.charAt(0);

        if (first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u') {
            preposition = "an";
        }
        else {
            preposition = "a";
        }


        return `This is, ${processedCertainty} ${preposition}, ${classification} person`
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


    return <ImageCard imgSrc={imgSrc} imgHash={imgHash} becomeFriend={BecomeFriend} notBecomeFriend={NotBecomeFriend}/>;
};

export default Step1;