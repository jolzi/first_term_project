import Axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SpeakWrapper from "./SpeakWrapper";
import SoundFader from "./SoundFader";


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
        SoundFader(props.sound0, props.sound1);
        await SpeakWrapper(setUpFriendMessage(certainty, classification, tone));
        props.nextStep();
    };

    const NotBecomeFriend = async () => {
        await SpeakWrapper(setUpNoFriendMessage(certainty, classification, tone));
        props.nextStep();
    }

    const setUpFriendMessage = (certainty, classification, tone) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        if (tone === 'negative') {
            return 'Poor choice. ' + classificationMessage;
        }
        else {
            return 'Good choice. ' + classificationMessage;
        }
    };

    const setUpNoFriendMessage = (certainty, classification, tone) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        if (tone === 'positive') {
            return 'You are missing out. ' + classificationMessage;
        }
        else {
            return 'Good choice. ' + classificationMessage + '. Try to avoid at all costs.'
        }
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


    return <ImageCard imgSrc={imgSrc} imgHash={imgHash} becomeFriend={BecomeFriend} notBecomeFriend={NotBecomeFriend}/>;
};

export default Step1;