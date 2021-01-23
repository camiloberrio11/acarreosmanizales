import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer className="bg-cover skin-dark-footer img-footer-ppal">
        <div className="ht-80"></div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Contacto</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#!">Whatsapp</a>
                    </li>
                    <li>
                      <a href="#!">Llamar</a>
                    </li>
                    <li>
                      <a href="#!">Correo</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Trasteos Manizales</h4>
                  <p>Manizales, Colombia</p>
                  <p>trasteosmanizales.com@gmail.com</p>
                  <p>3125156261</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Síguenos</h4>
                  <ul className="footer-bottom-social">
                    <li>
                      <a href="#!">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">{new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
