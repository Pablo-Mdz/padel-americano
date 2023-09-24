import React from 'react';
import Navbar from './Navbar';

const Rules = () => {
    return (
        <div className="text-center bg-gray-300 min-h-screen flex flex-col justify-between">
            <Navbar />
            <div>
                <h1 className="text-2xl font-bold mb-5">Rules of American Padel Matches</h1>
                <p>Breve descripción de un partido americano de pádel.</p>
                <p>Explicación detallada de cómo funciona la página.</p>
                <p className="text-red-500">Nota: No refresque la página, ya que se perderán todos los resultados.</p>
            </div>
            <footer className="mt-5">
                <p>Created by </p>
                <a href="tu_url_de_GitHub" target="_blank" rel="noopener noreferrer">
                    <img src="icono_de_GitHub" alt="GitHub" className="w-6 h-6 inline" />
                </a>
            </footer>
        </div>
    );
}

export default Rules;
