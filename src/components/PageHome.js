import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import { Parallax, Background } from 'react-parallax';

class PageHome extends Component {
  render() {
    let windowH = window.innerHeight;
    let navbarH = 62;
    let TotalH = windowH - navbarH;

    return (
      <Fragment>
        <section className="has-navbar-fixed"></section>
        <section className="section hero on-dark py-0">
          <Parallax
            bgImage='/assets/images/hero/1.jpg'
            bgImageAlt="..."
            strength={800}
          >
            <div style={{height: TotalH}} className="d-flex align-items-center hero-overlay">
              <div className="container relative">
                <div className="row">
                  <div className="col-md-11 col-lg-8 mx-auto text-center">
                    <h1 className="hero-heading wow fadeInDown">We design things with love and passion.</h1>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <img className="img-fluid wow zoomInDown" src="assets/images/v__4.jpg" alt="..."/>
              </div>
              <div className="col-md-5">
                <div className="header-group my-4 pr-md-4">
                  <h2 className="section-title wow slideInDown">Discover Our Range</h2>
                  <p className="wow slideInUp">
                    Analytics release series A financing launch party interaction design android angel investor.
                    Vesting period social media sales conversion
                    launch party rockstar incubator customer social proof graphical user interface technology supply chain.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="mt-5 wow fadeInLeft">
                  <p>
                    With its unrivalled payload capacity and mobility TATRA takes you farther than you thought is possible,
                    whether over the most extreme terrain or on the road. It is your reliable partner in any environment and climate.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img className="img-fluid mt-4 wow fadeInUp" src="assets/images/v__3.jpg" alt="..."/>
              </div>
              <div className="col-md-4">
                <img className="img-fluid mt-4 wow zoomIn" src="assets/images/v__2.jpg" alt="..."/>
              </div>
            </div>
          </div>
        </section>
        <section className="section on-dark py-0">
          <Parallax
            bgImage='/assets/images/bg/1.jpg'
            bgImageAlt="..."
            strength={800}
          >
            <div style={{height: 400}} className="d-flex align-items-center parallax-overlay">
              <div className="container relative">&nbsp;</div>
            </div>
          </Parallax>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-11 col-lg-9 mx-auto text-center">
                <div className="h-ex-block">
                  <h3 className="wow fadeInDown">
                    Tatra branded trucks are based primarily on the Tatra design concept, which has so far not been successfully imitated by anyone.
                  </h3>
                  <p className="h-lead wow fadeInUp">
                    Heavy trucks from Koprivnice are famous for their go-anywhere ability in most difficult terrains under extreme weather conditions, high reliability and excellent utility properties.  TATRA resists both to frosty weather and abnormally high desert temperatures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default PageHome
