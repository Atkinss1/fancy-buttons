import './App.css';
import { useState } from 'react';
import AngryButton from '../src/components/AngryButton/AngryButton';
import CounterButton from '../src/components/CounterButton/CounterButton';
import LightSwitchButton from '../src/components/LightSwitchButton/LightSwitchButton';
import TextRepeaterButton from '../src/components/TextRepeaterButton/TextRepeaterButton';


function App() {

    const [light, setLight] = useState('off');
    const dark = (light === 'off') ? 'dark' : '';

    const switchLight = () => {
      setLight((light === 'on') ? 'off' : 'on');
    }
  
    return (
    <div className={`App ${dark}`}>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
