import './App.css';
import AngryButton from '../src/components/AngryButton/AngryButton';
import CounterButton from '../src/components/CounterButton/CounterButton';
import LightSwitchButton from '../src/components/LightSwitchButton/LightSwitchButton';
import TextRepeaterButton from '../src/components/TextRepeaterButton/TextRepeaterButton';

function App() {
  return (
    <div className={"App"}>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
