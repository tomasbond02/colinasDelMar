import { Button } from '@mui/material'
import React from 'react'
import MapsComponent from '../mapsComponent'
import './styles.css';

function MainComponent() {
  return (
    <div className='mainContainer'>
      <div className='introImage'>
        <h1>Bienvenidos a Colinas Del Mar</h1>
        <p>Nos encontramos en Colinas de Punta Mogotes, zona residencial, Mar del Plata, Provincia de Buenos Aires. Un nuevo estilo de cabañas donde se combina la tranquilidad con la cercanía a la playa.</p>
        <Button variant="contained">ver mas</Button>
      </div>
      <div className='carrouselMain'>
        <h2>NUESTRAS CABAÑAS</h2>
        <p>Contamos con dos cabañas totalmente equipadas con todo lo necesario para su estadia. Una cabaña para 6 personas y otra para 4. Ambas comparten caracteristicas como garaje semicubierto, portón eléctrico e internet.</p>
      </div>
      <div className='ubicacionStyles'>
        <h3>UBICACIÓN</h3>
        <MapsComponent/>
        <p>Cabañas Colinas del Mar, se encuentran en Arana Y Goiri 2247, Punta Mogotes, Mar del Plata, Bs.As. Costa Atlántica. De allí bajando por Arana y Goiri, cruzando la avenida, se encuentra el complejo de balnearios.</p>
      </div>
    </div>
  )
}

export default MainComponent