import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function Hero() {
  const rotationAnimation = {
    rotate: {
      rotate: [0, 360],
      transition: { duration: 5, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div className="overflow-hidden bg-gray-900 text-white w-screen h-screen mt-5">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-36 h-36 mx-auto">
            <motion.img
              src={logo}
              alt="logo"
              className="object-contain object-center h-full w-full"
              initial="initial"
              animate="rotate"
              variants={rotationAnimation}
            />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Welcome to SneakerSphere
          </h1>
          <p className="mt-2 text-xl font-bold">
            The ultimate destination for sneakers
          </p>
          <div className="mt-8">
            <Link to="/register">
              <button className="bg-white border border-transparent rounded-md py-2 px-4 inline-flex items-center justify-center text-lg font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
