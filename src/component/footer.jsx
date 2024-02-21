import React from 'react';
import fondo from '../assets/image/fondo.mp4';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import foto from '../assets/image/Denyer.png';



class Footer extends React.Component{
      render() {
        return (
      /* Acerca de Comienza */

    <div className="video-background position-relative">
      <video className="video-bg" autoPlay loop muted>
        <source src={fondo} type="video/mp4" />
      </video>
        <div className="container-fluid">
        <footer className=" text-light">
      <div className="container mx-auto py-5">
        <div className="row">
          <div className="col-4 col-md-3 text-center ">
          <h5 className=''>Mas sobre mi</h5>
            <div className="d-grid justify-items-center">
            
                  <div className="rounded-circle overflow-hidden my-2 logo-db">
                    <img className='img-fluid' src={foto} alt="" />
                  </div>
                    
                    <p className="text-white mb-2">En mis redes Sociales</p>
                    <div className="d-flex justify-items-center pt-3">
                        <a className="btn btn-square btn-light rounded-circle me-2 p-1" href="https://www.facebook.com/DBER19?locale=es_LA">
                        <FaFacebookF /></a>
                        <a className="btn btn-square btn-light rounded-circle me-2 p-1" href="https://api.whatsapp.com/send?phone=3161411928">
                        <IoLogoWhatsapp /></a>
                        <a className="btn btn-square btn-light rounded-circle me-2 p-1" href="https://www.youtube.com/@magister0050/videos">
                        <IoLogoYoutube /></a>
                        <a className="btn btn-square btn-light rounded-circle me-2 p-1" href="https://github.com/Magister0003/Proyecto-en-react.git">
                        <FaGithub /></a>
                    </div>
            </div>
          </div>
          <div className="col-4 col-md-3 text-center">
                    <h5 className="">Enlaces rápidos</h5>
                  <div className="d-grid">
                  <a className="btn text-white" href="#home">Home</a>
                    <a className="btn text-white" href="#about">Acerca de</a>
                    <a className="btn text-white" href="#servicios">Servicios</a>
                    <a className="btn text-white" href="#project">Proyectos</a>
                    <a className="btn text-white" href="#Contact">Contactenos</a>
                  </div>
          </div>
          <div className="col-4 col-md-3 text-center">
          <h5 className="">Horas de trabajo</h5>
          <div className="d-grid">
          <p className="mb-1">Lunes - Viernes</p>
          <h6 className="text-light">08:00am a 12:00pm </h6>
          <h6 className="text-light">01:30pm a 05:30pm</h6>
          <p className="mb-1">Sábado</p>
          <h6 className="text-light">08:00am a 12:00pm</h6>
          </div>

          </div>
          <div className="col-4 col-md-3 text-center ">
            {/* Información de contacto */}
            <div className="text-start">
              <h5>Contactos</h5>
              <p><strong>Teléfono:</strong> 316-1411928</p>
              <p><strong>Correo:</strong> Dbastidas00@gmail.com</p>
              <p><strong>Dirección:</strong> Cali, Colombia</p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
        </div>
    </div>
        );
      }
    }
    
export default Footer 