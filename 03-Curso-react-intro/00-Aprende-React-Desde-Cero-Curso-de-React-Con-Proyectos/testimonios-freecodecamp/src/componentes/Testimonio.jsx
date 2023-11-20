import React from 'react';
import '../styles/Testimonio.css'

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Fotode Emma'
        />
      <div className='contenedor-texto-testimonio'>
        <p className='contenedor-texto-testimonio'></p>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
// exportacion por defecto => inidca que es lo unico que se va importar 
// export default Testimonio;
// Exportacion nombrada, podemos exportar varios componentes de un archivo
export { Testimonio };