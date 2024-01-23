import React from 'react'
import './styles.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterComponent() {
    return (
        <div>
            <div className='logoContainer'>
                <div>
                    <img src='logo dibuj.png' alt='foto logo'/>
                </div>
                <div className='contactContainer'>
                    <h3>SEGUINOS Y CONTACTANOS</h3>
                    <WhatsAppIcon></WhatsAppIcon>
                    <InstagramIcon></InstagramIcon>
                    <p>Agradecemos leer el reglamento interno en la sección "SERVICIOS". Muchas Gracias, los esperamos.</p>
                </div>
            </div>
            <div className='copyright'>
                © 2024 Copyright Colinas Del Mar
            </div>
        </div>
    )
}

export default FooterComponent