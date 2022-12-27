import React from 'react'
import OpenAutoLogo from '../assets/images/OpenAuto_logo.png';

export default function Header() {

  return (
    <header>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={OpenAutoLogo} className="w-75" /></a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link ms-4" aria-current="page" href="#"><i className="fa fa-phone me-2" aria-hidden="true"></i>
                  +769 586 4558</a>
              </li>
              <li className="nav-item">
              <a className="nav-link ms-4" href="#"><i className="fa fa-envelope me-2" aria-hidden="true"></i>
                  service@openauto.ca</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button type="button" className="btn btn-outline-secondary rounded-pill ms-4">Download the mobile app</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}
