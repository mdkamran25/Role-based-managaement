import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedLogin = ({ children }) => {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )

  if (!loggedUser) {
    return <Navigate to="/" replace />
  }
  return children
}

export default ProtectedLogin
