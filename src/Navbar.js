import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navItemClasses =
    'text-lg mx-2 text-white cursor-pointer transition duration-300 hover:text-green-500';

  return (
    <div className="font-sans p-2">
      <nav className="flex justify-between items-center mb-5 container mx-auto">
        <div className="flex items-center">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="h-24 w-24 mr-4" />
          <span
            className={navItemClasses}
            onClick={() => navigate('/')}
          >
            Matches
          </span>
        </div>
        <div>
          <span
            className={navItemClasses}
            onClick={() => navigate('/rules')}
          >
            Rules
          </span>
          <span
            className={navItemClasses}
            onClick={() => navigate('/about')}
          >
            About
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
