import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Hero() {
  return (
    <div className="bg-gray-900 text-white w-screen h-screen mt-5">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src={logo} alt="logo" className="h-20 w-20 mx-auto" />
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
