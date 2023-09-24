import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navItemClasses =
    'text-lg mx-2 text-white cursor-pointer transition duration-300 hover:text-green-500';

  return (
    <div className="font-sans  p-2 ">
    <nav className="flex justify-center mb-5">
      <span
        className={navItemClasses}
        onClick={() => navigate('/')}
      >
        Matches
      </span>
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
    </nav>
    </div>
  );
};

export default Navbar;

