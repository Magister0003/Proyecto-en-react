import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import foto from '../assets/image/Denyer.png';


class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 300) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  };

  render() {
    const { isSticky } = this.state;
    const stickyClass = isSticky ? 'sticky-top shadow-sm' : 'sticky-top';
    
    return (
      <div className={`container-fluid shadow ${stickyClass}`}>
        
        <div className="container mx-auto">
          <nav className="navbar bor navbar-expand-lg navbar-dark bg-dark p-lg-1 d-flex align-items-center nav-height">
            
          
                <div className="nav-item nav-link d-lg-none bg-dark mt-0 p-2 shadow rounded-circle overflow-hidden">
                  <div className="rounded-circle overflow-hidden logo-db">
                    <img className='img-fluid' src={foto} alt="" />
                  </div>
                </div>
         
          <button type="button" className="navbar-toggler mb-4 me-2" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" ></span>
          </button>

            <div className="collapse navbar-collapse bg-dark justify-content-center" id="navbarCollapse">
              <div className="navbar-nav align-items-center">
                <a href="#home" className="nav-item nav-link  active">Home</a>
                <a href="#about" className="nav-item nav-link ">Acerca de</a>
                <a href="#servicios" className="nav-item nav-link ">Servicios</a>
                <div className="nav-item nav-link bg-dark mt-5 shadow rounded-circle overflow-hidden">
                  <div className="rounded-circle overflow-hidden logo-db">
                  <img className='img-fluid' src={foto} alt="" />
                  </div>
                </div>
                <a href="#project" className="nav-item nav-link ">Proyectos</a>
                <a href="#Contact" className="nav-item nav-link ">Contactenos</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
    );
  }
}

export default Navbar;



