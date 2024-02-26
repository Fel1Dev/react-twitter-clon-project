
const History = (props) => {
  return (
    <div>
      {props.allClicks.length === 0 
        ? 'The app is used by pressing the buttons'
        : 'Button press history: ' + props.allClicks.join(' ')}
    </div>
  );
};

export default History;