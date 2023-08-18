import React from "react"
import { Navigate, useParams, Outlet } from "react-router"
import { useSelector } from "react-redux"
function ProtectedTraineeProfile({ children }) {
  const { trainee_id } = useParams()
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )

  if (loggedUser.role === "Trainee") {
    if (loggedUser.id.toString() !== trainee_id) {
      return <Navigate to={`/traineeProfile/id=/${loggedUser.id}`} replace />
    }
  }
  return children ? children : <Outlet />
}

export default ProtectedTraineeProfile
