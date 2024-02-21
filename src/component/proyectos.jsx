import React from 'react';
import foto from '../assets/image/Denyer.png';
import fondo from '../assets/image/fondo.mp4';


class Proyectos extends React.Component{
      render() {
        return (
            <div className="video-background position-relative">
            <video className="video-bg" autoPlay loop muted>
              <source src={fondo} type="video/mp4" />
            </video>
            <div className="container-xxl pt-5" id="project">
                <div className="container">
                    <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
                        style={{maxwidth: '500px'}}>
                        <p className="fs-5 fw-medium text-white">Con quien hemos trabajado</p>
                        <h1 className="display-5 mb-5">Hemos hecho muchos proyectos increíbles</h1>
                    </div>
                    <p className="fs-5 fw-medium text-white" >Desarrollo de Software</p>
                    <div className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="project-item mb-5">
                            <div className="position-relative">
                                <img className="img-fluid" src={foto} alt="" style={{height: '180px'}} />
                                <div className="project-overlay">
                                    <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-1.jpg"
                                        data-lightbox="project"><i className="fa fa-eye"></i></a>
                                    <a className="btn btn-lg-square btn-light rounded-circle m-1" href="https://www.gov.co/"><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div className="p-4">
                                <a className="d-block h5" href="/"></a>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
      }
    }
    
export default Proyectos 