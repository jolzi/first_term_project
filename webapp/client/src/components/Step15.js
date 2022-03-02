import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ImageCardInactive from "./ImageCardInactive";
import SpeakWrapper from "./SpeakWrapper";
import SoundFader from "./SoundFader";


const Step15 = (props) => {

    const [friendSrc, setFriendSrc] = useState("/crayonfriend.png");
    const [notFriendSrc, setNotFriendSrc] = useState("/crayonnotfriend.png");

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
            setTimeout(waitForMessage, 1000);
        }
    }, [certainty]);

    const waitForMessage = async () => {
        setFriendSrc("/grayfriend.png");
        setNotFriendSrc("graynotfriend.png");
        
        SoundFader(props.sound2, props.sound3);
        await SpeakWrapper(setUpInterceptionMessage(certainty, classification));
        await SpeakWrapper("Did you know, that robbery is the only category of violent crime consistently committed more often by a stranger rather than by someone known to the victim.")
        props.nextStep();
    };

    const setUpInterceptionMessage = (certainty, classification) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        return 'I am sorry my friend, but I must intercept. ' + classificationMessage;
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


    return <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc={friendSrc} notFriendSrc={notFriendSrc}/>;
};

export default Step15;
