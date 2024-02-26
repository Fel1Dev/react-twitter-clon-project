import { useState } from 'react';
import History from './History';

const SimplerCounter = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updated = left + 1;
    setLeft(updated);
    setTotal(updated + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updated = right + 1;
    setRight(updated);
    setTotal(left + updated);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <br></br>
      {"Prueba texto"}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks}/>
    </div>
  );
};

export default SimplerCounter;
