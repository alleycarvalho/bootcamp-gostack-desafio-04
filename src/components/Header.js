import React from 'react';
import './Header.css';

import logo from '../assets/facebook.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Facebook" />

        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
