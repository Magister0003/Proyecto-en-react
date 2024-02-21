import React from 'react';



class Copy extends React.Component{
      render() {
        return (
          <div className="container-fluid copyright py-4">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                      &copy; <a className="fw-medium text-light" href="#">2024 Magister00</a>, All Right Reserved.
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                      Designed By <a className="fw-medium text-light" href="https://github.com/Magister0003/Proyecto-en-react.git">Magister00 </a>
                      Distributed By <a className="fw-medium text-light" href="https://github.com/Magister0003/Proyecto-en-react.git">Magister00 </a>
                  </div>
              </div>
          </div>
      </div>
        );
      }
    }
    
export default Copy