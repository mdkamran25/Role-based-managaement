import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./profileCard.css"
const ProfileCard = (props) => {
  const item = props.item
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )

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
      <div className="col-12 d-flex flex-sm-column flex-xl-row justify-content-evenly">
        {/* <Link>
          <button className="btn bg-primary text-light  px-3">Message</button>
        </Link> */}
        <Link to={`/traineeProfile/id=/${item.id}`} className="text-center">
          <button className="btn text-primary border border-primary mt-sm-2 mt-xl-0 px-3">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard
