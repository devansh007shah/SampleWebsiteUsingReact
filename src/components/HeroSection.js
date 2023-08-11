import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="slider-area position-relative">
        <div className="slider-active">
          <div className="single-slider slider-bg2 slider-height hero-overly d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-xl-9 col-lg-9 col-md-11 col-sm-10">
                  <div className="hero-caption">
                    <div className="stock-text">
                      <h2>Construction</h2>
                      <h2>Construction</h2>
                    </div>
                    <h1 data-animation="pulse" data-delay=".4s">
                      Innovation starts with a dream and a plan
                    </h1>
                    <span
                      data-animation="fadeInUp"
                      data-delay=".3s"
                      style={{ animationDelay: "0.3s" }}
                      class
                    >
                      <a href="#">Discover Work</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-footer section-bg d-none d-sm-block">
        <div className="footer-wrapper">
          <div className="single-caption">
            <div className="heading-cap">
              <h2>
                We are
                <br />
                here to
                <br />
                help you
              </h2>
            </div>
          </div>

          <div
            className="single-caption wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="caption">
              <div className="icon">
                <img src="assets/img/icon/call.svg" alt />
              </div>
              <div className="contact-cap">
                <h4>Call Us</h4>
                <p>
                  1-800-506-266
                  <br />
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="b1d2dedfc5d0d2c5f1d2dedfd6dec3de9fd2dedc"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="single-caption d-none d-lg-block wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".4s"
          >
            <div className="caption">
              <div className="icon">
                <img src="assets/img/icon/air.svg" alt />
              </div>
              <div className="contact-cap">
                <h4>Location</h4>
                <p>
                  1-800-506-266
                  <br />
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="b6d5d9d8c2d7d5c2f6d5d9d8d1d9c4d998d5d9db"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="single-caption d-none d-xl-block wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            <div className="caption">
              <div className="icon">
                <img src="assets/img/icon/time.svg" alt />
              </div>
              <div className="contact-cap">
                <h4>Opening Hour</h4>
                <p>
                  1-800-506-266
                  <br />
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="5a3935342e3b392e1a3935343d35283574393537"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
