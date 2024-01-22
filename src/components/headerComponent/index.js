import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { Link } from '@mui/material';

function HeaderComponent() {
  return (
    <header className="App-header">
      <img src="logoColinas.png" alt="logoImagen" />
      <div>
        <Link className="active-link">
          {'INICIO'}
        </Link>
        <Link  className="nav-link">
          {'SERVICIOS'}
        </Link>
        <Link className="nav-link">
          {'PAX 4'}
        </Link>
        <Link className="nav-link">
          {'PAX 6'}
        </Link>
        <Link className="nav-link">
          {'RESERVE'}
        </Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
