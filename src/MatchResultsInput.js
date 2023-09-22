

// import React, { useState } from 'react';

// const MatchResultsInput = ({ organizedMatches, playerScores }) => {
//     const [matchResults, setMatchResults] = useState({});
//     const [matchResult, setMatchResult] = useState({ team1: '', team2: '' });
//     const [matchPlayers, setMatchPlayers] = useState({ p1: '', p2: '', p3: '', p4: '' });

//     const handleInputChange = (matchIndex, teamIndex, e) => {
//         const newValue = parseInt(e.target.value, 10) || 0;
      
//         // Calcula los resultados parciales para cada jugador en el partido actual
//         const newPlayerScores = { ...playerScores };
      
//         const matchPlayersArray = [matchPlayers.p1, matchPlayers.p2, matchPlayers.p3, matchPlayers.p4];
//         const team1Score = newValue;
//         const team2Score = 10 - newValue;
      
//         matchPlayersArray.forEach((playerName, index) => {
//           const key = `${playerName}-partido${matchIndex + 1}`;
//           newPlayerScores[key] = { ...newPlayerScores[key], total: (newPlayerScores[key]?.total || 0) + (index < 2 ? team1Score : team2Score) };
//           newPlayerScores[key][`partido${matchIndex + 1}`] = newValue;
//         });
      
//         // Actualiza el estado de resultados parciales
//         setPlayerScores(newPlayerScores);
//       };
      
//     // const handleInputChange = (matchIndex, teamIndex, e) => {
//     //     const newMatchResults = { ...matchResults };
//     //     if (!newMatchResults[matchIndex]) {
//     //         newMatchResults[matchIndex] = {};
//     //     }
//     //     newMatchResults[matchIndex][teamIndex] = e.target.value;
//     //     setMatchResults(newMatchResults);
//     // };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     updatePlayerScores(matchResult, [matchPlayers.p1, matchPlayers.p2, matchPlayers.p3, matchPlayers.p4]);
//     //     setMatchResult({ team1: '', team2: '' });
//     //     setMatchPlayers({ p1: '', p2: '', p3: '', p4: '' });
//     // };



//     return (
//         <div className="results-box">
//             <h2>Ingresar resultados de los partidos</h2>
//             {organizedMatches && organizedMatches.map((match, matchIndex) => (
//                 <div key={matchIndex}>
//                     <span>{match[0].join(', ')}</span>
//                     <input
//                         type="number"
//                         placeholder="Puntos"
//                         onChange={(e) => handleInputChange(matchIndex, 'team1', e)}
//                     />
//                     <input
//                         type="number"
//                         placeholder="Puntos"
//                         onChange={(e) => handleInputChange(matchIndex, 'team2', e)}
//                     />
//                     <span>{match[1].join(', ')}</span>
//                 </div>
//             ))}
//             {/* <button onClick={handleSubmit}>Actualizar puntajes</button> */}
//         </div>
//     );
// };

// export default MatchResultsInput;


import React, { useState } from 'react';

const MatchResultsInput = ({ organizedMatches, playerScores, updatePlayerScores }) => {
    const [matchPlayers, setMatchPlayers] = useState({ p1: '', p2: '', p3: '', p4: '' });

    const handleInputChange = (matchIndex, teamIndex, e) => {
        const newValue = parseInt(e.target.value, 10) || 0;

        // Calcula los resultados parciales para cada jugador en el partido actual
        const newPlayerScores = { ...playerScores };

        const matchPlayersArray = [matchPlayers.p1, matchPlayers.p2, matchPlayers.p3, matchPlayers.p4];
        const team1Score = newValue;
        const team2Score = 10 - newValue;

        matchPlayersArray.forEach((playerName, index) => {
            const key = `${playerName}-partido${matchIndex + 1}`;
            newPlayerScores[key] = { ...newPlayerScores[key], total: (newPlayerScores[key]?.total || 0) + (index < 2 ? team1Score : team2Score) };
            newPlayerScores[key][`partido${matchIndex + 1}`] = newValue;
        });

        // Actualiza el estado de resultados parciales
        updatePlayerScores(newPlayerScores);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Puedes activar esta parte si deseas enviar los resultados completos del partido al componente App.js
        // const matchResult = { team1: matchResults.team1, team2: matchResults.team2 };
        // updatePlayerScores(matchResult, [matchPlayers.p1, matchPlayers.p2, matchPlayers.p3, matchPlayers.p4]);
        // setMatchResult({ team1: '', team2: '' });
        // setMatchPlayers({ p1: '', p2: '', p3: '', p4: '' });
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
