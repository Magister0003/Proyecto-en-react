import React from 'react';
import {BsTelephoneFill} from "react-icons/bs";


class Contacto extends React.Component{
      render() {
        return (
<div className="container-xxl py-5" id="Contact">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="fs-5 fw-medium text-white">Contáctenos</p>
                <h1 className="display-5 mb-4">¿Necesita la ayuda de un expertos? ¡Está aquí!</h1>
                <p className="mb-4"></p>
                
                <a className="d-inline-flex align-items-center rounded overflow-hidden boder m-2 t" href='/'>
                    <span className="btn-lg-square primary ">
                        <BsTelephoneFill />
                    </span>
                    <span className="fs-5 fw-medium mx-4 text-white">316-1411928</span>
                </a>

            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <h2 className="mb-4">Contáctanos</h2>

                <form action="../php/enviar_correo.php" method="post" encType="multipart/form-data" className="row g-3"> 
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Tu Nombre" required />
                            <label htmlFor="nombre">Nombre</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Tu Correo Electrónico" required />
                            <label htmlFor="email">Correo Electrónico</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" name="movil" placeholder="Tu Teléfono" />
                            <label htmlFor="movil">Teléfono</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <select className="form-select" name="servicio">
                                <option selected>Otro</option>
                                <option value="Soporte">Soporte</option>
                                <option value="Venta Informática">Venta Informática</option>
                                <option value="Consultoría">Consultoría</option>
                                <option value="Implementación">Implementación</option>
                            </select>
                            <label htmlFor="servicio">Tipos de Servicios</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Deje un mensaje aquí" id="mensaje" name="mensaje" required style={{ height: '130px' }}></textarea>
                            <label htmlFor="mensaje">Mensaje</label>
                        </div>
                    </div>
                    <div className="col-12 text-center ">
                        <button className="btn btn3 btn-3 w-100" type="submit">Aplicar Ahora</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

        );
      }
    }
    
export default Contacto 