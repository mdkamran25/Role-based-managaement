import React from "react"
import { useSelector } from "react-redux"
// import TraineeSubmission from "../TraineeSubmission/traineeSubmission"
// import TraineeTask from "../TraineeTask/traineeTask"
import "./mentorDashboard.css"
import ProfileCard from "../../../component/ProfileCard/profileCard"
import TaskSubmit from "../../../component/Task-submit/taskSubmit"
function mentorDashboard() {
  const mentorDetail = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )

  const traineeData = useSelector((state) => state.traineeLoginReducer.login)

  const matchingTrainees = traineeData.filter(
    (trainee) => trainee.mentor === mentorDetail.email
  )

  return (
    <>
      <div className="col-12 mb-5 d-flex flex-column flex-md-row mt-5 justify-content-center justify-content-md-evenly align-items-md-start align-items-center">
        <div className="col-11 col-md-5 TraineeDetail rounded-3 d-flex flex-row">
          <div className="col-12 pt-3">
            <span className="table-name pt-1 ps-2">Trainee Assigned</span>
            <hr className="pb-0 mb-0" />
            <div className="col-12 pt-3 d-flex flex-wrap traineeProfileCard align-items-center justify-content-evenly pb-3">
              {matchingTrainees &&
                matchingTrainees.map((item) => (
                  <div
                    className="col-11 col-sm-10 col-md-10 col-lg-5 mb-3"
                    key={item.id}
                  >
                    <ProfileCard item={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-11 col-md-5 mb-3 mt-3 mt-md-0 rounded-3 d-flex flex-column task-submission rounded-3">
          <TaskSubmit matchingTrainees={matchingTrainees} />
        </div>
      </div>
    </>
  )
}

export default mentorDashboard
