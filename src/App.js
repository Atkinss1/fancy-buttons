import './App.css';
import { useState } from 'react';
import AngryButton from '../src/components/AngryButton/AngryButton';
import CounterButton from '../src/components/CounterButton/CounterButton';
import LightSwitchButton from '../src/components/LightSwitchButton/LightSwitchButton';
import TextRepeaterButton from '../src/components/TextRepeaterButton/TextRepeaterButton';


function App() {
    
  const [angryApp, setAngryApp] = useState(0);
  const increaseAnger = (amount) => {
    if (angryApp < 1) {
      setAngryApp(angryApp + amount);
    } else {
      setAngryApp(0);
    }
  }
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';

  const switchLight = () => {
    setLight((light === 'on') ? 'off' : 'on');
    increaseAnger(0.1);
  }
  
  return (
    <div className={`App ${dark}`}>
      <h1>{angryApp < 1 ? "Fancy buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS"}</h1>
      <section>
        <AngryButton increaseAnger={increaseAnger}/>
        <CounterButton increaseAnger={increaseAnger}/>
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={increaseAnger}/>
        <TextRepeaterButton increaseAnger={increaseAnger}/>
      </section>
    </div>
  );
}

export default App;
