import './App.css';
import Testimonio from './Componentes/Testimonio';
import './Imagenes/testimonio-neco.gif'

function App() {
  return (
    <div className="App">
      <h1 className='titulo-freecodecamp'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <div className='contenedor-app'>
          <Testimonio nombre='Neco-Arc' pais='Argentina' empresa='Amazon' cargo='Ingeniera de Software' imagen='tuki' />
          <Testimonio nombre='Burunya' pais='Japon' empresa='Spotify' cargo='Ingeniera de Software' imagen='buru' />
          <Testimonio nombre='Nyanko' pais='Brasil' empresa='Google' cargo='Ingeniera de Software' imagen='nya' />
          <Testimonio nombre='Doridori' pais='Chile' empresa='Mercado Libre' cargo='Ingeniera de Software' imagen='nani' />
        </div>
    </div>
  );
}

export default App;
