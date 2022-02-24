import React, { useState, useEffect } from "react";
import Axios from "axios";


const Start = (props) => {
    const [id, setId] = useState();


    useEffect(() => {
        Axios.get("http://localhost:3001/register").then((response) => {
            //console.log(response);
        })
    }, []);

    const NotBecomeFriend = async () => {
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
                        <button id="startButton" onClick={NotBecomeFriend}>
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