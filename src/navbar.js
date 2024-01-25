import React from 'react';

class Navbar extends React.Component {

  render() {
    return (
        <div className="container-fluid bg-dark shadow sticky-top">
          <div className="container mx-auto"> {/* Aplicamos la clase mx-auto para centrar horizontalmente */}
            <nav className="navbar navbar-expand-lg bg-dark navbar-light p-lg-0 d-flex align-items-center"> {/* Aplicamos d-flex align-items-center para centrar verticalmente */}
              <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                <div className="navbar-nav align-items-center">
                  <a href="#home" className="nav-item nav-link active">Home</a>
                  <a href="#about" className="nav-item nav-link">Acerca de</a>
                  <a href="#servicios" className="nav-item nav-link">Servicios</a>
                  <div className="nav-item nav-link">
                    <div className="rounded-circle overflow-hidden logo-db">
                      DB
                    </div>
                  </div>
                  <a href="#project" className="nav-item nav-link">Proyectos</a>
                  <a href="form_login.php" className="nav-item nav-link">Intranet</a>  
                  <a href="#Contact" className="nav-item nav-link">Contactenos</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
    );
  }
}

export default Navbar;


