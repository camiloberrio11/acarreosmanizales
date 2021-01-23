import React from 'react';
import './bannercontacto.css';

const BannerContacto = () => {
  return (
    <>
      <section className="image-bg default-bg background-img-banner">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading light mx-auto">
                <h2>Contáctanos ya</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          {/* <form className="seo-report-form">
            <div className="row m-0 justify-content-center seo-contact mb-4">
              <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <div className="form-row">
                  <input
                    type="url"
                    className="form-control"
                    placeholder="Your Website URL"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="form-row">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <div className="form-row">
                  <button
                    type="submit"
                    className="btn-lg btn btn-warning full-width"
                  >
                    Get your Report!
                  </button>
                </div>
              </div>
            </div>
          </form> */}
        </div>
        <div className="ht-80"></div>
      </section>
      <div className="clearfix"></div>

      <section className="pd-0 overlay-top">
        <div className="container">
          <div className="row mrg-0 bg-white box-shadow pt-5 pb-3 border--radius">
            <div className="col-md-12 col-lg-12 mb-2">
              <div className="text-center">
                <h4>Our Partners & Famous Brands</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="partner-box mb-4">
                <div className="partner-box-thumb">
                  <img
                    src="assets/img/google.svg"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
                <div className="partner-box-caption">
                  <h5>Whatsapp</h5>
                  <span className="partner-info">Joined June 2010</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="partner-box mb-4">
                <div className="partner-box-thumb">
                  <img
                    src="assets/img/asana.png"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
                <div className="partner-box-caption">
                  <h5>Llamada</h5>
                  <span className="partner-info">Joined May 2010</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="partner-box mb-4">
                <div className="partner-box-thumb">
                  <img
                    src="assets/img/dropbox.svg"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
                <div className="partner-box-caption">
                  <h5>Email</h5>
                  <span className="partner-info">Joined April 2010</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>

      <div className="clearfix"></div>
    </>
  );
};

export default BannerContacto;
