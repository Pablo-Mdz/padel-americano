// import React, { useState } from 'react';

// const MatchResultsInput = ({ players, updatePlayerScores }) => {
//   const [matchResult, setMatchResult] = useState({ team1: '', team2: '' });
//   const [matchPlayers, setMatchPlayers] = useState({ p1: '', p2: '', p3: '', p4: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     updatePlayerScores(matchResult, [matchPlayers.p1, matchPlayers.p2, matchPlayers.p3, matchPlayers.p4]);
//     setMatchResult({ team1: '', team2: '' });
//     setMatchPlayers({ p1: '', p2: '', p3: '', p4: '' });
//   };

//   return (
//     <div className='results-box'>
//       <h2>Ingresar resultados del partido</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Selectores para los jugadores */}
//         {['p1', 'p2', 'p3', 'p4'].map((p, index) => (
//           <select key={index} onChange={e => setMatchPlayers({ ...matchPlayers, [p]: e.target.value })}>
//             <option value="">Seleccionar jugador</option>
//             {players && players.map((player, i) => (
//               <option key={i} value={player}>{player}</option>
//             ))}
//           </select>
//         ))}
        
//         {/* Campos para los puntajes */}
//         <label>
//           Puntos del equipo 1:
//           <input
//             type="number"
//             value={matchResult.team1}
//             onChange={(e) => setMatchResult({ ...matchResult, team1: e.target.value })}
//           />
//         </label>
//         <label>
//           Puntos del equipo 2:
//           <input
//             type="number"
//             value={matchResult.team2}
//             onChange={(e) => setMatchResult({ ...matchResult, team2: e.target.value })}
//           />
//         </label>
//         <button type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// };

// export default MatchResultsInput;


import React, { useState } from 'react';

const MatchResultsInput = ({ organizedMatches, updatePlayerScores }) => {
  const [matchResults, setMatchResults] = useState({});

  const handleInputChange = (matchIndex, teamIndex, e) => {
    const newMatchResults = { ...matchResults };
    if (!newMatchResults[matchIndex]) {
      newMatchResults[matchIndex] = {};
    }
    newMatchResults[matchIndex][teamIndex] = e.target.value;
    setMatchResults(newMatchResults);
  };

  const handleSubmit = () => {
    updatePlayerScores(matchResults);
    setMatchResults({});
  };

  return (
    <div className="results-box">
      <h2>Ingresar resultados de los partidos</h2>
      {organizedMatches && organizedMatches.map((match, matchIndex) => (
        <div key={matchIndex}>
          <span>{match[0].join(', ')}</span>
          <input
            type="number"
            placeholder="Puntos"
            onChange={(e) => handleInputChange(matchIndex, 'team1', e)}
          />
          <input
            type="number"
            placeholder="Puntos"
            onChange={(e) => handleInputChange(matchIndex, 'team2', e)}
          />
          <span>{match[1].join(', ')}</span>
        </div>
      ))}
      <button onClick={handleSubmit}>Actualizar puntajes</button>
    </div>
  );
};

export default MatchResultsInput;
