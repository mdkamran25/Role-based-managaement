import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router"
import "./MentorPanel.css";
import { onLogout } from "../../slice/mentor/mentorLoginSlice";
import TraineeAssignedToMentor from "./TraineeAssignedToMentor/traineeAssignedToMentor";
;

function MentorPanel() {
    const loggedUser = useSelector((state)=> state.mentorLoginReducer.loggedUserDetails)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const logoutFunction = ()  => {
        dispatch(onLogout());
        navigate('/')
    }
    console.log(loggedUser,"loggeduser")
    
    return (
    <>
      <nav className="navbar text-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Welcome {loggedUser[0].name}
          </a>
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
            tabIndex="-1"
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
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Task
                  </a>
                </li>
                <hr />
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={logoutFunction}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> 
      <TraineeAssignedToMentor />
    </>
  );
}

export default MentorPanel;
