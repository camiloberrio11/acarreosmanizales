import React from 'react';

const PrincipalesServicios = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <h2>Principales servicios</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="features features-center style-1"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                <img
                  src="https://via.placeholder.com/350x350"
                  className="img-responsive"
                  alt=""
                />
                <h4>Trasteos</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="features features-center style-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src="https://via.placeholder.com/350x350"
                  className="img-responsive"
                  alt=""
                />
                <h4>Acarreos</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="features features-center style-1"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                <img
                  src="https://via.placeholder.com/350x350"
                  className="img-responsive"
                  alt=""
                />
                <h4>Transporte de elementos</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
};

export default PrincipalesServicios;
