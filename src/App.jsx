import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import CourseModule from './pages/CourseModule';
import Community from './pages/Community';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/module/:moduleId" element={<CourseModule />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;