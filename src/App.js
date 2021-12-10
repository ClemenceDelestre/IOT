import logo from './heartrate.svg';
import './App.css';
import Heartrate from './compenents/Heartrate';
import { useEffect, useState } from 'react';

function App() {
  const [rythCardiaques, setRythCardiaques] = useState([50]);

  useEffect(() => {
    setInterval(() => {
      setRythCardiaques((prev) => {
        return [...prev,  40 + Math.floor(Math.random() * (200 - 40)) ]} 
        );
    }, 3000); //délai d'exécution du callback
  }, []); //UseEffect est appelé que quand le composant est crée

const rythCardiaque = rythCardiaques[rythCardiaques.length - 1 ]; 

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
