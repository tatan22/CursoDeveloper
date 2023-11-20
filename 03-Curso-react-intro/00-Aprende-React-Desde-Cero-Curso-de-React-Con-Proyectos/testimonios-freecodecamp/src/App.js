import './App.css';
import { Testimonio } from './componentes/Testimonio';

// const testigo{
//   nombre
// }

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio
          nombre='Emma Bostian'
          pais= 'Suecia'
          imagen = 'emma'
          cargo = 'Ingeniera de Software'
          empresa = 'Spotifi'
          testimonio = 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio
          nombre='Emma Bostian'
          pais= 'Suecia'
          imagen = 'emma'
          cargo = 'Ingeniera de Software'
          empresa = 'Spotifi'
          testimonio = 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
        <Testimonio
          nombre='Emma Bostian'
          pais= 'Suecia'
          imagen = 'emma'
          cargo = 'Ingeniera de Software'
          empresa = 'Spotifi'
          testimonio = 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
      </div>
    </div>
  );
}

export default App;
