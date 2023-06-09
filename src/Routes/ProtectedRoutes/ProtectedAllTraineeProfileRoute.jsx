import React from "react"
import { Navigate, Outlet } from "react-router"
import { useSelector } from "react-redux"
function ProtectedAllTraineeProfile({ children }) {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  if (loggedUser.role === "Trainee") {
    return <Navigate to="*" replace />
  }

  return children ? children : <Outlet />
}

export default ProtectedAllTraineeProfile
