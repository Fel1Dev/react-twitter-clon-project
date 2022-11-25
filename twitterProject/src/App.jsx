import "./App.css";
import { Tweet } from "./components/Tweet";

function App() {
    return (
        <div className="App">
            <Tweet username="JuanDC" name="Juan David">
                <p>Cuerpo del Tweet</p>
            </Tweet>
            <Tweet username="LeoC0de" name="Leonardo esponosa">
                <p>Hola Mundo</p>
                <img src="https://picsum.photos/500" alt="" />
            </Tweet>
            <Tweet username="Fel1Dev" name="Andres Torres">
                <p>Tweet final</p>
                <img src="https://picsum.photos/400" alt="" />
            </Tweet>
        </div>
    );
}

export default App;
