import React from "react";

const Banner3Section = () => {
  return (
    <div>
      <section className="about-area section-padding">
        <div className="container wrapper-border">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="about-img">
                <img src="assets/img/gallery/about1.jpg" alt />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9">
              <div className="about-caption">
                <div className="section-tittle section-tittle2 mb-25">
                  <h2>Unique Apartment Formats</h2>
                  <p className="pt-20 pb-20">
                    Etiam ultricies nisi vel augue. Praesent porttitor, nulla
                    vitae posuere iaculis, arcu nisl dignissim dolor, a pretium
                    mi sem ut ipsum. Ultricies nisi vel augue. Praesent
                    porttitor, nulla vitae posuere iaculis, arcu nisl dignissim
                    dolor, a pretium mi sem ut ipsum.
                  </p>
                  <a href="#" className="btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner3Section;
