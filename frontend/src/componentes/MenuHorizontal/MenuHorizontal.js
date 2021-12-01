import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {

  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/professores"> Professores   </Link> </li>
              <li> <Link to="/disciplinas"> Disciplinas </Link> </li>
  
            </ul>
          </nav>
          


        </div>

      </div>

  );
}


