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
                <h1 className="mb-4">
                  SEO <span className="theme-cl">Marketing</span> Strategy
                </h1>
                <p className="lead-i">
                  Take my traffic quiz and get a customized advice that will
                  walk you through how you can get more traffic.
                </p>
                <div className="btn-wrap mt-4">
                  <a href="#!" className="btn btn-primary btn-rounded btn-lg">
                    Find Out More
                  </a>
                  <a
                    href="#!"
                    data-toggle="modal"
                    data-target="#popup-video"
                    className="btn-trans-video ml-1"
                  >
                    <i className="ti-control-play"></i>Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 hidden-xs">
              <div className="hero-content">
                <img
                  src="https://via.placeholder.com/800x800"
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
