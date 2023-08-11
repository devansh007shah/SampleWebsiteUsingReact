import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area footer-padding">
        <div className="footer-wrapper">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-logo mb-25">
                      <a href="index.html">
                        <img src="assets/img/logo/logo2_footer.png" alt />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam.
                        </p>
                      </div>
                    </div>

                    <ul className="footer-social">
                      <li>
                        <a href="https://bit.ly/sai4ull">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Navigation</h4>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Contact</h4>
                    <ul>
                      <li>
                        <a href="#">87/A, Green lane, CA 6732</a>
                      </li>
                      <li>
                        <a href="#">Real State</a>
                      </li>
                      <li className="number2">
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="bcd5d2dad3fcd6d3cfddd2dfd0d5dfd792dfd3d1"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </li>
                      <li className="number">
                        <a href="#">+10 236 327 3782</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Subscribe Newsletter</h4>
                  </div>

                  <div className="footer-form">
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get"
                        className="subscribe_form relative mail_part"
                        novalidate="true"
                      >
                        <input
                          type="email"
                          name="EMAIL"
                          id="newsletter-form-email"
                          placeholder="  Enter your email"
                        />
                        <div className="form-icon">
                          <button
                            type="submit"
                            name="submit"
                            id="newsletter-submit"
                            className="email_icon newsletter-submit button-contactForm"
                          >
                            Subscribe
                          </button>
                        </div>
                        <div className="mt-10 info"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12">
                    <div className="footer-copy-right text-center">
                      <p>
                        Copyright &copy;
                        <script
                          data-cfasync="false"
                          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                        ></script>
                        <script>
                          document.write(new Date().getFullYear());
                        </script>
                        All rights reserved | This template is made with
                        <i
                          className="fa fa-heart color-danger"
                          aria-hidden="true"
                        ></i>
                        by
                        <a
                          href="https://colorlib.com"
                          target="_blank"
                          rel="nofollow noopener"
                        >
                          Colorlib
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
