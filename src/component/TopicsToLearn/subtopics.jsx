import React, { useState } from "react"
import { Link } from "react-router-dom"
import SubtopicForm from "./subtopicsAddition"
import "./topicsToLearn.css"
import { useSelector } from "react-redux"
const SubTopics = () => {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const [showForm, setShowForm] = useState(false)
  const openModal = () => {
    console.log("data")
    setShowForm(true)
  }
  console.log(loggedUser.role, "role")
  //   const bottomRef = useRef(null)
  return (
    <>
      <div className="container pt-3 mt-5 px-3 subtopicsContainer border border-1 rounded-3">
        <div className="row w-100 h-100 g-0">
          <div className="col-12">
            <h1>JavaScript</h1>
            <h6>Description</h6>
          </div>
        </div>
        <hr />
        <div className="row w-100 g-0">
          <div className="col-12">
            {loggedUser.role !== "Trainee" && (
              <button
                className="btn btn-primary text-white float-end"
                onClick={() => openModal()}
              >
                + Add Subtopic
              </button>
            )}
          </div>
        </div>
        <hr className="border-0 mb-0" />
        <div className="row w-100 g-0">
          <div className="col-12 ps-2">
            <h5>First Subtopic</h5>
            <h6 className="ps-2">Key Points</h6>
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              <li>
                <Link to="www.google.com">www.google.com</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row w-100 g-0 pt-3">
          <div className="col-12 ps-2">
            <h5>Second Subtopic</h5>
            <h6 className="ps-3">Key Points</h6>
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              <li>
                <Link to="www.google.com">www.google.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showForm && <SubtopicForm setShowForm={setShowForm} />}
    </>
  )
}

export default SubTopics
