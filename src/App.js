import logo from './heartrate.svg';
import './App.css';
import Heartrate from './compenents/Heartrate';
import { useEffect } from 'react';

function App() {
  let rythmeCardiaque = 0; 
  
  useEffect(() => {
    setInterval(() => {
      rythmeCardiaque = 40 + Math.floor(Math.random() * (200 - 40));
    }, 4000); //délai d'exécution du callback
  },[]) //UseEffect est appelé que quand le composant est crée

  return (
    <div className="App">
      <header className="App-header">
        <p>Les battements du coeur en temps réel</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Heartrate data={rythmeCardiaque} />
      </header>
    </div>
  );
}

export default App;
