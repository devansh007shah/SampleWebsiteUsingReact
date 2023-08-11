import React from "react";

const Banner1Section = () => {
  return (
    <div>
      <div className="tittle top-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="section-tittle text-center mb-65">
                <h2>
                  <span>/ </span>OUR PROMISE AND VALUES
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="visit-tailor-area fix">
        <div className="tailor-offers">
          <div className="info-man text-center">
            <div className="head-cap">
              <h3>50</h3>
            </div>
            <p>Years of Experience</p>
          </div>
        </div>

        <div className="tailor-details">
          <div
            className="details-sinlge mb-30 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <h2>Our Promise</h2>
            <p>
              Etiam ultricies nisi vel augue. Praesent porttitor, nulla vitae
              posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut
              ipsum.
            </p>
            <p>
              Nisi vel augue. Praesent porttitor, nulla vitae posuere iaculis,
              arcu nisl dignissim dolor, a pretium mi sem.
            </p>
          </div>
          <div
            className="details-sinlge wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <h2>Our Promise</h2>
            <p>
              Etiam ultricies nisi vel augue. Praesent porttitor, nulla vitae
              posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut
              ipsum.
            </p>
            <p>
              Nisi vel augue. Praesent porttitor, nulla vitae posuere iaculis,
              arcu nisl dignissim dolor, a pretium mi sem.
            </p>
          </div>
          <a
            href="about.html"
            className="btn_01 visit-btn mt-15 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".6s"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner1Section;
