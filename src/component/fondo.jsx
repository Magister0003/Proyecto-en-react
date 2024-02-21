import fondo from '../assets/image/fondo.mp4';
import '../css/index.css';
import React, { Component } from 'react';


class Fondo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoCambiante: 'Desarrollador Frond-end', // Texto inicial
    };
  }

  componentDidMount() {
    // Iniciar la animación de texto cambiante
    this.intervaloTexto = setInterval(() => {
      // Cambiar el texto cada cierto intervalo de tiempo
      this.setState((prevState) => ({
        textoCambiante: prevState.textoCambiante === 'Desarrollador Frond-end' ? 'Creador de Interfaces Atractivas' : 'Diseñandor de Experiencias de Usuario',
      }));
    }, 3000); // Cambia el texto cada 3000 milisegundos (3 segundos)
  }

  componentWillUnmount() {
    // Limpiar el intervalo al desmontar el componente
    clearInterval(this.intervaloTexto);
  }

  render() {
    return (
      /* Inicio del Carrusel */
      <div className="container-fluid px-0 ">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* Reemplaza 'ruta/de/tu/imagen.jpg' con la ruta real de tu imagen */}
              <video className='video' autoPlay loop muted>
                <source src={fondo} type="video/mp4"></source>
          
              </video>
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 text-start">
                      <p className="fs-2 text-white animated slideInRight">Bienvenido Soy <strong style={{color: '#e51a4c'}}>Denyer Bastidas</strong>
                      </p>
                      <h1 className="display-2 mb-4 animated  slideInRight" style={{color: '#e51a4c'}}>Soy <span>{this.state.textoCambiante}</span></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      /* Fin del Carrusel */
    );
  }
}

export default Fondo;



