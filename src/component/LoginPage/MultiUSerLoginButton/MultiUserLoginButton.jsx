import React, { useState } from "react";
import "./MultiUserLoginButton.css";
import { useNavigate } from "react-router-dom";
import AdminLogin from "../AdminLogin/adminLogin";
import MentorLogin from "../MentorLogin/mentorLogin";
import TraineeLogin from "../TraineeLogin/traineeLogin";
function MultiUserLoginButtton() {
  const navigate = useNavigate();
  const [adminLogin, setAdminLogin] = useState(true);
  const [mentorLogin, setMentorLogin] = useState(false);
  const [traineeLogin, setTraineeLogin] = useState(false);

  const adminLoginActive = () => {
    setAdminLogin(true);
    setMentorLogin(false);
    setTraineeLogin(false);
  };

  const mentorLoginActive = () => {
    setAdminLogin(false);
    setMentorLogin(true);
    setTraineeLogin(false);
  };

  const traineeLoginActive = () => {
    setAdminLogin(false);
    setMentorLogin(false);
    setTraineeLogin(true);
  };
  return (
    <>
      <div className="container btn-container p-0 rounder-3 col-11 rounded-3 col-sm-11 col-lg-10 d-flex flex-row ">
        <div className="AdminLogin col-4">
          <button
            className={`btn ${adminLogin ? "active" : ""} w-100`}
            onClick={() => adminLoginActive()}
          >
            Admin
          </button>
        </div>
        <div className="MentorLogin col-4">
          <button
            className={`btn ${mentorLogin ? "active" : ""} w-100`}
            onClick={() => mentorLoginActive()}
          >
            Mentor
          </button>
        </div>
        <div className="TraineeLogin col-4">
          <button
            className={`btn ${traineeLogin ? "active" : ""} w-100`}
            onClick={() => traineeLoginActive()}
          >
            Trainee
          </button>
        </div>
      </div>
        {adminLogin && <AdminLogin />}
        {mentorLogin && <MentorLogin />}
        {traineeLogin && <TraineeLogin />}
    </>
  );
}

export default MultiUserLoginButtton;
