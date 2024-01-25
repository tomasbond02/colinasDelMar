import { Button } from '@mui/material'
import React from 'react'
import './styles.css';
import Carousel from '../carouselComponent';

function MainComponent() {
  return (
    <div className='mainContainer'>
      <div className='introImage'>
        <h1>Bienvenidos a Colinas Del Mar</h1>
        <p>Nos encontramos en Colinas de Punta Mogotes, zona residencial, Mar del Plata, Provincia de Buenos Aires. Un nuevo estilo de cabañas donde se combina la tranquilidad con la cercanía a la playa.</p>
        <Button variant="outlined">ver mas</Button>
      </div>
      <div className='carrouselMain'>
        <h2>NUESTRAS CABAÑAS</h2>
        <p>Contamos con dos cabañas totalmente equipadas con todo lo necesario para su estadia. Una cabaña para 6 personas y otra para 4. Ambas comparten caracteristicas como garaje semicubierto, portón eléctrico e internet.</p>
        <Carousel/>
      </div>
      <div className='ubicacionStyles'>
        <h3>UBICACIÓN</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12565.951394996906!2d-57.5557492!3d-38.0590183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584ddfc89746bfb%3A0xe4efe27e3b7874d9!2sArana%20y%20Goiri%202247%2C%20B7603FRG%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1642127094795!5m2!1ses-419!2sar"
          style={{width:"93%", height:"450px"}}></iframe>
        <p>Cabañas Colinas del Mar, se encuentran en Arana Y Goiri 2247, Punta Mogotes, Mar del Plata, Bs.As. Costa Atlántica. De allí bajando por Arana y Goiri, cruzando la avenida, se encuentra el complejo de balnearios.</p>
      </div>
    </div>
  )
}

export default MainComponent