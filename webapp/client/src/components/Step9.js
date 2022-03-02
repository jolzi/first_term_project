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
        await SpeakWrapper(setUpFriendMessage(certainty, classification));
        await SpeakWrapper("Is this a trustworthy person? This person wouldn't make a good friend, don't you think? Let's keep going an find some better friends!");
        props.nextStep();
    };

    const NotBecomeFriend = async () => {
        SoundFader(props.sound0, props.sound1);
        await SpeakWrapper(setUpNoFriendMessage(certainty, classification));
        props.nextStep();
    }

    const setUpFriendMessage = (certainty, classification, tone) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        return ('I would advise against befriending this person. '
            + classificationMessage);
    };

    const setUpNoFriendMessage = (certainty, classification, tone) => {
        let classificationMessage = setUpClassificationMessage(certainty, classification);
        return 'You are absolutely right!  ' + classificationMessage + "Not trustworthy. Who needs such a friend? Let's keep going an find some better friends!";
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


        return `This is, ${processedCertainty} ${preposition}, ${classification} person. `
    };


    return <ImageCard imgSrc={imgSrc} imgHash={imgHash} becomeFriend={BecomeFriend} notBecomeFriend={NotBecomeFriend} />;
};

export default Step1;