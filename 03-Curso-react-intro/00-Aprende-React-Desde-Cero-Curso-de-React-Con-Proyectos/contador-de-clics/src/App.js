import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import { Contador } from './componentes/Contador';
import  freeCodeCampLogo from './imagenes/freecodecamp-logo.png';


function App() {

  const [numClics,setNumClics] = useState(0);

  const manejarClic = () => {
    console.log("Clic")
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    console.log("Reiniciar")
    setNumClics(0);
  };

  return (
    <div className ="App">
      <div className ='freeecodecamp-logo-contenedor'>
        <img 
          className ='freecodecamp-logo'
          src = {freeCodeCampLogo}
          alt='Log de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
