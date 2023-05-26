import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router"
import { onLogout } from "../../slice/loggedUserDetails/loggedUserSlice";
import { Link } from 'react-router-dom';
const currentRole = {
    "Lead": ["dashboard", "Trainee", "module"],
    "Mentor": ["Dashboard", "module"],
}
function Navbar() {
    const LoggedUserData = useSelector(state => state.loggedUserReducer.loggedUserDetails || [])
    console.log(LoggedUserData.role, "Role");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutFunction = () => {
        dispatch(onLogout());
        navigate('/')
    }
    const routes = currentRole[LoggedUserData.role]
    return (
        <>
            <nav className="navbar text-light bg-primary">
                <div className="container-fluid">
                    <p className="navbar-brand text-light" >
                        Welcome
                    </p>
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
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {routes.map((route, index) => {
                                    return (<>
                                        <li className="nav-item" >

                                            <Link className="nav-link active" to={`/${route}`}><span className='text-capitalize'>{route}</span></Link>

                                        </li>
                                        <hr />
                                    </>)
                                })}
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" onClick={logoutFunction}>
                                        Logout
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;