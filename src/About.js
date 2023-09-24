import Navbar from "./Navbar";

const About = () => {
    return (
        <div className="text-center bg-gray-300 min-h-screen flex flex-col justify-between">
            <Navbar />
            <div>
                <h1 className="text-2xl font-bold mb-5">About</h1>
                <p>El uso de esta página es libre.</p>
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

export default About;

  