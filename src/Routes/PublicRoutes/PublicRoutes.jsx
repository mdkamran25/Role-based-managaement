import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const PublicRoute = ({ children }) => {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  if (loggedUser.length !== 0) {
    return <Navigate to="/dashboard" replace />
  }
  return children ? children : <Outlet />
}

export default PublicRoute
