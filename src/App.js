import './App.css';
import { useReducer, useState } from 'react';
import AngryButton from '../src/components/AngryButton/AngryButton';
import CounterButton from '../src/components/CounterButton/CounterButton';
import LightSwitchButton from '../src/components/LightSwitchButton/LightSwitchButton';
import TextRepeaterButton from '../src/components/TextRepeaterButton/TextRepeaterButton';


function App() {
  
  const [angryApp, dispatch] = useReducer((angryApp, amount) => {
    return angryApp > 1 ? 0 : angryApp + amount;
  }, 0);

  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';

  const switchLight = () => {
    setLight((light === 'on') ? 'off' : 'on');
  }
  
  return (
    <div className={`App ${dark}`}>
      <h1>{angryApp < 1 ? "Fancy buttons!" : "YOU'RE CLICKING TOO MANY BUTTONS"}</h1>
      <section>
        <AngryButton increaseAnger={dispatch}/>
        <CounterButton increaseAnger={dispatch}/>
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={dispatch}/>
        <TextRepeaterButton increaseAnger={dispatch}/>
      </section>
    </div>
  );
}

export default App;
