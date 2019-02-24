import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import './App.scss';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => (
  <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </nav>
  </Router>
);

export default App;
