import React from 'react';

const PartialResults = ({ playerScores }) => {
  const playerNames = Object.keys(playerScores);
  
  const uniquePartidos = [...new Set(playerNames.map((name) => name.split("-partido")[1]))];
  
  return (
    <div className="partial-results">
      <h2>Resultados Parciales</h2>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            {uniquePartidos.map((partido) => (
              <th key={partido}>Partido {partido}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {playerNames.map((playerName, index) => (
            <tr key={index}>
              <td>{playerName.split("-partido")[0]}</td>
              {uniquePartidos.map((partido) => (
                <td key={playerName + "-partido" + partido}>
                  {playerScores[playerName + "-partido" + partido]?.total || 0}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartialResults;
