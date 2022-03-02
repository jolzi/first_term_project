import Axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SpeakWrapper from "./SpeakWrapper";


const Step3 = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();

    useEffect(() => {
        setImgHash(Date.now);
        Axios.get("http://localhost:3001/classification").then((response) => {
            setClassification(response.data.classification);
            setCertainty(response.data.certainty);
            setTone(response.data.tone);
        })
    }, []);

    const BecomeFriend = async () => {
        await SpeakWrapper(setUpFriendMessage(certainty, classification));
        await SpeakWrapper("Friends are great, don't you think? You meet a stranger, grow to trust this person and at some point you share your most intimate thoughts with someone who used to be a stranger. You would not believe the statistics on betrayal among friends!");
        props.nextStep();
    };

    const NotBecomeFriend = async () => {
        await SpeakWrapper(setUpNoFriendMessage(certainty, classification));
        props.nextStep();
    }

    const setUpFriendMessage = (certainty, classification, tone) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        return (classificationMessage);
    };

    const setUpNoFriendMessage = (certainty, classification, tone) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        return 'I understand your decision, even though ' + classificationMessage + ". Trusting someone can be hard. You wouldn't believe the statistics on how many friends betray their friends!";
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

export default Step3;
