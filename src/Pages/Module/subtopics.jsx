import React, { useState } from "react"
import { Link } from "react-router-dom"
import SubtopicForm from "../../component/TopicsToLearn/subtopicsAddition"
import deleteIcon from "../../Image/icons-delete.svg"
import "./topicsToLearn.css"
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { deleteSubtopics } from "../../slice/TopicsToLearn/topicsToLearnSlice"
const SubTopics = () => {
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  const topic_details = useSelector(
    (state) => state.topicsToLearnReducer.topics
  )
  const dispatch = useDispatch()
  const location = useLocation()
  const topic_id = location.state.topicId

  const topic = topic_details.find((topic) => topic.id === topic_id)
  const [showForm, setShowForm] = useState(false)
  const openModal = () => {
    setShowForm(true)
  }
  const dltSubtopics = (subtopicId) => {
    dispatch(
      deleteSubtopics({
        topicId: topic_id,
        subtopic_id: subtopicId,
      })
    )
  }
  return (
    <>
      <div className="container pt-3 mt-5 px-3 subtopicsContainer border border-1 rounded-3">
        <div className="row w-100 h-100 g-0">
          <div className="col-12">
            <h1>{topic.topicName}</h1>
            <h6>{topic.description}</h6>
          </div>
        </div>
        <hr />
        <div className="row w-100 g-0">
          <div className="col-12">
            {loggedUser.role === "Lead" && (
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

        {topic.subTopics &&
          topic.subTopics.length !== 0 &&
          topic.subTopics.map((subtopic) => {
            return (
              <div
                className="row w-100 g-0 position-relative"
                key={subtopic.id}
              >
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="deleteSubtopics position-absolute end-0 me-sm-5"
                  onClick={() => dltSubtopics(subtopic.id)}
                />
                <div className="col-12 ps-2">
                  <h5>{subtopic.topicName}</h5>

                  <pre className="mb-0">
                    <h6 className="ps-2 additionalInformation">
                      {subtopic.additionalInformation}
                    </h6>
                  </pre>
                  <ul
                    style={{
                      listStyleType: "disc",
                      marginLeft: "10px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {subtopic.link &&
                      subtopic.link.length !== 0 &&
                      subtopic.link.map((links, index) => {
                        return (
                          <li key={index}>
                            <Link to={links.value}>{links.value}</Link>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              </div>
            )
          })}
      </div>
      {showForm && <SubtopicForm setShowForm={setShowForm} />}
    </>
  )
}

export default SubTopics
