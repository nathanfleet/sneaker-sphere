import React from 'react';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src={logo} alt="logo" className="h-25 w-25 mx-auto" />
          <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Welcome to SneakerSphere
          </h1>
          <p className="mt-2 text-xl font-bold">
            The ultimate destination for sneakers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
