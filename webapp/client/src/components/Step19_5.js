import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ImageCardInactive from "./ImageCardInactive";
import SpeakWrapper from "./SpeakWrapper";


const Step19_5 = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();
    const isInitialMount = useRef(true);

    const [friendSrc, setFriendSrc] = useState("/crayonfriend.png");
    const [notFriendSrc, setNotFriendSrc] = useState("/crayonnotfriend.png");

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
        setFriendSrc("/grayfriend.png");
        setNotFriendSrc("graynotfriend.png");
        
        await SpeakWrapper(setUpClassificationMessage(certainty, classification) + ". Believe me, you don't want to be stabbed in the back by a friend. This is what friends do.", 0.9, 1.0, 0.966);
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


    return <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc={friendSrc} notFriendSrc={notFriendSrc}/>;
};

export default Step19_5;
