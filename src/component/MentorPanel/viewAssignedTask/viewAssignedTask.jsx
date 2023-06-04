import React from "react"

function ViewAssignedTask(props) {
  const closeModal = () => {
    props.setAssignedTask(false)
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
                  Task
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
                <p className="fs-5 fw-semibold my-0">Task Name: </p>
                <span className="fs-6 fw-normal">{props.item.taskName} </span>
                <br />
                <p className="fs-5 fw-semibold mb-0 mt-5">Task Description: </p>
                <span className="fs-6 fw-normal">
                  {props.item.description}{" "}
                </span>

                <br />

                <img
                  className="w-75 mt-5"
                  src={props.item.file}
                  alt={`${props.item.taskName} image`}
                />
              </div>
              {/* {props.item.submission && props.item.su} */}

              {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewAssignedTask
