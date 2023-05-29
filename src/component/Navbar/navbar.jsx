import React, { } from 'react';
import { useSelector } from "react-redux";
import './navbar.css';
import MentorPanelSidebar from '../MentorPanel/mentorPanelSideBar';
import brandLogo from "../../Image/logo.png";
import TraineePanelSidebar from '../TraineePanel/traineePanelSidebar';
import BellNotification from '../BellNotification/bellNotification';



const Navbar = () => {
    const LoggedUserData = useSelector(state => state.loggedUserReducer.loggedUserDetails || []);
    console.log(LoggedUserData.role, "Role");
    
   
    return (
        <>
            <nav className="navbar text-light bg-primary">
                <div className="container-fluid">
                    <p className="navbar-brand text-light" >
                        <img src={brandLogo} width={120} alt="bellIcon"/>
                    </p>
                    <BellNotification task={LoggedUserData.tasks}/>
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
                        {LoggedUserData.role === "Trainee" ? <TraineePanelSidebar /> : <MentorPanelSidebar />}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default React.memo(Navbar);
