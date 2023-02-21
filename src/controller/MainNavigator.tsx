import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/home/Dashboard";
import { Footer } from "../view/dashboard/footer/Footer";
import { Header } from "../view/dashboard/header/Header";
import { About } from "../view/dashboard/About";
import { Contact } from "../view/dashboard/Contact";
import { Banking } from "../view/dashboard/services/Banking";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/banking" element={<Banking />} />

        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
