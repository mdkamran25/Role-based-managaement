import React from "react"
import { useSelector } from "react-redux"
import AdminDashboard from "../../component/AdminDashboard/adminDashboard"
import MentorDashboard from "../../component/MentorDashboard/mentorDashboard"
import TraineeDashboard from "../../component/TraineeDashboard/traineeDashboard"
function Dashboard() {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  return (
    <>
      {loggedUser.role === "Lead" ? (
        <AdminDashboard />
      ) : loggedUser.role === "Mentor" ? (
        <MentorDashboard />
      ) : (
        <TraineeDashboard />
      )}
      {/* <div className="chatDiv position-absolute bottom-0 end-0">
        <img
          className="chat-icon"
          width="64"
          height="64"
          src="https://img.icons8.com/sf-black/64/chat.png"
          alt="chat"
        />
      </div> */}
    </>
  )
}

export default Dashboard
