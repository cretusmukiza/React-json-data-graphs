import React from 'react';
import Routes from'./routes.js';
import './App.css';
import {NavLink} from 'react-router-dom';
import Nav from '../src/component/nav/nav';


function App() {
  return (
    <div className="app">  
      <Nav />  
      <div className="welcome" >  
      <div className="welcome-menu">
         <Routes />
      </div>   
    </div>
    </div>
    
    
  );
}

export default App;
