import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Intro from './pages/intro';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="black-nav">
          <h2 className='logo'><a href="/my-react-portfolio/">My Portfolio</a></h2>
          <div className='links'>
            <Link className='navLinks' to="/my-react-portfolio/">소개</Link>
            <Link className='navLinks' to="/page1">프로젝트</Link>
            <Link className='navLinks' to="/page2">학원</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/my-react-portfolio" element={<Intro />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;