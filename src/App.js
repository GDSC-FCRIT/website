import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Chapter from './pages/Chapter'; 
import Team from './pages/Team';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="block bg-App-bg bg-no-repeat bg-fixed overflow-auto">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/chapter" element={<Chapter/>} /> 
          <Route path="/team" element={<Team/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
