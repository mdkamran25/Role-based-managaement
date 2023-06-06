import React, { useState } from "react"
import TraineeSubmission from "../MentorDashboard/TraineeSubmission/traineeSubmission"
import TraineeTask from "../MentorDashboard/TraineeTask/traineeTask"
import "./taskSubmit.css"

function TaskSubmit(props) {
  const [isSubmissionButtonClicked, setSubmissionButtonClicked] =
    useState(false)

  const handleSubmissionButtonClick = () => {
    setSubmissionButtonClicked(!isSubmissionButtonClicked)
  }
  return (
    <>
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
        {isSubmissionButtonClicked ? (
          <TraineeSubmission />
        ) : (
          <TraineeTask matchingTrainee={props.matchingTrainees} />
        )}
      </div>
    </>
  )
}

export default TaskSubmit
