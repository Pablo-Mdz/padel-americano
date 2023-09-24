// import React, { useState } from 'react';
// import MatchOrganizer from './MatchOrganizer';
// import MatchResultsInput from './MatchResultsInput';
// import FinalResults from './FinalResults';
// import PartialResults from './PartialResults';



// const PlayerInput = ({ setPlayers }) => {
//     const [name, setName] = useState('');

//     const addPlayer = () => {
//         setPlayers(prevPlayers => [...prevPlayers, name]);
//         console.log("name:", name)
//         setName('');
//     };
    
//     return (
//         <div>
//             <input type="text" value={name} onChange={e => setName(e.target.value)} />
//             <button onClick={addPlayer}>Agregar jugador</button>
//         </div>
//     );
// };

// const App = () => {
//     const [players, setPlayers] = useState([]);
//     const [matches, setMatches] = useState([]);
//     const [playerScores, setPlayerScores] = useState({});
//     const [partialResults, setPartialResults] = useState({});
//     const [currentMatchIndex, setCurrentMatchIndex] = useState(0); // Inicialmente, el primer partido
//     const [matchResult, setMatchResult] = useState({ team1: '', team2: '' });
//     const [matchPlayers, setMatchPlayers] = useState({ p1: '', p2: '', p3: '', p4: '' });
    
    
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
        
        
//         // Actualizar los resultados parciales para el partido actual
//         const currentPartialResults = {};
//         const matchIndex = currentMatchIndex + 1; // Índice del partido actual
//         // Calcula los resultados parciales para cada jugador en el partido actual y guárdalos en currentPartialResults
        
//         // Actualiza el estado de resultados parciales
//         setPartialResults({ ...partialResults, [matchIndex]: currentPartialResults });
        
//         // Avanza al siguiente partido
//         setCurrentMatchIndex(currentMatchIndex + 1);
        
//         // Limpia el formulario de resultados del partido
//         setMatchResult({ team1: '', team2: '' });
//         setMatchPlayers({ p1: '', p2: '', p3: '', p4: '' });
//     };
    
    
    
    
    
//     const updatePlayerScores = (newPlayerScores) => {
//         console.log("Updating player scores with new player scores:", newPlayerScores);
//         setPlayerScores(newPlayerScores);
//         console.log('this is a player score', playerScores)
        
//     };
//     const resetIndividualMatchScores = () => {
//         // Crear una copia profunda de playerScores para evitar la mutación directa del estado
//         const newPlayerScores = JSON.parse(JSON.stringify(playerScores));
    
//         // Iterar sobre cada jugador y restablecer sus puntuaciones de partidos individuales
//         for (const playerName in newPlayerScores) {
//             if (newPlayerScores.hasOwnProperty(playerName)) {
//                 // Supongamos que tienes puntuaciones de partidos individuales en una propiedad 'matches'
//                 // Puedes cambiar esto para que coincida con tu estructura de datos
//                 newPlayerScores[playerName].matches = 0;
//             }
//         }
    
//         // Actualizar el estado con las nuevas puntuaciones
//         setPlayerScores(newPlayerScores);
//     };
    
//     return (
//         <div>
//             <h1>Organizador de partidos de pádel</h1>
//             <PlayerInput setPlayers={setPlayers} />
//             <MatchOrganizer players={players} setMatches={setMatches} matches={matches} />
//             <MatchResultsInput
//                 organizedMatches={matches}
//                 updatePlayerScores={updatePlayerScores}
//                 playerScores={playerScores}
//                 setMatchResult={setMatchResult} // Pasa las funciones como propiedades
//                 setMatchPlayers={setMatchPlayers} // Pasa las funciones como propiedades
//                 setPlayerScores={setPlayerScores} // Pasa las funciones como propiedades
//                 matchResult={matchResult} // Pasa los valores como propiedades
//                 matchPlayers={matchPlayers} // Pasa los valores como propiedades
//                 />
//                 <button onClick={resetIndividualMatchScores}>Restablecer resultados de partidos individuales</button>

//             <PartialResults playerScores={playerScores} currentMatchIndex={currentMatchIndex} />
//             <FinalResults playerScores={playerScores} />
//         </div>
//     );
// };


// export default App;
import React, { useState, useEffect } from "react";

const PadelApp = () => {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [matches, setMatches] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [playerScores, setPlayerScores] = useState({});
  const [prevInputValues, setPrevInputValues] = useState({}); 

  useEffect(() => {
    if (players.length === 8) {
      const organizedMatches = [];
      let fixedPlayer = players[0];
      let rotatingPlayers = players.slice(1);

      for (let i = 0; i < 7; i++) {
        let match1, match2;

        if ([0, 1, 2].includes(i)) {
          match1 = [fixedPlayer, rotatingPlayers[i], rotatingPlayers[(i + 1) % 7], rotatingPlayers[(i + 2) % 7]];
          match2 = [rotatingPlayers[(i + 3) % 7], rotatingPlayers[(i + 4) % 7], rotatingPlayers[(i + 5) % 7], rotatingPlayers[(i + 6) % 7]];
        } else {
          match2 = [fixedPlayer, rotatingPlayers[i], rotatingPlayers[(i + 1) % 7], rotatingPlayers[(i + 2) % 7]];
          match1 = [rotatingPlayers[(i + 3) % 7], rotatingPlayers[(i + 4) % 7], rotatingPlayers[(i + 5) % 7], rotatingPlayers[(i + 6) % 7]];
        }

        organizedMatches.push([match1, match2]);
      }

      setMatches(organizedMatches);
    }
  }, [players]);

  useEffect(() => {
    const newPlayerScores = {...playerScores}; // Copiamos el estado existente
  
    Object.keys(inputValues).forEach(key => {
      const [turnIndex, matchIndex, teamIndex] = key.split('-');
      const value = parseInt(inputValues[key], 10) || 0;
      const prevValue = parseInt(prevInputValues[key], 10) || 0;
      const diff = value - prevValue; // Calculamos la diferencia
      const teamNames = matches[parseInt(turnIndex, 10)][parseInt(matchIndex, 10)][teamIndex === 'team1' ? 0 : 2];
      const teamMates = matches[parseInt(turnIndex, 10)][parseInt(matchIndex, 10)].slice(teamIndex === 'team1' ? 0 : 2, teamIndex === 'team1' ? 2 : 4);
  
      teamMates.forEach(name => {
        if (!newPlayerScores[name]) {
          newPlayerScores[name] = { total: 0 };
        }
        newPlayerScores[name].total += diff; // Añadimos la diferencia
      });
    });
  
    setPlayerScores(newPlayerScores);
    setPrevInputValues(inputValues); // Actualizamos los valores previos
  }, [inputValues]);
  

  const handleInputChange = (turnIndex, matchIndex, teamIndex, e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    const newInputValues = { ...inputValues, [`${turnIndex}-${matchIndex}-${teamIndex}`]: newValue };
    setInputValues(newInputValues);
  };

  const addPlayer = () => {
    setPlayers(prevPlayers => [...prevPlayers, name]);
    setName("");
  };
  const sortedPlayerScores = Object.entries(playerScores).sort((a, b) => b[1].total - a[1].total);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addPlayer}>Agregar jugador</button>

      <h2>Partidos organizados</h2>
      {matches.map((turn, turnIndex) => (
        <div key={turnIndex}>
          <h3>Turno {turnIndex + 1}</h3>
          <p>Pista 1: {turn[0].slice(0, 2).join(", ")} vs {turn[0].slice(2).join(", ")}</p>
          <p>Pista 2: {turn[1].slice(0, 2).join(", ")} vs {turn[1].slice(2).join(", ")}</p>
        </div>
      ))}

      <h2>Ingresar resultados de los partidos</h2>
      {matches.map((turn, turnIndex) => (
        turn.map((match, matchIndex) => (
          <div key={`${turnIndex}-${matchIndex}`}>
            <span>{match[0]} y {match[1]}</span>
            <input
              type="number"
              placeholder="Puntos"
              onChange={(e) => handleInputChange(turnIndex, matchIndex, 'team1', e)}
            />
            <span> vs </span>
            <span>{match[2]} y {match[3]}</span>
            <input
              type="number"
              placeholder="Puntos"
              onChange={(e) => handleInputChange(turnIndex, matchIndex, 'team2', e)}
            />
          </div>
        ))
      ))}

      <h2>Puntuaciones de jugadores</h2>
      <ul>
  {sortedPlayerScores.map(([playerName, score], index) => (
    <li key={index}>{playerName}: {score.total || 0}</li>
  ))}
</ul>
    </div>
  );
};

export default PadelApp;
