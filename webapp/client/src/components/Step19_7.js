import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ImageCardInactive from "./ImageCardInactive";
import SpeakWrapper from "./SpeakWrapper";


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
            setTimeout(waitForMessage, 100);
        }
    }, [certainty]);

    const waitForMessage = async () => {
        await SpeakWrapper(setUpClassificationMessage(certainty, classification), 0.5);
        props.nextStep();
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


        return `This is, ${preposition} ${classification} person`
    };



    return <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc="/grayfriend.png" notFriendSrc="/graynotfriend.png"/>;
};

export default Step19_7;
