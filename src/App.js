

import React, { useState } from 'react';
import MatchOrganizer from './MatchOrganizer';
import MatchResultsInput from './MatchResultsInput';
import FinalResults from './FinalResults';
import PartialResults from './PartialResults';

const PlayerInput = ({ setPlayers }) => {
  const [name, setName] = useState('');

  const addPlayer = () => {
    setPlayers(prevPlayers => [...prevPlayers, name]);
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addPlayer}>Agregar jugador</button>
    </div>
  );
};

const App = () => {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [playerScores, setPlayerScores] = useState({});

  const updatePlayerScores = (matchResult, matchPlayers) => {
    setPlayerScores((prevScores) => {
      const newScores = { ...prevScores };
  
      // Actualizar los puntajes del equipo 1
      newScores[matchPlayers[0]] = (newScores[matchPlayers[0]] || 0) + parseInt(matchResult.team1, 10);
      newScores[matchPlayers[1]] = (newScores[matchPlayers[1]] || 0) + parseInt(matchResult.team1, 10);
  
      // Actualizar los puntajes del equipo 2
      newScores[matchPlayers[2]] = (newScores[matchPlayers[2]] || 0) + parseInt(matchResult.team2, 10);
      newScores[matchPlayers[3]] = (newScores[matchPlayers[3]] || 0) + parseInt(matchResult.team2, 10);
  
      // Actualizar los puntajes de los partidos para cada jugador
      for (let i = 1; i <= 7; i++) {
        const key1 = `${matchPlayers[0]}-partido${i}`;
        const key2 = `${matchPlayers[1]}-partido${i}`;
        const key3 = `${matchPlayers[2]}-partido${i}`;
        const key4 = `${matchPlayers[3]}-partido${i}`;
  
        // Crear objetos para almacenar los resultados parciales de cada jugador
        newScores[key1] = newScores[key1] || { total: 0 };
        newScores[key2] = newScores[key2] || { total: 0 };
        newScores[key3] = newScores[key3] || { total: 0 };
        newScores[key4] = newScores[key4] || { total: 0 };
  
        // Actualizar los resultados parciales para cada jugador en cada partido
        newScores[key1][`partido${i}`] = (newScores[key1][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
        newScores[key2][`partido${i}`] = (newScores[key2][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
        newScores[key3][`partido${i}`] = (newScores[key3][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));
        newScores[key4][`partido${i}`] = (newScores[key4][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));
        
        // Actualizar los totales para cada jugador
        newScores[key1].total += (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
        newScores[key2].total += (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
        newScores[key3].total += (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));
        newScores[key4].total += (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));
      }
  
      return newScores;
    });
  };
  
  
  

  return (
    <div>
      <h1>Organizador de partidos de pádel</h1>
      <PlayerInput setPlayers={setPlayers} />
      <MatchOrganizer players={players} setMatches={setMatches} matches={matches} />
      <MatchResultsInput
        organizedMatches={matches}
        updatePlayerScores={updatePlayerScores}
        // playerScores={playerScores}
      />
      <PartialResults playerScores={playerScores} />
      <FinalResults playerScores={playerScores} />
    </div>
  );
};

export default App;
