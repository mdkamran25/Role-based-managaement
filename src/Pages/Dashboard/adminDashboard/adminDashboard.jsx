import React, { useState } from "react"
import "./adminDashboard.css"
import MentorDetails from "../../../component/AdminDashboard/mentorDetails/mentorDetails"
import TraineeDetails from "../../../component/AdminDashboard/traineeDetails/traineeDetails"

function AdminPanel() {
  const [isTraineeButtonClicked, setTraineeButtonClicked] = useState(true)

  const handleTraineefButtonClick = () => {
    setTraineeButtonClicked(!isTraineeButtonClicked)
  }
  return (
    <div className="col-12 d-flex flex-column mt-5 justify-content-center align-items-center">
      <div className="segmented-buttons position-relative col-11 rounded-top">
        <button
          className={`btn pt-3 px-4 position-absolute`}
          id={`${isTraineeButtonClicked ? "submissionButton" : ""}`}
          onClick={handleTraineefButtonClick}
        >
          Mentor
        </button>
        <button
          className={`btn pt-3 px-5 position-absolute`}
          onClick={handleTraineefButtonClick}
          id={`${isTraineeButtonClicked ? "" : "taskButton"}`}
        >
          Trainee
        </button>
      </div>
      <div className="col-12 position-relative d-flex flex-column justify-content-center align-items-center">
        {isTraineeButtonClicked ? (
          <MentorDetails />
        ) : (
          <div className="col-11 traineeDetailsMainContainer rounded-bottom d-flex flex-column">
            <TraineeDetails />
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel
