import logo from './heartrate.svg';
import './App.css';
import Heartrate from './compenents/Heartrate';
import { useEffect, useState } from 'react';

function App() {
  const [rythCardiaque, setRythCardiaque] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setRythCardiaque(40 + Math.floor(Math.random() * (200 - 40)));
    }, 4000); //délai d'exécution du callback
  }, []); //UseEffect est appelé que quand le composant est crée

  return (
    <div className="App">
      <header className="App-header">
        <p>Les battements du coeur en temps réel</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Heartrate data={rythCardiaque} />
      </header>
    </div>
  );
}

export default App;
