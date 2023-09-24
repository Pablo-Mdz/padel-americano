import React from 'react';
import Navbar from './Navbar';

const Rules = () => {
    return (
        <div className="bg-[#1b083c]  min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="container mx-auto py-5 px-4 max-w-3xl">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-2xl font-bold mb-5">Rules of American Padel Matches</h1>

                    <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                    <p>Welcome to the American Padel Matches score tracker! This game is designed for a group of 8 friends to play padel in a fun and dynamic way.</p>

                    <h2 className="text-xl font-semibold mb-3">Setting Up</h2>
                    <p>Enter the names of all 8 participants into the Player Input form. The system will automatically generate the matches for you. No buttons need to be pressed.</p>

                    <h2 className="text-xl font-semibold mb-3">How the Matches Work</h2>
                    <p>Two padel courts are required for 2 hours. Each participant will play 7 matches, each to 28 points. Partners and opponents change automatically after each match to ensure everyone plays with each other exactly once.</p>

                    <h2 className="text-xl font-semibold mb-3">Scoring</h2>
                    <p>Each match is a team effort, but the scores are counted individually. For example, if Team A (Player 1 and Player 2) beats Team B (Player 3 and Player 4) with a score of 15 to 13, then both Player 1 and Player 2 will have 15 points while Player 3 and Player 4 will have 13 points. Scores accumulate over the matches.</p>

                    <h2 className="text-xl font-semibold mb-3">How to Use the App</h2>
                    <p>Simply input the match scores in the Score Input form after each game. The app will update each player's individual score automatically.</p>

                    <p className="text-red-500 mt-5">Important Note: Do not refresh the page as all entered data and scores will be lost!</p>
                </div>
            </div>
            <footer className="mt-5 flex justify-center">
                <a href="https://github.com/Pablo-Mdz/padel-americano" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    GitHub Repository
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6 h-6 inline ml-2" />
                </a>
            </footer>
        </div>
    );
}

export default Rules;
