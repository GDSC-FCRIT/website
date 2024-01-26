import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Chapter from './pages/Chapter'; 
import Team from './pages/Team';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Events from './pages/Events';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <div className="block bg-App-bg bg-no-repeat bg-fixed overflow-auto bg-cover">
        {loading ? (
          <Loader />
        ) : (
          <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/home" element={<Main/>} />
          <Route path = "/events" element={<Events />} />
          <Route path="/chapter" element={<Chapter/>} /> 
          <Route path="/team" element={<Team/>} /> 
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
