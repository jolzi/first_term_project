import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ImageCardInactive from "./ImageCardInactive";
import SpeakWrapper from "./SpeakWrapper";
import Overlay from "./Overlay";
import RecommendCard from "./RecommendCard";
import SoundFader from "./SoundFader";


const Step19_8 = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();
    const isInitialMount = useRef(true);

    const [recommendCard, setRecommendCard] = useState("recommendCard hide");
    const [overlay, setOverlay] = useState("overlay hide");

    let pitch = 0.8;
    let volume = 1.1;
    let rate = 1.0;

    useEffect(async () => {
        setImgHash(Date.now);

        Axios.get("http://localhost:3001/classification").then((response) => {
            setClassification(response.data.classification);
            setCertainty(response.data.certainty);
            setTone(response.data.tone);
        })
    }, []);

    useEffect(async () => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            setTimeout(waitForMessage, 50);
        }
    }, [certainty]);

    const waitForMessage = async () => {
        await SpeakWrapper(setUpClassificationMessage(certainty, classification), pitch, volume, 0.866);
        setTimeout(displayOverlay, 3000);

        /*
        while (volume > 0.01)
        {
            volume -= volume * 0.45;
            if(rate >= 0.1) rate -= 0.1;
            await SpeakWrapper("Can You?", pitch, volume, rate);
            console.log('Volume: ' + volume + ', Pitch: ' + pitch + ', Rate: ' + rate);
            pitch += 0.3;
            if(pitch > 1.0) pitch = 1.0;
        }
        */
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


        return `This is, ${preposition} ${classification} person. 77 percent of murders are committed by friends. You can't be willing to take this risk, can you?`
    };

    const displayOverlay = () => {

      setRecommendCard("recommendCard");
      setOverlay("overlay");
    };

    return (<div>
        <RecommendCard className={recommendCard} />
        <Overlay className={overlay} />
        <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc="/grayfriend.png" notFriendSrc="/graynotfriend.png" />
    </div>);
};

export default Step19_8;
