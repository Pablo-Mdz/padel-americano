import React from 'react';

const MatchResultsInput = ({ organizedMatches, playerScores, updatePlayerScores }) => {
    const handleInputChange = (matchIndex, teamIndex, e) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        const newPlayerScores = { ...playerScores };
        console.log('Handle imput change working in matchresultImpot')
        const team1 = organizedMatches[matchIndex][0];
        const team2 = organizedMatches[matchIndex][1];
        console.log('organized match', organizedMatches)
        console.log('update player score', updatePlayerScores)
        console.log('player score', playerScores)
        // Actualización de puntuaciones según el equipo
        if (teamIndex === 'team1') {
            team1.forEach((playerName) => {
                if (!newPlayerScores[playerName]) {
                    newPlayerScores[playerName] = { total: 0 };
                }
                newPlayerScores[playerName].total += newValue;
            });
        } else if (teamIndex === 'team2') {
            team2.forEach((playerName) => {
                if (!newPlayerScores[playerName]) {
                    newPlayerScores[playerName] = { total: 0 };
                }
                newPlayerScores[playerName].total += newValue;
            });
        }

        updatePlayerScores(newPlayerScores);
    };

    // Nota que el bloque 'return' ahora está dentro de la función
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
                    <span>vs</span>
                    <span>{match[1].join(', ')}</span>
                    <input
                        type="number"
                        placeholder="Puntos"
                        onChange={(e) => handleInputChange(matchIndex, 'team2', e)}
                    />
                </div>
            ))}
        </div>
    );
};

export default MatchResultsInput;
