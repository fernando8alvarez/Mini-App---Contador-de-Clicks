
import './App.css';
import Logo from './imagenes/Logo contador de clips.png';
import Boton  from './componentes/boton.jsx';
import Contador from './componentes/contador.jsx';
import {useState} from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () =>{
    setNumClicks(0);
  };
  
  return (
    <div className="App">
     <div className="contendedor-logo">
      <img src={Logo} alt="Logo de aplicacion contador de clips" className="logo-contador" />
     </div>

     <div className="contenedor-contador">
      <Contador numClicks={numClicks}/>
      <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick}/>
      <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
