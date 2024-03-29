/* eslint-disable no-undef */
import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { onLogout } from "../../slice/loggedUserDetails/loggedUserSlice"

function Sidebar() {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutFunction = () => {
    dispatch(onLogout())
    navigate("/")
  }

  const handleLinkClick = () => {
    const offcanvasNavbar = document.getElementById("offcanvasNavbar")
    if (offcanvasNavbar) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasNavbar)
      if (offcanvasInstance) {
        offcanvasInstance.hide()
      }
    }
  }

  return (
    <>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="dashboard"
              onClick={handleLinkClick}
            >
              Dashboard
            </Link>
          </li>
          <hr />
          {/* Trainee cannot see other trainee profile */}
          {loggedUser && loggedUser.role !== "Trainee" && (
            <>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="allTraineesProfile"
                  onClick={handleLinkClick}
                >
                  Trainees Profile
                </Link>
              </li>
              <hr />
            </>
          )}

          <li className="nav-item">
            <Link
              className="nav-link active"
              to="module"
              onClick={handleLinkClick}
            >
              Module
            </Link>
          </li>
          <hr />
          <li className="nav-item">
            <a className="nav-link active" href="#" onClick={logoutFunction}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
