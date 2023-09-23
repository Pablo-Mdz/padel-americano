import React from 'react';

const PartialResults = ({ playerScores, currentMatchIndex }) => {
    const playerNames = Object.keys(playerScores);

    return (
        <div className="partial-results">
            <h2>Resultados Parciales</h2>
            <table>
                <thead>
                    <tr>
                        <th>Jugador</th>
                        {Array.from({ length: currentMatchIndex + 1 }, (_, i) => (
                            <th key={i}>Partido {i + 1}</th>
                        ))}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {playerNames.map((playerName, index) => (
                        <tr key={index}>
                            <td>{playerName}</td>
                            {Array.from({ length: currentMatchIndex + 1 }, (_, i) => (
                                <td key={i}>
                                   {playerScores && playerScores[playerName] && playerScores[playerName].total ? playerScores[playerName].total : 0}

                                    {/* {playerScores[playerName] && playerScores[playerName][`partido${i + 1}`]
                                        ? playerScores[playerName][`partido${i + 1}`]?.total || 0
                                        : 0} */}
                                </td>
                            ))}
                            <td>
                                {playerScores[playerName] && playerScores[playerName].total
                                    ? playerScores[playerName].total
                                    : 0}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PartialResults;

