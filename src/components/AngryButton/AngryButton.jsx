import { useState } from 'react';

function AngryButton(props) {
  const [anger, setAnger] = useState(0);

  const handleClick = (amount) => {
    if (anger < 1) {
      setAnger(anger + amount)
    } else {
      setAnger(0);
    }
    props.increaseAnger(0.1);
  }
  return (
    <button onClick={() => {handleClick(0.1)}} className="AngryButton" style={{backgroundColor: 
    `rgba(255,0,0,${anger})`}}>
    {anger > 1 ? <span>Rawr!</span> : <span>Don't click me too much! </span>}
  </button>
  );
}

export default AngryButton;