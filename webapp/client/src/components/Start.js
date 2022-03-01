import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Howler } from "howler";


const Start = (props) => {
    const [id, setId] = useState();


    useEffect(() => {
        Axios.get("http://localhost:3001/register").then((response) => {
            //console.log(response);
        })
    }, []);

    const startExperience = async () => {
        props.sound0.play()
        props.sound1.play()
        props.sound2.play()
        props.sound3.play()
        props.sound4.play()

        
        props.nextStep();
    };

    return (
        <div className="App">
            <div id="startContainer">
                <article id="start">
                    <div id="startTextContainer">
                        <text id="startText">Please turn on your sound</text>
                    </div>
                    <div id="startButtonContainer">
                        <button id="startButton" onClick={startExperience}>
                            <span>S</span>
                            <span>t</span>
                            <span>a</span>
                            <span>r</span>
                            <span>t</span>
                        </button>
                    </div>
                </article>
            </div>
        </div>

    );
};

export default Start;