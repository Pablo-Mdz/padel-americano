
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";


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
    }, [players,matches]);

    useEffect(() => {
        const newPlayerScores = { ...playerScores };
        Object.keys(inputValues).forEach(key => {
            const [turnIndex, matchIndex, teamIndex] = key.split('-');
            const value = parseInt(inputValues[key], 10) || 0;
            const prevValue = parseInt(prevInputValues[key], 10) || 0;
            const diff = value - prevValue;
            // const teamNames = matches[parseInt(turnIndex, 10)][parseInt(matchIndex, 10)][teamIndex === 'team1' ? 0 : 2];
            const teamMates = matches[parseInt(turnIndex, 10)][parseInt(matchIndex, 10)].slice(teamIndex === 'team1' ? 0 : 2, teamIndex === 'team1' ? 2 : 4);

            teamMates.forEach(name => {
                if (!newPlayerScores[name]) {
                    newPlayerScores[name] = { total: 0 };
                }
                newPlayerScores[name].total += diff;
            });
        });
        setPlayerScores(newPlayerScores);
        setPrevInputValues(inputValues);
    }, [inputValues, playerScores, prevInputValues]);


    const handleInputChange = (turnIndex, matchIndex, teamIndex, e) => {
        const newValue = parseInt(e.target.value, 10) || 0;
        const newInputValues = { ...inputValues, [`${turnIndex}-${matchIndex}-${teamIndex}`]: newValue };
        setInputValues(newInputValues);
    };

    const addPlayer = () => {
        setPlayers(prevPlayers => [...prevPlayers, name]);
        setName("");
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addPlayer();
        }
    };
    const sortedPlayerScores = Object.entries(playerScores).sort((a, b) => b[1].total - a[1].total);

    return (
        <div className="font-sans bg-gray-300  min-h-screen flex flex-col items-center ">
          <Navbar />
          <p className="text-red-500">Nota: No refresque ni salga de la página, ya que se perderán todos los resultados.</p>
           <h3 className="text-xl font-semibold mt-5 mb-3">Agregue aqui los nombres de los jugadores de a uno</h3>
            <div className="w-3/4  flex flex-col items-center">
                <input
                    className="text-lg p-2 m-2 border rounded w-1/2"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-1/2"
                    onClick={addPlayer}
                >
                    Agregar jugador
                </button>
                <h2 className="text-2xl font-bold mt-5 mb-3">Partidos organizados</h2>
                <div className="bg-white shadow rounded w-3/4 text-center">
                    {matches.map((turn, turnIndex) => (
                        <div key={turnIndex} className={`p-3 ${turnIndex % 2 ? "bg-gray-100" : ""}`}>
                            <h3 className="text-xl">Turno {turnIndex + 1}</h3>
                            <p>Pista 1: {turn[0].slice(0, 2).join(", ")} vs {turn[0].slice(2).join(", ")}</p>
                            <p>Pista 2: {turn[1].slice(0, 2).join(", ")} vs {turn[1].slice(2).join(", ")}</p>
                        </div>
                    ))}
                </div>

                {/* ... */}
                <h2 className="text-2xl font-bold mt-5 mb-3">Ingresar resultados de los partidos</h2>
                <div className="bg-white shadow rounded w-3/4">
                    {matches.map((turn, turnIndex) => (
                        turn.map((match, matchIndex) => (
                            <div key={`${turnIndex}-${matchIndex}`} className={`flex items-center p-3 ${matchIndex % 2 ? "bg-gray-100" : ""}`}>
                                <span className="flex-1 text-left">{match[0]} - {match[1]}</span>
                                <input
                                    className="flex-1 text-center w-20 border-solid border-2 rounded-md "
                                    type="number"
                                    placeholder="Puntos"
                                    onChange={(e) => handleInputChange(turnIndex, matchIndex, 'team1', e)}
                                />
                                <span className="flex-1 text-center">vs</span>
                                <input
                                    className="flex-1 text-center w-20 border-solid border-2 rounded-md "
                                    type="number"
                                    placeholder="Puntos"
                                    onChange={(e) => handleInputChange(turnIndex, matchIndex, 'team2', e)}
                                />
                                <span className="flex-1 text-right">{match[2]} - {match[3]}</span>
                            </div>
                        ))
                    ))}
                </div>
                {/* ... */}


                <h2 className="text-2xl font-bold mt-5 mb-3">Puntuaciones de jugadores</h2>
                <ul className="bg-white shadow rounded p-3 w-3/4">
                    {sortedPlayerScores.map(([playerName, score], index) => (
                        <li key={index} className={`text-center p-2 ${index % 2 ? "bg-gray-100" : ""}`}>
                            {playerName}: {score.total || 0}
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="mt-5">
                <p>Created by </p>
                <a href="tu_url_de_GitHub" target="_blank" rel="noopener noreferrer">
                    <img src="icono_de_GitHub" alt="GitHub" className="w-6 h-6 inline" />
                </a>
            </footer>
        </div>

    );
};

export default PadelApp;
