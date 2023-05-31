import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import nothingfind from "../../Image/nothingfind.svg"
import "./topicsToLearn.css"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
import NewTopicsForm from "./newTopicsAdditionForm"
function TopicsToLearn() {
  const topics = useSelector((state) => state.topicsToLearnReducer.topics)
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const [showForm, setShowForm] = useState(false)
  const openModal = () => {
    setShowForm(true)
  }
  const bottomRef = useRef(null)
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100 g-0">
          <div className="col-12 pt-3 d-flex pb-2 align-items-center">
            <h3 className="mb-0">Topics To Learn</h3>
            {loggedUser.role === "Lead" ? (
              <button
                className="ms-auto btn btn-primary text-light"
                onClick={openModal}
              >
                + Add new Topics
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="row g-0 pb-3">
          <MDBRow className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-1 mb-5">
            {topics &&
              topics.map((topic, index) => {
                return (
                  <MDBCol
                    className="mb-5 d-flex justify-content-center align-items-center"
                    key={index}
                  >
                    <MDBCard className="cardContain">
                      <MDBCardImage
                        className="pb-3"
                        src={topic.img ? topic.img : nothingfind}
                        alt="..."
                        position="top"
                        height={265}
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <Link navigate="nav-link active">
                            {topic.topicName}
                          </Link>
                        </MDBCardTitle>
                        <MDBCardText>{topic.description}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                )
              })}
          </MDBRow>
        </div>
      </div>
      <div ref={bottomRef}></div>
      {showForm && <NewTopicsForm setShowForm={setShowForm} ref={bottomRef} />}
    </>
  )
}

export default TopicsToLearn
