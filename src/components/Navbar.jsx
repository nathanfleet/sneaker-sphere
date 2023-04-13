import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full text-black flex justify-between items-center bg-gray-100 z-50 top-0">
      <div className="flex items-center px-4 md:px-12">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        </Link>
        <span className="ml-2 text-xl font-bold">SneakerSphere</span>
      </div>

      <nav className="px-4 md:px-12">
        <ul className="hidden md:flex md:gap-4 md:p-6 md:uppercase font-bold">
          <li className="hover:text-blue-400">
            <Link to="/buy">Buy</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to="/sell">Sell</Link>
          </li>
        </ul>

        {active ? (
          <ul className="md:hidden flex-col flex left-1/4 inset-0 fixed uppercase items-center justify-center p-8 backdrop-blur-lg gap-8 text-white font-bold">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
            <li className="hover:text-blue-400">
              <Link to="/buy" onClick={toggleMenu}>
                Buy
              </Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/sell" onClick={toggleMenu}>
                Sell
              </Link>
            </li>
          </ul>
        ) : (
          <div className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
