import React from "react"
import "./TraineeSubmission.css"
import Lottie from "lottie-react"
import noDataAnimation from "./no-data.json"
import view from "../../../Image/icons-eye.png"
import edit from "../../../Image/icons-edit.png"
import deleteIcon from "../../../Image/icons-delete.svg"
import { useSelector, useDispatch } from "react-redux"
import { deleteSubmissions } from "../../../slice/trainee/traineeLoginSlice"
import { Tooltip } from "react-tooltip"
function TraineeSubmission() {
  const dispatch = useDispatch()
  // const [editTaskForm, setEditTaskForm] = useState(false)
  // const [assignedTask, setAssignedTask] = useState(false)
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  let loggedUserUpdatedData = useSelector(
    (state) => state.traineeLoginReducer.login
  )
  // console.log(loggedUserUpdatedData, "loggedUserUpdatedData")
  const CurrentUser =
    loggedUser.role && loggedUser.role === "Mentor"
      ? loggedUser.SecondTraineeEmail
      : loggedUser.email

  loggedUserUpdatedData = loggedUserUpdatedData.filter(
    (trainee) => trainee.email === CurrentUser
  )

  const deleteSubmission = (submissionID, submissionEmail) => {
    dispatch(
      deleteSubmissions({
        TraineeEmail: submissionEmail,
        TaskId: submissionID,
      })
    )
  }

  return (
    <>
      <div className="noTaskImage d-flex flex-column align-items-center">
        {loggedUserUpdatedData[0].submission.length !== 0 ? (
          <div className="table-conatiner w-100 h-100 overflow-auto border border-1 rounded-1">
            <table className="table table-height table-striped table-hoverable">
              <thead>
                <tr className="tableHead">
                  <th scope="col" className="px-2">
                    Task Name
                  </th>
                  <th scope="col">Submission</th>
                  {loggedUser.role === "Mentor" && (
                    <th scope="col">Trainee </th>
                  )}
                  <th scope="col">Submitted</th>
                  <th scope="col">Status</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loggedUserUpdatedData[0].submission.map((item) => (
                  <tr
                    key={item.id}
                    className={item.complete ? "bg-success" : ""}
                  >
                    <td className="descriptionInTable">
                      <span className="fw-normal">{item.taskName}</span>
                    </td>

                    <td className="descriptionInTable">
                      <span className="fw-normal">{item.repo}</span>
                      <br />
                      <span className="fw-light">{item.description}</span>
                    </td>
                    {loggedUser.role === "Mentor" && (
                      <td className="fw-normal">{item.name}</td>
                    )}
                    <td className="descriptionInTable">
                      {item.time}
                      <br />
                      {item.date}
                    </td>
                    <td
                      className={item.checked ? "text-success" : "text-danger"}
                    >
                      {item.completed ? "Checked" : "Not Checked"}
                    </td>
                    <td>&nbsp;</td>
                    <td className="align-middle">
                      <img
                        src={view}
                        alt="edit"
                        width={40}
                        data-tooltip-id="traineeTaskTooltipDeleteEditView"
                        data-tooltip-content="View Submission"
                        data-tooltip-place="top"
                        // onClick={() => viewSubmission(item)}
                      />{" "}
                      &nbsp;
                      {loggedUser.role === "Trainee" && !item.checked && (
                        <>
                          <img
                            src={edit}
                            alt="edit"
                            width={40}
                            data-tooltip-id="traineeTaskTooltipDeleteEditView"
                            data-tooltip-content="Edit Submission"
                            data-tooltip-place="top"
                            // onClick={() => editSubmission(item)}
                          />{" "}
                          &nbsp;
                          <img
                            src={deleteIcon}
                            alt="edit"
                            width={40}
                            data-tooltip-id="traineeTaskTooltipDeleteEditView"
                            data-tooltip-content="Delete"
                            data-tooltip-place="top"
                            onClick={() =>
                              deleteSubmission(item.id, item.email)
                            }
                          />
                        </>
                      )}
                    </td>
                    <Tooltip id="traineeTaskTooltipDeleteEditView" />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="noSubmissionAnimation position-relative d-flex align-items-center justify-content-center p-5">
            <Lottie
              animationData={noDataAnimation}
              className="noSubmission"
              loop={false}
            />
            <div className="position-absolute bottom-0">
              <p className="fw-bold fs-3">No Submission Yet</p>
            </div>
          </div>
        )}
      </div>

      {/* Edit Taskform is for edit the assigned task and item props is passed with
      the current data */}

      {/* {editTaskForm && (
        <TraineeEditTaskForm
          item={selectedTask}
          setEditTaskForm={setEditTaskForm}
        />
      )} */}

      {/* assignedTask Show the already assigned task with popup modal */}

      {/* {assignedTask && (
        <ViewAssignedTask
          item={selectedTask}
          setAssignedTask={setAssignedTask}
        />
      )}  */}
    </>
  )
}

export default TraineeSubmission
