import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="website" element={<Home />} />
          <Route path="website/projects" element={<Projects />} />
          <Route path="website/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
