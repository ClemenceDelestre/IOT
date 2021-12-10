import logo from './heartrate.svg';
import './App.css';
import Heartrate from './components/Heartrate';
import Graphique from './components/Graphique';
import { useEffect, useState } from 'react';

function App() {
  const [rythCardiaques, setRythCardiaques] = useState([]);

  useEffect(() => {
    setInterval(() => {
      const rythCardiaque = {
        timestamp: new Date().getTime(),
        heartrate: 40 + Math.floor(Math.random() * (200 - 40)),
      };
      setRythCardiaques((prev) => [...prev, rythCardiaque]);
    }, 3000); //délai d'exécution du callback
  }, []); //UseEffect est appelé que quand le composant est crée
  let rythCardiaque = rythCardiaques[rythCardiaques.length - 1];
  if (rythCardiaque == null) {
    rythCardiaque = [];
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Les battements du coeur en temps réel</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Heartrate data={rythCardiaque.heartrate} />
        <Graphique data={rythCardiaques} />
      </header>
    </div>
  );
}

export default App;
