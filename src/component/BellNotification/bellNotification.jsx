/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react"
import bell from "../../Image/bell.png"
import "./bellNotification.css"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "../../slice/trainee/traineeLoginSlice"

const SmallBox = React.memo(() => {
  const loggedUserData = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails || []
  )
  const notificationData = useSelector(
    (state) => state.notificationDataReducer.notifications
  )
  // console.log(notificationData, "data")
  return (
    <>
      <div className="small-box position-absolute rounded-2">
        {loggedUserData.role !== "Lead" &&
          notificationData.map((item, index) => {
            return loggedUserData.role === "Mentor" &&
              item.notificationType === "Task" ? (
              ""
            ) : (
              <React.Fragment key={index}>
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
              </React.Fragment>
            )
          })}
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

  const matchedTrainee = trainees.find(
    (trainee) => trainee.email === loggedUserData.email
  )

  const handleNotificationClick = useCallback(() => {
    setIsBoxVisible((prevState) => !prevState)
    if (matchedTrainee) {
      dispatch(setNotification(matchedTrainee.email))
    }
  }, [dispatch, matchedTrainee])

  return (
    <div
      className={`bell-notification ${
        matchedTrainee && matchedTrainee.ShowNotification ? "redDot" : ""
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
