import Axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react";
import ImageCard from "./ImageCard";
import OnboardingCard from "./OnboardingCard";
import SpeakWrapper from "./SpeakWrapper";

const Onboarding = (props) => {
    const [helper, setHelper] = useState();
    const [friendOpacity, setFriendOpacity] = useState(1.0);
    const [notFriendOpacity, setNotFriendOpacity] = useState(1.0);
    const isInitialMount = useRef(true);

    const greetingMessageHTML = <div>

        Hello Friend! <br />
        I assume you approached our service because you just keep making the wrong friends? You are in luck . <br />
        I am the Friendly Friend Helper, a state-of-the art neural network . <br />
        From the image of a potential friend, I am able to assign this person to one of 129 categories. Learn from me, and you will never have to worry about having made the wrong friendship decision again.

    </div>;

    const greetingMessage1 = "Hello Friend! I assume you approached our service because you just keep making the wrong friends? You are in luck . I am the Friendly Friend Helper, a state-of-the art neural network"
    const greetingMessage2 = "From the image of a potential friend, I am able to assign this person to one of 129 categories. Learn from me, and you will never have to worry about having made the wrong friendship decision again"
    const greetingMessage3 = "Press the red button to not become friends with the portrayed person"
    const greetingMessage4 = "Press the green button to become friends with the portrayed person"
    const greetingMessage5 = "Press one of the buttons now to start your training."

    const greetingSequence = async () => {
        //console.log(greetingMessage);

        await SpeakWrapper(greetingMessage1);
        await SpeakWrapper(greetingMessage2);
        setNotFriendOpacity(0.7);
        await SpeakWrapper(greetingMessage3);
        setNotFriendOpacity(1.0);
        setFriendOpacity(0.7);
        await SpeakWrapper(greetingMessage4);
        setFriendOpacity(1.0);
        await SpeakWrapper(greetingMessage5);
    };

    useEffect(async () => {
        setHelper(true);
    }, []);

    useEffect(async () => {

        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            greetingSequence();
        }
    }, [helper]);


    const BecomeFriend = async () => {

        await SpeakWrapper("friend");
        props.nextStep();
    };

    const NotBecomeFriend = async () => {
        await SpeakWrapper("not a friend");
        props.nextStep();
    };

    return <OnboardingCard greetingText={greetingMessageHTML} becomeFriend={BecomeFriend} notBecomeFriend={NotBecomeFriend} friendOpacity={friendOpacity} notFriendOpacity={notFriendOpacity}/>;
};

export default Onboarding;