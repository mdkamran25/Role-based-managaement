/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useState, useCallback } from "react"
import bell from "../../assets/Image/bell.png"
import "./bellNotification.css"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "../../slice/trainee/traineeLoginSlice"
import { ShowNotification } from "../../slice/mentor/mentorLoginSlice"

const SmallBox = () => {
  const loggedUserData = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails || []
  )
  const notificationData = useSelector(
    (state) => state.notificationDataReducer.notifications
  )

  return (
    <>
      <div className="small-box position-absolute rounded-2">
        {loggedUserData.role === "Lead" ? (
          <div className="col-12 text-center fs-6 fw-bold pt-3 text-dark">
            No notification yet
          </div>
        ) : (
          loggedUserData.role !== "Lead" &&
          notificationData &&
          notificationData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {(loggedUserData.role !== "Mentor" &&
                  item.notificationType === "Module") ||
                (item.notificationType !== "Submission" &&
                  item.email &&
                  item.email === loggedUserData.mentor) ? (
                  <>
                    <div className="taskNotification d-flex position-relative justify-content-between pt-2 pb-2 px-3">
                      <div>
                        <p className="text-dark mb-0 fw-bold">
                          {item.notificationMessage}
                        </p>
                        <p className="text-dark fw-normal mb-0 taskName">
                          {item.notificationDetails}
                        </p>
                      </div>
                      <div className="d-flex flex-column">
                        <p className="text-dark fw-normal mb-0 ms-auto">
                          {item.time}
                        </p>
                        <p className="text-dark mb-0 fw-normal ms-auto taskDate">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <hr className="m-0" />
                  </>
                ) : (
                  (item.notificationType === "Module" ||
                    (loggedUserData.FirstTraineeEmail &&
                      loggedUserData.FirstTraineeEmail === item.email) ||
                    (loggedUserData.SecondTraineeEmail &&
                      loggedUserData.SecondTraineeEmail === item.email)) && (
                    <>
                      <div className="taskNotification d-flex position-relative justify-content-between pt-2 pb-2 px-3">
                        <div>
                          <p className="text-dark mb-0 fw-bold">
                            {item.notificationMessage}
                          </p>
                          <p className="text-dark fw-normal mb-0 taskName">
                            {item.notificationDetails}
                          </p>
                        </div>
                        <div className="d-flex flex-column">
                          <p className="text-dark fw-normal ms-auto mb-0">
                            {item.time}
                          </p>
                          <p className="text-dark mb-0 fw-normal ms-auto taskDate">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <hr className="m-0" />
                    </>
                  )
                )}
              </React.Fragment>
            )
          })
        )}
      </div>
    </>
  )
}

function BellNotification() {
  const loggedUserData = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails || []
  )
  const [isBoxVisible, setIsBoxVisible] = useState(false)
  const dispatch = useDispatch()
  const trainees = useSelector((state) => state.traineeLoginReducer.login)
  const mentor = useSelector((state) => state.mentorLoginReducer.login)

  const matchedMentor = mentor.find((mentor) => {
    return mentor.email === loggedUserData.email
  })

  const matchedTrainee = trainees.find(
    (trainee) => trainee.email === loggedUserData.email
  )

  const handleNotificationClick = useCallback(() => {
    setIsBoxVisible((prevState) => !prevState)
    if (loggedUserData.role === "Trainee") {
      dispatch(setNotification(matchedTrainee.email))
    } else if (loggedUserData.role === "Mentor") {
      dispatch(
        ShowNotification({ mentorEmail: loggedUserData.email, seen: false })
      )
    }
  }, [dispatch, matchedTrainee])

  return (
    <div
      className={`bell-notification ${
        (loggedUserData.role === "Trainee" &&
          matchedTrainee &&
          matchedTrainee.ShowNotification) ||
        (loggedUserData.role === "Mentor" && matchedMentor.showNotification)
          ? "redDot"
          : ""
      } ms-auto me-4 position-relative`}
      onClick={handleNotificationClick}
      {...(matchedTrainee && matchedTrainee.ShowNotification
        ? { "current-count": "" }
        : {})}
    >
      <img src={bell} className="bell" width={30} alt="bell-notification" />
      {isBoxVisible && <SmallBox />}
    </div>
  )
}

export default BellNotification
