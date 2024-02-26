import './App.css';
import Message from './componentes/Mensaje';

function BasicComponent() {

  return (
    <div className="App">
      <h1>App title</h1>
      <Message message="Estamos trabajando" color="red" />
      <Message message="con diferentes componentes." color="green" />
    </div>
  );
}

export default BasicComponent;
