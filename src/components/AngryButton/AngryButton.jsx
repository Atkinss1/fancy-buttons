import { useState } from 'react';

function AngryButton(props) {
  const [anger, setAnger] = useState(0);

  const increaseAnger = () => {
    if (anger >= 1) {
      anger = anger + 0.1
    } else {
      setAnger(0);
    }
  }
  return (
    <button className="AngryButton" style={{backgroundColor: 
    `rgba(255,0,0,${anger})`}}>
    {anger > 1 ? <span>Rawr!</span> : <span>Don't click me too much! </span>}
  </button>
  );
}

export default AngryButton;