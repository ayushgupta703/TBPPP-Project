import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import Menu from './Components/Menu/Menu';
import ChefWord from './Components/ChefWord/ChefWord';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef-word" element={<ChefWord />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
