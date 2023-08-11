import React from "react";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="header-info-left d-flex align-items-center">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" />
                    </a>
                  </div>

                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="#">Service</a>
                        </li>
                        <li>
                          <a href="#">Project</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="#">Blog</a>
                            </li>
                            <li>
                              <a href="#">Blog Details</a>
                            </li>
                            <li>
                              <a href="#">Elements</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header-righ">
                  <ul>
                    <li>
                      <form className="search-form" action="#">
                        <i className="fas fa-search"></i>
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search Here"
                          title="Search here"
                        />
                      </form>
                    </li>
                    <li className="header-right-btn">
                      <a href="#" className="header-btn">
                        Free Quote
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
