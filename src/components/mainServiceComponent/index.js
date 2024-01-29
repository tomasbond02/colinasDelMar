import React from 'react'
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import './styles.css';

function MainService() {
    return (
        <div className='service-content'>
            <div className='service-styles'>
                <h1>SERVICIOS</h1>
                <div>
                    <li>Ropa blanca para todos los huespedes</li>
                    <li>Vajilla completa</li>
                    <li>Aire acondicionado</li>
                    <li>Servicio de internet y television por cable</li>
                    <li>Estacionamiento semicubierto</li>
                </div>
                <p>Limitamos la admisión de mascotas, por favor, consúltenos previamente.</p>
            </div>
            <div>
                <p>imagen</p>
            </div>
            <div>
                <div className='rullers-styles'>
                    <h2>REGLAMENTO INTERNO</h2>
                    <li>ESTADIA. Se debe abonar la totalidad del saldo al ingresar y en efectivo.</li>
                    <li>CHECK IN: A partir de las 15.00hs.</li>
                    <li>CHECK OUT: Hasta las 10.00hs</li>
                    <li>MEDIO AMBIENTE. Los espacios verdes y de uso común se cuidarán en todos sus aspectos. Evite la contaminación sonora, especialmente en los horarios habituales de descanso.</li>
                    <li>ARTEFACTOS. Al retirarse de la cabaña o cuando no se utilice apagar todos los artefactos eléctricos (aire acondicionado, luces, calefactores, tv, etc). No está permitido retirar elementos de las cabañas para llevarlos a excursiones o paseos. Recomendamos comunicar cualquier rotura o desperfecto de artefactos para su pronta reposición.</li>
                    <li>PERTENENCIAS. La administración no se responsabiliza por los objetos perdidos, no deje en la cabaña elementos de valor ni dinero.</li>
                    <li>MASCOTAS. Admisión limitada de pequeñas mascotas, consúltenos por su previa autorización. De ser admitidas, las mismas deberán estar siempre con sus dueños, no pudiendo permanecer solas en la unidad.</li>
                    <li>ADMISION. Colinas Del Mar se reserva el derecho de admisión y/o permanencia, pudiendo exigir el retiro inmediato de quien no cumpliera este reglamento.</li>
                </div>
                <div className='smoke-free-style'>
                    <SmokeFreeIcon />
                </div>
            </div>
        </div>
    )
}

export default MainService