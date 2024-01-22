import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { Link } from '@mui/material';

function HeaderComponent() {
  return (
    <header className="App-header">
      <img src="logoColinas.png" alt="logoImagen" />
      <div>
        <Link to="/inicio" className="nav-link">
          {'INICIO'}
        </Link>
        <Link to="/servicios" className="nav-link">
          {'SERVICIOS'}
        </Link>
        <Link to="/pax4" className="nav-link">
          {'PAX 4'}
        </Link>
        <Link to="/pax6" className="nav-link">
          {'PAX 6'}
        </Link>
        <Link to="/reserve" className="nav-link">
          {'RESERVE'}
        </Link>
      </div>
    </header>
  );
}

export default HeaderComponent;
