import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./profileCard.css"
import Chat from "../Chat/chat"
import { mentorMessageNotification } from "../../slice/mentor/mentorLoginSlice"
import { traineeMessageNotification } from "../../slice/trainee/traineeLoginSlice"

const ProfileCard = (props) => {
  const item = props.item
  const [showChat, setShowChat] = useState(false)
  const dispatch = useDispatch()

  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const mentor = useSelector((state) => state.mentorLoginReducer.login)

  const matchedMentor = mentor.find((ment) => ment.email === item.mentor)

  const toggleChat = () => {
    setShowChat(!showChat)
  }

  const offcanvasRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        offcanvasRef.current &&
        !offcanvasRef.current.contains(event.target)
      ) {
        toggleChat()
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const notification = (traineeEmail) => {
    if (loggedUser.role === "Trainee") {
      dispatch(
        traineeMessageNotification({
          traineeEmail: traineeEmail,
          seen: false,
        })
      )
    } else {
      dispatch(
        mentorMessageNotification({
          traineeEmail: traineeEmail,
          mentorEmail: item.mentor,
          seen: false,
        })
      )
    }
  }

  return (
    <div
      className={`ProfileCard ${
        loggedUser.role && loggedUser.role === "Trainee"
          ? "traineeLoginheight"
          : "ProfileCardInMentorPanel"
      } text-center 
    flex-column d-flex align-items-center justify-content-center 
    rounded-4 py-5`}
    >
      <img
        src={"https://bootdey.com/img/Content/avatar/avatar7.png"}
        className="rounded-circle"
        width={150}
        height={150}
        alt="Profile Image"
      />
      <p className="fw-bold fs-2">{item.name}</p>
      <p className="fw-light fs-5 mb-0">{item.role}</p>
      <p className="fw-light fs-5">{item.college}</p>
      <div className="col-6 col-sm-7 col-xl-12 d-flex flex-column flex-xl-row justify-content-evenly text-center">
        <Link to={`/traineeProfile/id=/${item.id}`} className="text-center">
          <button className="btn text-primary border border-primary mt-sm-2 mt-xl-0 px-3">
            View Profile
          </button>
        </Link>
        {loggedUser.role && loggedUser.role !== "Lead" && (
          <>
            <button
              className="btn btn-primary text-light my-3 my-xl-0 px-3 position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target={`#offcanvasExample${item.email}`}
              aria-controls={`offcanvasExample${item.email}`}
              onClick={() => {
                toggleChat()
                notification(item.email)
              }}
            >
              Message
              {loggedUser.role === "Trainee" && item?.messageNotification && (
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              )}
              {loggedUser.role === "Mentor" &&
                Array.isArray(matchedMentor.messageNotification) &&
                matchedMentor.messageNotification.map(
                  (trainee, index) =>
                    trainee.traineeEmail === item.email &&
                    trainee.seen && (
                      <span
                        key={index}
                        className=" position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
                      >
                        <span className="visually-hidden">New alerts</span>
                      </span>
                    )
                )}
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id={`offcanvasExample${item.email}`}
              aria-labelledby={`offcanvasExampleLabel${item.email}`}
              ref={offcanvasRef}
            >
              {showChat && (
                <Chat
                  email={item.email}
                  setShowChat={toggleChat}
                  showChat={showChat}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
