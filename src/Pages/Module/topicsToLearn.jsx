import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import nothingfind from "../../Image/nothingfind.svg"
import "./topicsToLearn.css"
import { Link } from "react-router-dom"
import NewTopicsForm from "../../component/Module/newTopicsAdditionForm"

function TopicsToLearn() {
  const topics = useSelector((state) => state.topicsToLearnReducer.topics)
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const openModal = () => {
    setShowForm(true)
  }
  const bottomRef = useRef(null)

  // Filter topics based on search term
  const filteredTopics = topics.filter((topic) =>
    topic.topicName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 pt-3 d-flex align-items-center">
            <h3 className="mb-0">Modules To Learn</h3>
          </div>
          <div className="col-12 col-sm-7 d-flex flex-row my-3 align-items-center">
            <div className="input-group ms-sm-auto w-75">
              <input
                type="text"
                className="form-control"
                placeholder="Search Module Name"
                aria-label="Search Module Name"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {loggedUser.role === "Lead" && (
              <button
                className="btn btn-primary ms-3 text-white"
                onClick={openModal}
              >
                + Add new Module
              </button>
            )}
          </div>
        </div>
        <div className="row">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={index}
              >
                <div className="card h-100">
                  <img
                    src={topic.img ? topic.img : nothingfind}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        className="nav-link active"
                        to={`/module/${topic.id}`}
                      >
                        {topic.topicName}
                      </Link>
                    </h5>
                    <p className="card-text">{topic.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No module found.</p>
            </div>
          )}
        </div>
      </div>
      <div ref={bottomRef}></div>
      {showForm && <NewTopicsForm setShowForm={setShowForm} ref={bottomRef} />}
    </>
  )
}

export default TopicsToLearn
