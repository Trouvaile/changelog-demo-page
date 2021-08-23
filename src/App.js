import './App.css';
import React from 'react'
import Header from './Components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component = {Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
