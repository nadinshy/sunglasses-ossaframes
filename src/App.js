import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Shop from './Shop';
import Shipping from './Shipping';
import Contact from './Contact';

function App() {
  return <Router>
    <nav>
      <Link to="/" className='link'>OSSAFRAMES</Link>
      <Link to="/shop" className='link'>Shop</Link>
      <Link to="/shipping" className='link'>Shipping</Link>
      <Link to="/contact" className='link'>Contact</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>
}

export default App;