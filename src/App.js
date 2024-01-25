import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa el archivo de estilo de Bootstrap
import Navbar from './navbar';  // Asegúrate de que el nombre del archivo y del componente comience con mayúscula
import Fondo from './fondo';
import Certificacones from './certificaciones';
import About from './about';

function App() {
  return (
    <div>
      <Navbar />
      <Fondo />
      <Certificacones/>
      <About />
    </div>
  );
}

export default App;


