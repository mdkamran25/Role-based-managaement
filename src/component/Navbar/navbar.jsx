import React from "react"
import "./navbar.css"
import brandLogo from "../../assets/Image/logo.png"
import BellNotification from "../BellNotification/bellNotification"
import Sidebar from "../Sidebar/Sidebar"

const Navbar = () => {
  return (
    <nav className="navbar text-light bg-primary sticky-top">
      <div className="container-fluid">
        <p className="navbar-brand text-light mb-0">
          <img src={brandLogo} width={144} alt="bellIcon" />
        </p>
        <BellNotification />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <Sidebar />
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)
