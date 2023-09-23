import React, { useState, useEffect } from 'react';

const MatchResultsInput = ({ organizedMatches, playerScores, updatePlayerScores }) => {
    const [inputValues, setInputValues] = useState({});

    useEffect(() => {
        // Cálculo de los totales cada vez que cambia `inputValues`
        const newPlayerScores = {};

        Object.keys(inputValues).forEach(key => {
            const [matchIndex, teamIndex] = key.split('-');
            const value = inputValues[key];
            const teamNames = organizedMatches[parseInt(matchIndex, 10)][teamIndex === 'team1' ? 0 : 1];
            
            teamNames.forEach(playerName => {
                if (!newPlayerScores[playerName]) {
                    newPlayerScores[playerName] = { total: 0 };
                }
                newPlayerScores[playerName].total += value;
            });
        });

        updatePlayerScores(newPlayerScores);
    }, [inputValues]);

    const handleInputChange = (matchIndex, teamIndex, e) => {
        const newValue = parseInt(e.target.value, 10) || 0;

        const newInputValues = { ...inputValues, [`${matchIndex}-${teamIndex}`]: newValue };
        setInputValues(newInputValues);
    };

    return (
        <div className="results-box">
            <h2>Ingresar resultados de los partidos</h2>
            {organizedMatches && organizedMatches.map((match, matchIndex) => (
                <div key={matchIndex}>
                    <span>{match[0][0]} y {match[0][1]}</span>
                    <input
                        type="number"
                        placeholder="Puntos"
                        onChange={(e) => handleInputChange(matchIndex, 'team1', e)}
                    />
                    <span>vs</span>
                    <span>{match[1][0]} y {match[1][1]}</span>
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
