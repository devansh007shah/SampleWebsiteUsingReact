import React from "react";

const Banner2Section = () => {
  return (
    <div>
      <section className="home-blog section-bg1">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9 col-md-8">
              <div className="section-tittle section-tittle2 mb-60">
                <h2>
                  <span>/ </span>Services We Offer
                </h2>
              </div>
            </div>
          </div>
          <div className="items-active owl-carousel">
            <div className="single-blogs single-blogs2">
              <div className="blog-img">
                <a href="#">
                  <img src="assets/img/gallery/blog1.jpg" alt />
                </a>
                <a href="services.html" className="blog-btn">
                  View Details
                </a>
              </div>
              <div className="blogs-cap">
                <h5>
                  <a href="#">Architecture</a>
                </h5>
                <p>
                  Etiam ultricies nisi vel augue. Praesent porttitor, nulla
                  vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                  sem ut ipsum.
                </p>
              </div>
            </div>
            <div className="single-blogs single-blogs2">
              <div className="blog-img">
                <a href="#">
                  <img src="assets/img/gallery/blog2.jpg" alt />
                </a>
                <a href="services.html" className="blog-btn">
                  View Details
                </a>
              </div>
              <div className="blogs-cap">
                <h5>
                  <a href="#">Construction</a>
                </h5>
                <p>
                  Etiam ultricies nisi vel augue. Praesent porttitor, nulla
                  vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                  sem ut ipsum.
                </p>
              </div>
            </div>
            <div className="single-blogs single-blogs2">
              <div className="blog-img">
                <a href="#">
                  <img src="assets/img/gallery/blog3.jpg" alt />
                </a>
                <a href="services.html" className="blog-btn">
                  View Details
                </a>
              </div>
              <div className="blogs-cap">
                <h5>
                  <a href="#">Renovation</a>
                </h5>
                <p>
                  Etiam ultricies nisi vel augue. Praesent porttitor, nulla
                  vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                  sem ut ipsum.
                </p>
              </div>
            </div>
            <div className="single-blogs single-blogs2">
              <div className="blog-img">
                <a href="#">
                  <img src="assets/img/gallery/blog2.jpg" alt />
                </a>
                <a href="services.html" className="blog-btn">
                  View Details
                </a>
              </div>
              <div className="blogs-cap">
                <h5>
                  <a href="#">Construction</a>
                </h5>
                <p>
                  Etiam ultricies nisi vel augue. Praesent porttitor, nulla
                  vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi
                  sem ut ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery-area">
        <div className="container-fluid p-0 fix">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0">
              <div className="single-gallery mb-30">
                <div
                  className="gallery-img"
                  style={{
                    backgroundImage: "url(assets/img/gallery/gallery1.jpg)",
                  }}
                ></div>
                <div className="thumb-content-box">
                  <div className="thumb-content">
                    <div className="capt">
                      <h3>Energy Station</h3>
                      <p>
                        Etiam ultricies nisi vel augue. Praesent porttitor,
                        nulla
                        <br />
                        vitae posuere iaculis, arcu nisl dignissim dolor.
                      </p>
                    </div>
                    <a href="project.html">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0">
              <div className="single-gallery mb-30">
                <div
                  className="gallery-img"
                  style={{
                    backgroundImage: "url(assets/img/gallery/gallery2.jpg)",
                  }}
                ></div>
                <div className="thumb-content-box">
                  <div className="thumb-content">
                    <div className="capt">
                      <h3>Energy Station</h3>
                      <p>
                        Etiam ultricies nisi vel augue. Praesent porttitor,
                        nulla
                        <br />
                        vitae posuere iaculis, arcu nisl dignissim dolor.
                      </p>
                    </div>
                    <a href="project.html">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0">
              <div className="single-gallery mb-30">
                <div
                  className="gallery-img"
                  style={{
                    backgroundImage: "url(assets/img/gallery/gallery1.jpg)",
                  }}
                ></div>
                <div className="thumb-content-box">
                  <div className="thumb-content">
                    <div className="capt">
                      <h3>Energy Station</h3>
                      <p>
                        Etiam ultricies nisi vel augue. Praesent porttitor,
                        nulla
                        <br />
                        vitae posuere iaculis, arcu nisl dignissim dolor.
                      </p>
                    </div>
                    <a href="project.html">
                      <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2Section;
