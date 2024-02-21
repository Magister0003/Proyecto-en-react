import Bootstrap from '../assets/icon/bootstrap-5.png';
import Css from '../assets/icon/css-3.png';
import Html from '../assets/icon/html-5.png';
import Js from '../assets/icon/js.png';
import React, { useState } from 'react';

const Certificaciones = () => {
    const [showImage, setShowImage] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [Html, Css, Js, Bootstrap]; // Importa tus imágenes como sea necesario
    const cards = [
        { title: 'HTML', content: 'Esta certificación cubre los fundamentos del lenguaje de marcado HTML, incluyendo etiquetas, atributos y estructura de página. Aprender HTML es esencial para cualquier desarrollador web, ya que es el lenguaje básico para crear contenido web.' },
        { title: 'CSS', content: 'Con esta certificación de CSS, serás capaz de diseñar y estilizar sitios web de manera profesional. Aprenderás a utilizar selectores, propiedades y valores para crear diseños atractivos y receptivos que se adapten a diferentes dispositivos y pantallas.' },
        { title: 'JavaScript', content: 'En esta certificación de JavaScript, aprenderás sobre conceptos fundamentales como variables, funciones, condicionales y bucles. También explorarás temas más avanzados como manipulación del DOM, eventos y AJAX.' },
        { title: 'Bootstrap', content: 'Esta certificación de Bootstrap está diseñada para desarrolladores web que ya tienen conocimientos básicos de HTML, CSS y JavaScript. Se recomienda tener experiencia previa en el desarrollo web antes de inscribirse en este curso.' }
    ];
  
    const handleToggle = (index) => {
        setShowImage(!showImage);
        setActiveIndex(index); // Actualiza el índice activo al cambiar entre la imagen y el contenido
    };

    const renderCarouselItem = (imageSrc, title, index) => (
        <div className="carousel d-grid justify-items-center">
            {showImage ? (
                <div className="btn-square rounded-circle secondary p-4 mb-4 mx-3 icon">
                    <img className="d-block w-100 bor" src={imageSrc} alt={title} />
                </div>
            ) : (
                <div className="container" style={{ width: '10rem', height: '10rem' }}>
                    <p className='text-white' style={{ fontSize: '0.7rem' }}>{cards[index].content}</p>
                </div>
            )}
            <div className="carousel-controls mt-3">
                <button className="btn btn-primary" onClick={() => handleToggle(index)}>{title}</button>
            </div>
        </div>
    );
    return (
        /* Features Start */
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 feature-row">
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="feature-item  align-items-center  shadow  p-5">
                            {renderCarouselItem(Html, "HTML 5", 0)}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                        <div className="feature-item    shadow  p-5">
                            {renderCarouselItem(Css, "CSS 3", 1)}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="feature-item    shadow  p-5">
                            {renderCarouselItem(Js, "JavaScript", 2)}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                        <div className="feature-item    shadow  p-5">
                            {renderCarouselItem(Bootstrap, "Bootstrap 5", 3)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificaciones;