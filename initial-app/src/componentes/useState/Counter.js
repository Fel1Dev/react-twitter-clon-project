import { useState } from 'react';
import Display from '../parentChildComponents/Display';
import Button from '../parentChildComponents/Button';

const Counter = () => {
  const [counter, setCounter] = useState(100);
  console.log('rendering with counter value', counter);

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log('resetting to zero, value before', counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default Counter;
