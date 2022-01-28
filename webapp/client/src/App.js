import Axios from "axios";
import React, {useState, useEffect } from "react";
import './App.css';


function App() {

  const [classification, setClassification] = useState("");
  const [certainty, setCertainty] = useState("");
  const [imgSrc, setImgSrc] = useState("http://localhost:3001/image");
  const [imgHash, setImgHash] = useState();
  //const { speak } = useSpeechSynthesis();

  useEffect(() => {
    setImgHash(Date.now);
    Axios.get("http://localhost:3001/classification").then((response) => {
      setClassification(response.data.classification);
      setCertainty(response.data.certainty);
    })
  }, []);

  const BecomeFriend = () => {
    setImgHash(Date.now());
    Axios.get("http://localhost:3001/classification").then((response) => {
      setClassification(response.data.classification);
      setCertainty(response.data.certainty);
      console.log(certainty);
    }).then(() => {
        speak(setUpMessage(certainty, classification));
    });
  }

  const NotBecomeFriend = () => {
    setImgHash(Date.now());
    Axios.get("http://localhost:3001/classification").then((response) => {
      setClassification(response.data.classification);
      console.log(classification);
    });
  }

  const setUpMessage = (certainty, classification) => {
    let processedCertainty;
    let lastFour = certainty.slice(-4);
    if(lastFour === '.00%')
    {
      processedCertainty = certainty.substr(0, certainty.indexOf('.')) + '%';
    }
    else
    {
      processedCertainty = certainty;
    }

    let preposition;
    let first = classification.charAt(0);

    if(first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u')
    {
      preposition = "an";
    }
    else
    {
      preposition = "a";
    }

    let msg = `This is, ${processedCertainty} ${preposition} ${classification} person`
    return msg;
  }

  const speak = (message) => {
    var msg = new SpeechSynthesisUtterance();
	  msg.text = message;
	  msg.lang = 'en-UK';
	  msg.volume = 1; // 0 to 1
	  msg.rate = 1.2; // 0.1 to 10
	  msg.pitch = 1; //0 to 2

	  speechSynthesis.speak(msg);  
  }

  return(
    <div id="page" className="App">
      <h1>Friendly Friend Helper</h1>
      <img src={`${imgSrc}?${imgHash}`} width="500" height="500"></img>
      <h1>{classification}</h1>
      <button onClick={BecomeFriend}>Become Friemd</button><button onClick={NotBecomeFriend}>No wanna be Friemd</button>
    </div>
  )

}

export default App;