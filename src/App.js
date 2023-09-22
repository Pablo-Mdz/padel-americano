

// import React, { useState } from 'react';
// import MatchOrganizer from './MatchOrganizer';
// import MatchResultsInput from './MatchResultsInput';
// import FinalResults from './FinalResults';
// import PartialResults from './PartialResults';

// const PlayerInput = ({ setPlayers }) => {
//     const [name, setName] = useState('');

//     const addPlayer = () => {
//         setPlayers(prevPlayers => [...prevPlayers, name]);
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
//       };
      

//     const updatePlayerScores = (matchResult, matchPlayers) => {
//         setPlayerScores((prevScores) => {
//             const newScores = { ...prevScores };

//             // Actualizar los puntajes del equipo 1
//             newScores[matchPlayers[0]] = (newScores[matchPlayers[0]] || 0) + parseInt(matchResult.team1, 10);
//             newScores[matchPlayers[1]] = (newScores[matchPlayers[1]] || 0) + parseInt(matchResult.team1, 10);

//             // Actualizar los puntajes del equipo 2
//             newScores[matchPlayers[2]] = (newScores[matchPlayers[2]] || 0) + parseInt(matchResult.team2, 10);
//             newScores[matchPlayers[3]] = (newScores[matchPlayers[3]] || 0) + parseInt(matchResult.team2, 10);

//             // Actualizar los puntajes de los partidos para cada jugador
//             for (let i = 1; i <= 7; i++) {
//                 const key1 = `${matchPlayers[0]}-partido${i}`;
//                 const key2 = `${matchPlayers[1]}-partido${i}`;
//                 const key3 = `${matchPlayers[2]}-partido${i}`;
//                 const key4 = `${matchPlayers[3]}-partido${i}`;

//                 // Crear objetos para almacenar los resultados parciales de cada jugador
//                 newScores[key1] = newScores[key1] || { total: 0 };
//                 newScores[key2] = newScores[key2] || { total: 0 };
//                 newScores[key3] = newScores[key3] || { total: 0 };
//                 newScores[key4] = newScores[key4] || { total: 0 };

//                 // Actualizar los resultados parciales para cada jugador en cada partido
//                 newScores[key1][`partido${i}`] = (newScores[key1][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
//                 newScores[key2][`partido${i}`] = (newScores[key2][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
//                 newScores[key3][`partido${i}`] = (newScores[key3][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));
//                 newScores[key4][`partido${i}`] = (newScores[key4][`partido${i}`] || 0) + (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));

//                 // Actualizar los totales para cada jugador
//                 newScores[key1].total += (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
//                 newScores[key2].total += (i <= 3 ? parseInt(matchResult.team1, 10) : parseInt(matchResult.team2, 10));
//                 newScores[key3].total += (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));
//                 newScores[key4].total += (i <= 3 ? parseInt(matchResult.team2, 10) : parseInt(matchResult.team1, 10));
//             }

//             return newScores;
//         });
//     };




//     return (
//         <div>
//             <h1>Organizador de partidos de pádel</h1>
//             <PlayerInput setPlayers={setPlayers} />
//             <MatchOrganizer players={players} setMatches={setMatches} matches={matches} />
//             <MatchResultsInput
//   organizedMatches={matches}
//   updatePlayerScores={updatePlayerScores}
//   playerScores={playerScores}
//   setMatchResult={setMatchResult} // Agregar estas líneas
//   setMatchPlayers={setMatchPlayers} // Agregar estas líneas
//   setPlayerScores={setPlayerScores} // Agregar estas líneas
// />
//             <PartialResults playerScores={playerScores} currentMatchIndex={currentMatchIndex} />
//             <FinalResults playerScores={playerScores} />
//         </div>
//     );
// };

// export default App;
// // 


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
  const [partialResults, setPartialResults] = useState({});
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0); // Inicialmente, el primer partido
  const [matchResult, setMatchResult] = useState({ team1: '', team2: '' });
  const [matchPlayers, setMatchPlayers] = useState({ p1: '', p2: '', p3: '', p4: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Actualizar los resultados parciales para el partido actual
    const currentPartialResults = {};
    const matchIndex = currentMatchIndex + 1; // Índice del partido actual
    // Calcula los resultados parciales para cada jugador en el partido actual y guárdalos en currentPartialResults

    // Actualiza el estado de resultados parciales
    setPartialResults({ ...partialResults, [matchIndex]: currentPartialResults });

    // Avanza al siguiente partido
    setCurrentMatchIndex(currentMatchIndex + 1);

    // Limpia el formulario de resultados del partido
    setMatchResult({ team1: '', team2: '' });
    setMatchPlayers({ p1: '', p2: '', p3: '', p4: '' });
  };

  const updatePlayerScores = (matchResult, matchPlayers) => {
    setPlayerScores((prevScores) => {
      const newScores = { ...prevScores };
      // Tu lógica para actualizar los puntajes y resultados parciales aquí

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
        playerScores={playerScores}
        setMatchResult={setMatchResult} // Pasa las funciones como propiedades
        setMatchPlayers={setMatchPlayers} // Pasa las funciones como propiedades
        setPlayerScores={setPlayerScores} // Pasa las funciones como propiedades
        matchResult={matchResult} // Pasa los valores como propiedades
        matchPlayers={matchPlayers} // Pasa los valores como propiedades
      />
      <PartialResults playerScores={playerScores} currentMatchIndex={currentMatchIndex} />
      <FinalResults playerScores={playerScores} />
    </div>
  );
};

export default App;
