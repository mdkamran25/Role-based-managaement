import React from "react"
import { useSelector } from "react-redux"
// import TraineeTask from "../MentorPanel/TraineeTask/traineeTask"
import ProfileCard from "../ProfileCard/profileCard"
import TaskSubmit from "../Task-submit/taskSubmit"

function TraineeDashboard() {
  const traineeData = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  let currentData = useSelector((state) => state.traineeLoginReducer.login)
  currentData = currentData.find((trainee) => traineeData.id === trainee.id)
  return (
    <>
      <div className="container-fluid h-75">
        <div className="row g-0 w-100 h-100 d-flex align-items-center justify-content-center mt-3 mt-md-0 justify-content-md-evenly">
          <div className="col-11 col-md-4 col-lg-3 mb-3 traineeProfile">
            <ProfileCard item={currentData} />
          </div>
          <div className="col-11 col-md-7 p-0 mb-3 mt-3 mt-md-0 rounded-3 d-flex flex-column task-submission rounded-3">
            <TaskSubmit matchingTrainees={traineeData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TraineeDashboard
