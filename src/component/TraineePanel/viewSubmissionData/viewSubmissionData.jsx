import React from "react"
import { Link } from "react-router-dom"

function ViewSubmissionData(props) {
  const closeModal = () => {
    props.setOpenSubmissionView(false)
  }

  return (
    <>
      <div>
        <div
          className="modal-backdrop show"
          style={{ backdropFilter: "blur(8px)" }}
        ></div>
        <div
          className="modal fade show"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                  Submission
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p className="fs-5 fw-semibold my-0">Git Repo: </p>
                <span className="fs-6 fw-normal">
                  <Link to={props.item.repo}>{props.item.repo}</Link>
                </span>
                <br />
                <p className="fs-5 fw-semibold mb-0 mt-5">
                  Additional Information:{" "}
                </p>
                <span className="fs-6 fw-normal">
                  {props.item.description}{" "}
                </span>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewSubmissionData
