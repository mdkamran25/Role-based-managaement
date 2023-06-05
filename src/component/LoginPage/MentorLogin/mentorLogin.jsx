import React, { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getLoginUserData } from "../../../slice/loggedUserDetails/loggedUserSlice"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./mentorLogin.css"
function MentorLogin() {
  const [showPassword, setShowPassword] = useState(true)

  const loginData = useSelector((state) => state.mentorLoginReducer.login)

  const showPasswordToggle = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }
  const [userDetails, setUserDetails] = useState({
    email: "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validate = (e) => {
    e.preventDefault()
    const validation = loginData.find(
      (user) => user.email === userDetails.email
    )
    if (validation) {
      dispatch(getLoginUserData(validation))
      navigate("mentorPanel")
    } else {
      toast.error("Invalid ID.")
      return false
    }
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <div className="input-group rounded-5 p-1">
            <div className="col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="userIcon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="col-11 align-self-center ps-lg-0 ps-2">
              <input
                type="text"
                className="bg-transparent border-0 outline-0"
                placeholder="Enter Email"
                onChange={(e) =>
                  setUserDetails((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group pt-3">
          <label htmlFor="exampleInputEmail1">Password</label>
          <div className="input-group rounded-5 p-1">
            <div className="col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="userIcon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <div className="col-10 align-self-center ps-lg-0 ps-2">
              <input
                type={showPassword ? "password" : "text"}
                className="bg-transparent border-0 outline-0"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="col-1" onClick={() => showPasswordToggle()}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="userIcon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="userIcon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn mb-4 mt-3 btn-primary text-white"
          onClick={validate}
        >
          Mentor Login
        </button>
      </form>
      <div className="col-10">
        <ToastContainer className="toastContainer" autoClose={2000} />
      </div>
    </>
  )
}

export default MentorLogin
