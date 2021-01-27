import React, { FC, ReactElement } from 'react';
import './bannerprincipal.css';

const BannerPrincipal: FC = (): ReactElement => {
  return (
    <>
      <div className="hero-header dark-text jumbo-banner principal-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="hero-content">
                <h1 className="mb-4">Acarreos Manizales</h1>
                <p className="theme-cl">
                  Somos líderes en el trasteo y acarreos de elementos,
                  protegiendo cada uno de tus encomiendas de una forma segura.
                </p>
              </div>
            </div>
            <div className="col-md-5 hidden-xs">
              <div className="hero-content">
                <img
                  src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_800,w_800/v1611440615/trasteosbaratos/camiones-banner_w0afck.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default BannerPrincipal;
