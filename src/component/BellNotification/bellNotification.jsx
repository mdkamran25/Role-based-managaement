import React, { useState, useCallback } from "react"
import bell from "../../Image/bell.png"
import "./bellNotification.css"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "../../slice/trainee/traineeLoginSlice"
import { ShowNotification } from "../../slice/mentor/mentorLoginSlice"

const SmallBox = React.memo(() => {
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
          notificationData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {(loggedUserData.role !== "Mentor" &&
                  item.notificationType === "Module") ||
                (item.notificationType !== "Submission" &&
                  item.email &&
                  item.email === loggedUserData.mentor) ? (
                  <>
                    <div className="taskNotification d-flex position-relative justify-content-between pt-2 pb-4 px-3">
                      <p className="text-dark mb-0 fw-bold">
                        {item.notificationMessage}
                      </p>
                      <p className="text-dark fw-normal mb-0 position-absolute taskName">
                        {item.notificationDetails}
                      </p>
                      <p className="text-dark fw-normal">{item.time}</p>
                      <p className="text-dark mb-0 fw-normal position-absolute taskDate">
                        {item.date}
                      </p>
                    </div>
                    <hr />
                  </>
                ) : (
                  (item.notificationType === "Module" ||
                    (loggedUserData.FirstTraineeEmail &&
                      loggedUserData.FirstTraineeEmail === item.email) ||
                    (loggedUserData.SecondTraineeEmail &&
                      loggedUserData.SecondTraineeEmail === item.email)) && (
                    <>
                      <div className="taskNotification d-flex position-relative justify-content-between pt-2 pb-4 px-3">
                        <p className="text-dark mb-0 fw-bold">
                          {item.notificationMessage}
                        </p>
                        <p className="text-dark fw-normal mb-0 position-absolute taskName">
                          {item.notificationDetails}
                        </p>
                        <p className="text-dark fw-normal">{item.time}</p>
                        <p className="text-dark mb-0 fw-normal position-absolute taskDate">
                          {item.date}
                        </p>
                      </div>
                      <hr />
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
})

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
        ShowNotification({ mentorEmail: loggedUserData.email, decision: false })
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
      <img src={bell} className="bell" width={40} alt="bell-notification" />
      {isBoxVisible && <SmallBox />}
    </div>
  )
}

export default BellNotification
