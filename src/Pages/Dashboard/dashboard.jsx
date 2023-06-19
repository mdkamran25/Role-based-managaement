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
    </>
  )
}

export default Dashboard
