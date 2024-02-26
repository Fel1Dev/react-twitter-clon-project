import { useState } from 'react';
import History from './History';
import { StyledButton } from '../parentChildComponents/StyledButton';

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
      <StyledButton onClick={handleLeftClick} text="Left"></StyledButton>
      <StyledButton onClick={handleRightClick} text="Right"></StyledButton>
      {right}
      <br></br>
      {"Prueba texto"}
      <p>{allClicks.join(' ')}</p>
      <History allClicks={allClicks}/>
    </div>
  );
};

export default SimplerCounter;
