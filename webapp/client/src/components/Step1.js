import Axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SpeakWrapper from "./SpeakWrapper";
import FlavorGenerator from "./FlavorGenerator";


const Step1 = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();
    const flavorGenerator = new FlavorGenerator();

    useEffect(() => {
        setImgHash(Date.now);
        Axios.get("http://localhost:3001/classification").then((response) => {
            setClassification(response.data.classification);
            setCertainty(response.data.certainty);
            setTone(response.data.tone);
        })
    }, []);

    const BecomeFriend = async () => {
        await SpeakWrapper(flavorGenerator.setUpClassificationMessage(certainty, classification));
        props.nextStep();
    };

    const NotBecomeFriend = async () => {
        await SpeakWrapper(flavorGenerator.setUpClassificationMessage(certainty, classification));
        props.nextStep();
    };

    return <ImageCard imgSrc={imgSrc} imgHash={imgHash} becomeFriend={BecomeFriend} notBecomeFriend={NotBecomeFriend}/>;
};

export default Step1;
