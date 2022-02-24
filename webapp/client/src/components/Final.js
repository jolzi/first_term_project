import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ImageCardInactive from "./ImageCardInactive";
import Overlay from "./Overlay";
import RecommendCard from "./RecommendCard";
import SpeakWrapper from "./SpeakWrapper";


const Final = (props) => {

    const [classification, setClassification] = useState("");
    const [certainty, setCertainty] = useState("");
    const [tone, setTone] = useState("");
    const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
    const [imgHash, setImgHash] = useState();
    const isInitialMount = useRef(true);

    const [renderComponent, setRenderComponent] = useState(<ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc="/grayfriend.png" notFriendSrc="/graynotfriend.png"/>);

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
        await SpeakWrapper(setUpClassificationMessage(classification));
        displayOverlay();
    };

    const setUpClassificationMessage = (classification) => {

        return `${classification}. `
    };

    const displayOverlay = () => {

       setRenderComponent(  <div>
       <RecommendCard/>
       <Overlay/>
       <ImageCardInactive imgSrc={imgSrc} imgHash={imgHash} friendSrc="/grayfriend.png" notFriendSrc="/graynotfriend.png"/>
       </div> )
    }


    return renderComponent;
};

export default Final;
