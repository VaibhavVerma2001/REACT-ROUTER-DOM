import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Error from './components/Error';

//note npm i react-router-dom@6

function App() {
  return (
    <>
      <Router>
        {/* WRITE THOSE COMPONENTS WHO REMAIN SAME FOR ALL PAGES HERE*/}
        {/* INSTEAD OF a and href USE LINK TO SO THAT PAGE DONT RELOAD WHEN USER CLICK THEM */}
        <nav className='navbar'>
          <Link to="/" className='nav-items'>Home</Link>
          <Link to="/about" className='nav-items'>About</Link>
          <Link to="/profile" className='nav-items'>Profile</Link>
        </nav>
        <Routes>
          {/* WRITE THOSE COMPONENTS WHO CHANGE FOR ALL PAGES HERE*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* use params */}
          <Route path="/profile/:username" element={<Profile />} />

          {/* error page if no routes are there */}
          <Route path="*" element={<Error />} />
        </Routes>
        
        <div >
          <p className="footer"> This is footer which will be on all pages </p>
        </div>
      </Router>
    </>
  );
}

export default App;
