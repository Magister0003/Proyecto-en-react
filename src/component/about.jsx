import React, { Component } from 'react';
import fondo from '../assets/image/fondo.mp4';


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
      <div className="video-background position-relative">
      <video className="video-bg" autoPlay loop muted>
        <source src={fondo} type="video/mp4" />
      </video>
              <div className="container-fluid about position-relative z-index-1">
                <div className="container">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                      <button type="button" className="btn-play" onClick={() => window.location.href = "https://www.youtube.com/embed/DWRcNpR6Kdc"}><span></span></button>
                      </div>
                    </div>
                    <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
                      <div className="bg-dark rounded-top p-5 mt-lg-5">
                        <p className=" text-white fs-5 fw-medium">ACERCA DE MI</p>
                        <h4 className="mb-4">Soy <span>{this.state.textoCambiante}</span></h4>
                        <p className="text-white mb-4">Un desarrollador Front-End apasionado por crear experiencias web excepcionales.
                    Me especializo en el diseño y desarrollo de interfaces de usuario interactivas y amigables utilizando
                    las últimas tecnologías web.</p>
                        <div className="row g-5 py-5 mb-5">
                          <div className="col-sm-6">
                            
                            <h5 className="mb-3">Diseño Creativo</h5>
                            <span className='text-white'>Transformo ideas en interfaces visuales atractivas y funcionales, centrándome en la experiencia del usuario.</span>
                          </div>
                          <div className="col-sm-6">
                            
                            <h5 className="mb-3">Desarrollo Eficiente</h5>
                            <span className='text-white'>Utilizo tecnologías modernas para crear aplicaciones web rápidas, eficientes y receptivas.</span>
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
