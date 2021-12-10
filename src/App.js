import logo from './heartrate.svg';
import './App.css';
import Heartrate from './compenents/Heartrate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Les battements du coeur en temps réel</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Heartrate />
      </header>
    </div>
  );
}

export default App;
