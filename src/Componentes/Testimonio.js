import React from 'react'
import '../Hojas de estilos/Testimonio.css'

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require(`../Imagenes/testimonio-${props.imagen}.gif`)} alt='Neco-Arc'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><span className='texto-negrita'>{props.nombre}</span> en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo} en <span className='texto-negrita'>{props.empresa}</span></p>
          <p className='texto-testimonio'>"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniera de software. <span className='texto-negrita'>freeCodeCamp cambió mi vida."</span></p>
        </div>
    </div>
  )
}

export default Testimonio