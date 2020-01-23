import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <h1><a className="brand-logo">Kaggle Deploy</a></h1>
            <ul className="right">
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/nlp-getting-started'>NLP Getting Started</NavLink></li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
