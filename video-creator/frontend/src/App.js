import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarVideo from './components/NavbarVideo';
import Dashboard from './pages/Dashboard';
import VideoEditor from './pages/VideoEditor';
import Templates from './pages/Templates';

function App() {
  return (
    <Router>
      <NavbarVideo />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/editor/:projectId" element={<VideoEditor />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </Router>
  );
}

export default App;
