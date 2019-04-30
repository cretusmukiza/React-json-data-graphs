import React from 'react';
import Routes from'./routes.js';
import './App.css';
import {NavLink} from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <nav >
        <NavLink activeClassName="active" to="/" >Total dropout vs Region</NavLink>
        <NavLink activeClassName="active" to="/schoolchart" >Total dropout vs school</NavLink>
        <NavLink activeClassName="active" to="/genderchart" >Male/Female dropout vs school</NavLink>
        <NavLink activeClassName="active" to="/districtchart" >Total dropout in districts</NavLink>
      </nav>
      <Routes />
    </div>
    
    
  );
}

export default App;
