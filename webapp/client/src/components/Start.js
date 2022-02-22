import React, { useState, useEffect, useRef } from "react";


const Start = (props) => {
    

    const NotBecomeFriend = async () => {
        props.nextStep();
    };

    return (
        <div className="App">
            <div id="cardContainer">
                <article id="card">
                   <button id="buttonLayout" onClick={NotBecomeFriend}>Start</button>
                </article>
            </div>
        </div>

    );
};

export default Start;