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
                  Que estas esperando para realizar tu trasteo/acarreo de una
                  forma segura y con la mayor confiabilidad del mercado,
                  contáctanos y te daremos toda la información.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ht-80"></div>
      </section>
      <div className="clearfix"></div>

      <section className="pd-0 overlay-top">
        <div className="container">
          <div className="row mrg-0 bg-white box-shadow pt-5 pb-3 border--radius">
            <div className="col-md-12 col-lg-12 mb-2">
              <div className="text-center">
                <h4>Utiliza nuestros canales de información</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="partner-box mb-4">
                <div className="partner-box-thumb">
                  <img
                    src="https://res.cloudinary.com/dupegtamn/image/upload/v1611439383/trasteosbaratos/Logo-WhatsApp_dt9mu3.png"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
                <div className="partner-box-caption">
                  <h5>Whatsapp</h5>
                  <a href="#!" className="partner-info">
                    Haz click para escribirnos
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="partner-box mb-4">
                <div className="partner-box-thumb">
                  <img
                    src="https://res.cloudinary.com/dupegtamn/image/upload/v1611439601/trasteosbaratos/logo-llamada_rxlmnq.png"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
                <div className="partner-box-caption">
                  <h5>Llamada</h5>
                  <a href="#!" className="partner-info">
                    Haz click para llamarnos
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="partner-box mb-4">
                <div className="partner-box-thumb">
                  <img
                    src="https://res.cloudinary.com/dupegtamn/image/upload/v1611439600/trasteosbaratos/logo-coreo_ulfzg2.jpg"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
                <div className="partner-box-caption">
                  <h5>Email</h5>
                  <a href="#!" className="partner-info">
                    Haz click para escribirnos
                  </a>
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
