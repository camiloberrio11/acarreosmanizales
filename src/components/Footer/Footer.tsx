import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer
        className="bg-cover skin-dark-footer img-footer-ppal"
      >
        <div className="ht-80"></div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Useful links</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#!">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#!">Business & Corporate</a>
                    </li>
                    <li>
                      <a href="#!">Landing Page</a>
                    </li>
                    <li>
                      <a href="#!">Hire & Dedicate</a>
                    </li>
                    <li>
                      <a href="#!">Software & App</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Useful links</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="#!">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#!">Business & Corporate</a>
                    </li>
                    <li>
                      <a href="#!">Landing Page</a>
                    </li>
                    <li>
                      <a href="#!">Hire & Dedicate</a>
                    </li>
                    <li>
                      <a href="#!">Software & App</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Useful links</h4>
                  <p>7744 North Park Place</p>
                  <p>support@Unico77.com</p>
                  <p>777-444-2222</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Follow Us</h4>
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

                  <form className="signup-frm mt-4">
                    <input
                      type="email"
                      className="form-control sigmup-me"
                      placeholder="Your Email Address"
                    />
                    <button type="submit" className="btn btn-primary">
                      <i className="ti-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">
                  © 2019 Unico. Designd By{' '}
                  <a href="https://Themezhub.com">Themezhub</a> All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
