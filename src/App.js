import React from 'react'; // Importa el archivo de estilo de Bootstrap
import Navbar from './component/navbar';  // Asegúrate de que el nombre del archivo y del componente comience con mayúscula
import Fondo from './component/fondo';
import Certificacones from './component/certificaciones';
import About from './component/about';
import Portafolios from './component/portafolios'
import Proyectos from './component/proyectos'
import Contacto from './component/contacto';
import Footer from './component/footer';
import Copy from './component/copyright';



function App() {
  return (
    <div>
      <Navbar />
      <Fondo />
      <Certificacones/>
      <About />
      <Portafolios />
      <Proyectos />
      <Contacto />
      <Footer/>
      <Copy/>
      
    </div>
  );
}

export default App;


