import './AppDesktop.css';
import './AppHandheld.css'
import StepWizard from "react-step-wizard";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import Step7 from "./components/Step7";
import Step8 from "./components/Step8";
import Step9 from "./components/Step9";
import Step10 from "./components/Step10";
import Step11 from "./components/Step11";
import Step12 from "./components/Step12";
import Step13 from "./components/Step13";
import Step14 from "./components/Step14";
import Step15 from "./components/Step15";
import Step16 from "./components/Step16";
import Step17 from "./components/Step17";
import Step18 from "./components/Step18";
import Step19_0 from "./components/Step19_0";
import Step19_1 from "./components/Step19_1";
import Step19_2 from "./components/Step19_2";
import Step19_3 from "./components/Step19_3";
import Step19_4 from "./components/Step19_4";
import Step19_5 from "./components/Step19_5";
import Step19_6 from "./components/Step19_6";
import Step19_7 from "./components/Step19_7";
import Step19_8 from "./components/Step19_8";
import Header from './components/Header';
import Background from './components/Background';
import Onboarding from './components/Onboarding';
import Start from './components/Start';
import Final from './components/Final';
import {Howl, Howler} from 'howler';



function App() {

    document.title = "Friendly Friend Helper";

    const sound0 = new Howl({
      src: ['/sounds/soundtrack0.mp3'],
      loop: true,
      volume: 0.05
    });

    const sound1 = new Howl({
      src: ['/sounds/soundtrack1.mp3'],
      loop: true,
      volume: 0.0
    });

    const sound2 = new Howl({
      src: ['/sounds/soundtrack2.mp3'],
      loop: true,
      volume: 0.0
    });

    const sound3 = new Howl({
      src: ['/sounds/soundtrack3.mp3'],
      loop: true,
      volume: 0.0
    });

    const sound4 = new Howl({
      src: ['/sounds/soundtrack4.mp3'],
      loop: true,
      volume: 0.0
    });


  return (

    <div className="App">
      <Header />
      <StepWizard isLazyMount={true}>
        <Start sound0={sound0} sound1={sound1} sound2={sound2} sound3={sound3} sound4={sound4}/>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6/>
        <Step7 />
        <Step8 />
        <Step9 sound0={sound0} sound1={sound1}/>
        <Step10 />
        <Step11 />
        <Step12 sound1={sound1} sound2={sound2}/>
        <Step13 />
        <Step14 />
        <Step15 sound2={sound2} sound3={sound3}/>
        <Step16 />
        <Step17 />
        <Step18 sound3={sound3} sound4={sound4}/>
        <Step19_0 />
        <Step19_1 />
        <Step19_2 />
        <Step19_3 />
        <Step19_4 />
        <Step19_5 />
        <Step19_6 />
        <Step19_7 />
        <Step19_8 />
        <Final />

        <Onboarding />
      </StepWizard>

      <Background />

    </div>
  );


}

export default App;