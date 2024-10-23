// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats.jsx';
import Settings from './components/Settings';
import DashboardHome from "./components/DashboardHome.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
