import React from "react"
import { useSelector } from "react-redux"
import "./navbar.css"
import MentorPanelSidebar from "../MentorPanel/mentorPanelSideBar"
import brandLogo from "../../Image/logo.png"
import TraineePanelSidebar from "../TraineePanel/traineePanelSidebar"
import BellNotification from "../BellNotification/bellNotification"
import AdminPanelSidebar from "../AdminPanel/adminPanelSidebar"

const Navbar = () => {
  const LoggedUserData = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails || []
  )

  let sidebarComponent
  if (LoggedUserData.role === "Trainee") {
    sidebarComponent = <TraineePanelSidebar />
  } else if (LoggedUserData.role === "Lead") {
    sidebarComponent = <AdminPanelSidebar />
  } else {
    sidebarComponent = <MentorPanelSidebar />
  }

  return (
    <nav className="navbar text-light bg-primary">
      <div className="container-fluid">
        <p className="navbar-brand text-light">
          <img src={brandLogo} width={120} alt="bellIcon" />
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
          {sidebarComponent}
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)
