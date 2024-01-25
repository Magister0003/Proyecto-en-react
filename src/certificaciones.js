import Bootstrap from './assets/icon/bootstrap-5.png';
import Css from './assets/icon/css-3.png';
import Html from './assets/icon/html-5.png';
import Js from './assets/icon/js.png';
import React, { Component } from 'react';


class Certificaciones extends React.Component {

  render() {
    return (
        /* Features Start */
        <div className="container-xxl pt-5">
            <div className="container">
                <div className="row g-0 feature-row">
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                        <div className="feature-item border  shadow h-100 p-5">
                            <div className="btn-square bg-white rounded-circle mb-4" style={{width: '64px', height: '64px',}}>
                            <img src={Html} alt="Tu Foto" className="img-fluid" />
                            </div>
                            <h5 className="mb-3">HTML5</h5>
                            <p className="mb-0 active">100%</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                        <div className="feature-item border  shadow h-100 p-5">
                            <div className="btn-square bg-white rounded-circle mb-4" style={{width: '64px', height: '64px',}}>
                            <img src={Css} alt="Tu Foto" className="img-fluid" />
                            </div>
                            <h5 className="mb-3">CSS3</h5>
                            <p className="mb-0 active">100%</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                        <div className="feature-item border  shadow h-100 p-5">
                            <div className="btn-square bg-white rounded-circle mb-4" style={{width: '64px', height: '64px',}}>
                            <img src={Js} alt="Tu Foto" className="img-fluid" />
                            </div>
                            <h5 className="mb-3">JS</h5>
                            <p className="mb-0 active">50%</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                        <div className="feature-item border  shadow h-100 p-5">
                            <div className="btn-square bg-white rounded-circle mb-4" style={{width: '64px', height: '64px',}}>
                            <img src={Bootstrap} alt="Tu Foto" className="img-fluid" />
                            </div>
                            <h5 className="mb-3">Bootstrap 5</h5>
                            <p className="mb-0 active">100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Certificaciones;