import React from 'react';
import './styles.css';
import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
  const navigate = useNavigate();

  function indexNavigate () {
    navigate("/");
  }
  function serviceNavigate () {
    navigate("service");
  }
  function serviceNavigate () {
    navigate("service");
  }
  function serviceNavigate () {
    navigate("service");
  }
  function serviceNavigate () {
    navigate("service");
  }
  return (
    <header className="App-header">
      <img src="logoColinas.png" alt="logoImagen" />
      <div className='linkStyles'>
        <Button variant="text" className="active-link" onClick={indexNavigate}>INICIO</Button>
        <Button variant="text" className="nav-link" onClick={serviceNavigate}>SERVICIOS</Button>
        <Button variant="text" className="nav-link" onClick={serviceNavigate}>PAX 4</Button>
        <Button variant="text" className="nav-link" onClick={serviceNavigate}>PAX 6</Button>
        <Button variant="text" className="nav-link" href="https://wa.me/+5492235767338">RESERVE</Button>
      </div>
    </header>
  );
}

export default HeaderComponent;
