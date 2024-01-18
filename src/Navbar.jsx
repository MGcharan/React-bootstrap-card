import React from 'react';
// import("bootstrap")


function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{marginBottom:"3rem"}} >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Architecture of Tamil Nadu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Commands
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Commands
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Commands
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
      
          {/* <form className="d-flex">
            <button className="btn btn-outline-dark" href="#!" type="submit">
            <i class="bi bi-cart me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{cartValue}</span>
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;