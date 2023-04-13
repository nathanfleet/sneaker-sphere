import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
