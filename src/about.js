import React, { Component } from 'react';
import fondo from './assets/image/fondo.mp4';


class About extends Component {
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
      /* Acerca de Comienza */
            <div className="video-container position-relative">
              <video className="w-100 h-100 position-absolute top-0 start-0" autoPlay loop muted>
                <source src={fondo} type="video/mp4" />
              </video>
              <div className="container-fluid about my-5 position-relative z-index-1">
                <div className="container">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                          data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                          <span></span>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
                      <div className="bg-white rounded-top p-5 mt-lg-5">
                        <p className="fs-5 fw-medium">Acerca de mi </p>
                        <h1 className="display-6 mb-4">Soy <span>{this.state.textoCambiante}</span></h1>
                        <p className="mb-4">Un desarrollador Front-End apasionado por crear experiencias web excepcionales.
                    Me especializo en el diseño y desarrollo de interfaces de usuario interactivas y amigables utilizando
                    las últimas tecnologías web.</p>
                        <div className="row g-5 py-5 mb-5">
                          <div className="col-sm-6">
                            
                            <h5 className="mb-3">Diseño Creativo</h5>
                            <span>Transformo ideas en interfaces visuales atractivas y funcionales, centrándome en la experiencia del usuario.</span>
                          </div>
                          <div className="col-sm-6">
                            
                            <h5 className="mb-3">Desarrollo Eficiente</h5>
                            <span>Utilizo tecnologías modernas para crear aplicaciones web rápidas, eficientes y receptivas.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
      /* Acerca de Finaliza */
    );
  }
}

export default About;
