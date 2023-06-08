import React from "react"
import "./TraineeProfile.css"
import linkdinIcon from "../../assets/Image/linkedin-icon.svg"
import githubIcon from "../../assets/Image/github.gif"
// import { useLocation } from "react-router"
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
function TraineeProfile() {
  // const location = useLocation()
  // const ProfileData = location.state
  const { trainee_id } = useParams()
  const trainee = useSelector((state) => state.traineeLoginReducer.login)

  const ProfileData = trainee.find(
    (trainee) => trainee.id.toString() === trainee_id
  )

  const topics = useSelector((state) => state.topicsToLearnReducer.topics)
  return (
    <>
      {ProfileData ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="container bg-light pt-2 pb-3 rounded-4 Trainee-Profile-container">
            <div className="row g-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly">
              {/* Profile-card */}
              <div className="col-10 col-md-3 Profile-Card flex-column d-flex align-items-center justify-content-center rounded-4 py-5">
                <img
                  src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
                  className="rounded-circle"
                  width={150}
                  height={150}
                  alt="Profile Image"
                />
                <p className="fw-bold fs-2">{ProfileData.name}</p>
                <p className="fw-light fs-5 mb-0">{ProfileData.role}</p>
                <p className="fw-light fs-5">{ProfileData.college}</p>
                <button className="btn btn-primary text-light px-3">
                  Message
                </button>
              </div>
              {/* Personal-Details */}
              <div className="col-10 mt-3 mt-md-0 col-md-8 Personal-Detail rounded-4 py-5">
                <div className="row g-0 d-flex justify-content-center">
                  <div className="col-4">
                    <span className="fw-bold fs-4">Full Name:</span>
                  </div>
                  <div className="col-6 pt-1">
                    <span className="fw-light fs-5">{ProfileData.name}</span>
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row g-0 d-flex justify-content-center">
                  <div className="col-4">
                    <span className="fw-bold fs-4">Email:</span>
                  </div>
                  <div className="col-6 pt-1">
                    <span className="fw-light fs-5">{ProfileData.email}</span>
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row g-0 d-flex justify-content-center">
                  <div className="col-4">
                    <span className="fw-bold fs-4">Phone:</span>
                  </div>
                  <div className="col-6 pt-1">
                    <span className="fw-light fs-5">{ProfileData.phone}</span>
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row g-0 d-flex justify-content-center">
                  <div className="col-4">
                    <span className="fw-bold fs-4">College:</span>
                  </div>
                  <div className="col-6 pt-1">
                    <span className="fw-light fs-5">{ProfileData.college}</span>
                  </div>
                </div>
                <hr className="mx-5" />
                <div className="row g-0 d-flex justify-content-center">
                  <div className="col-4">
                    <span className="fw-bold fs-4">Address:</span>
                  </div>
                  <div className="col-6 pt-1">
                    <span className="fw-light fs-5">{ProfileData.address}</span>
                  </div>
                </div>
              </div>
              {/* Social-Media */}
              <div className=" col-10 col-md-3  Social-Media rounded-4 py-5 mt-3">
                <div className="col-12 d-flex px-3 px-md-2 px-xl-3">
                  <img src={linkdinIcon} width={30} />
                  <a className="nav-link active ms-auto" href="#">
                    {ProfileData.gtihub ? ProfileData.github : "Not Added"}
                  </a>
                </div>
                <hr />
                <div className="col-12 d-flex px-3 px-md-2 px-xl-3">
                  <img src={githubIcon} width={30} />
                  <a className="nav-link active ms-auto" href="#">
                    {ProfileData.gtihub ? ProfileData.github : "Not Added"}
                  </a>
                </div>
              </div>
              {/* Course-Completed */}
              <div className="col-10 col-md-4 Course-Completed rounded-4 pb-5 pt-3 mt-3">
                <p className="fw-bold fs-5 pb-2 px-3">Topics To Learn</p>
                <div className="topics-container">
                  {topics.map((item) => {
                    return (
                      <>
                        <Link
                          className="nav-link active"
                          to={`/module/${item.id}`}
                        >
                          <div className="col-12 px-3" key={item.id}>
                            {item.topicName}
                            {/* <div className="progress">
                            <div
                              className="progress-bar w-25"
                              role="progressbar"
                              aria-label="Basic example"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div> */}
                          </div>
                        </Link>
                        <hr />
                      </>
                    )
                  })}
                </div>
              </div>
              {/* Task-Completed */}
              <div className="col-10 col-md-4 Task-Completed rounded-4 pb-5 pt-3 mt-3">
                <p className="fw-bold fs-5 pb-2 mb-0 px-3">Task Completed</p>
                <div className="topics-container">
                  {ProfileData.submission &&
                    ProfileData.submission.map((item) => {
                      return (
                        <>
                          <div
                            className="col-12 px-3 submittedTaskDetails d-flex position-relative justify-content-between pt-2 pb-2"
                            key={item.id}
                          >
                            <div>
                              <p className="text-dark mb-0 fw-bold">
                                {item.taskName}
                              </p>
                              <p className="text-dark fw-normal mb-0 taskName">
                                {item.checked ? (
                                  <div className="text-success">
                                    Mark: {item.marks}
                                  </div>
                                ) : (
                                  <div className="text-danger">Not Checked</div>
                                )}
                              </p>
                            </div>
                            <div>
                              <p className="text-dark fw-normal mb-0">
                                {item.time}
                              </p>
                              <p className="text-dark mb-0 fw-normal taskDate">
                                {item.date}
                              </p>
                            </div>
                          </div>
                          <hr className="m-0" />
                        </>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-12 text-center pt-5">
          <p>No Trainee found.</p>
        </div>
      )}
    </>
  )
}

export default TraineeProfile
