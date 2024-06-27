import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="website/" element={<Home />} />
          <Route path="website/projects" element={<Projects />} />
          <Route path="website/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
