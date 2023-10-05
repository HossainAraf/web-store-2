import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './Components/Counter';
import Nav from './Components/Nav';
import LoginScreen from './Components/LogIn';
import Product from './Components/Product';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
