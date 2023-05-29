import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../slice/loggedUserDetails/loggedUserSlice";
function MentorPanelSidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutFunction = () => {
        dispatch(onLogout());
        navigate('/')
    }
    return (
        <>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                    <Link className="nav-link active" to={`mentorPanel`}>Dashboard</Link>
                    </li>
                    <hr />
                    <li className="nav-item">
                    <Link className="nav-link active" to={`allTraineesProfile`}>Trainees Profile</Link>
                    </li>
                    <hr />
                    <li className="nav-item">
                    <Link className="nav-link active" to={`module`}>Module</Link>
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
    );
}

export default MentorPanelSidebar;