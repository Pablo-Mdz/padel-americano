import Navbar from "./Navbar";

const About = () => {
    return (
        <div className="bg-[#1b083c]  min-h-screen flex flex-col justify-between">
            <div className="container mx-auto py-5 px-4 max-w-3xl">
            <Navbar />
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-2xl font-bold mb-5">About</h1>
                    <p className="text-lg mb-2">Welcome to the American Padel Matches Organizer!</p>

                    <h2 className="text-xl font-semibold mb-2">Why This Repository?</h2>
                    <p className="mb-4">The aim of this repository is to solve a common problem among padel players—organizing matches efficiently. With this app, you can ensure everyone gets to play with everyone else without any hassle.</p>

                    <h2 className="text-xl font-semibold mb-2">Open Source</h2>
                    <p className="mb-4">This project is open source and free for everyone. You're welcome to contribute or make it better. Check the repository on GitHub for more details.</p>

                    <p className="text-sm mb-4">Feel free to use, share, or contribute to this project. Happy playing!</p>
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
};

export default About;
