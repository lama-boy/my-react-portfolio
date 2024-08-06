import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="black-nav">
          <h4>My Portfolio</h4>
          <div className='links'>
            <Link to="/">home</Link>
            <Link to="/page1">page1</Link>
            <Link to="/page2">page2</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
