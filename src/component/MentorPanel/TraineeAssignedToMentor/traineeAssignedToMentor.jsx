import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import TraineeSubmission from "../TraineeSubmission/traineeSubmission";
import TraineeTask from "../TraineeTask/traineeTask";
import "./traineeAssignedToMentor.css";
import { Link } from "react-router-dom";
import ProfileCard from "../../ProfileCard/profileCard";
function TraineeAssignedToMentor() {
  const navigate = useNavigate();
  const mentorDetail = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  );

  const traineeData = useSelector((state) => state.traineeLoginReducer.login);

  const matchingTrainees = traineeData.filter(
    (trainee) => trainee.mentor === mentorDetail.email
  );
  // const ViewTraineeProfile = () => {
  //   <Link to='/traineeProfile' />
  // }

  const [isSubmissionButtonClicked, setSubmissionButtonClicked] =
    useState(false);

  const handleSubmissionButtonClick = () => {
    setSubmissionButtonClicked(!isSubmissionButtonClicked);
  };

  return (
    <>
      <div className="col-12 mb-5 d-flex flex-column flex-md-row mt-5 justify-content-center justify-content-md-evenly align-items-md-start align-items-center">
        <div className="col-11 col-md-5 TraineeDetail rounded-3 d-flex flex-row">
          <div className="col-12 pt-3">
            <span className="table-name pt-1 ps-2">Trainee Assigned</span>
            <hr />
            <div className="col-12 d-flex flex-wrap traineeProfileCard justify-content-evenly pb-3">
              {matchingTrainees &&
                matchingTrainees.map((item) => (
                  <div className="col-12 col-sm-10 col-md-10 col-lg-5 mb-3" key={item.id}>
                    <ProfileCard item={item} />
                  </div>
                ))}
            </div>

          </div>
        </div>
        <div className="col-11 col-md-5 mb-3 mt-3 mt-md-0 rounded-3 d-flex flex-column task-submission rounded-3">
          <div className="segmented-buttons position-relative col-12 rounded-top">
            <button
              className={`btn pt-3 px-4 position-absolute`}
              id={`${isSubmissionButtonClicked ? "submissionButton" : ""}`}
              onClick={handleSubmissionButtonClick}
            >
              Submission
            </button>
            <button
              className={`btn pt-3 px-5 position-absolute`}
              onClick={handleSubmissionButtonClick}
              id={`${isSubmissionButtonClicked ? "" : "taskButton"}`}
            >
              Task
            </button>
          </div>
          <hr className="mt-0" />
          <div className="col-12 position-relative">
            {isSubmissionButtonClicked ? <TraineeSubmission /> : <TraineeTask matchingTrainee={matchingTrainees} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default TraineeAssignedToMentor;
