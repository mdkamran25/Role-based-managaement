/* eslint-disable no-undef */
import React, { useState } from "react"
import "./traineeTask.css"
import Lottie from "lottie-react"
import { useDispatch, useSelector } from "react-redux"
import view from "../../../assets/Image/icons-eye.png"
import edit from "../../../assets/Image/icons-edit.png"
import deleteIcon from "../../../assets/Image/icons-delete.svg"
import noTaskAnimation from "../../../assets/LottieJsonFiles/empty-box-blue.json"
import submission from "../../../assets/Image/submission.png"
import TraineeTaskForm from "./traineeTaskForm"
import { deleteTask } from "../../../slice/trainee/traineeLoginSlice"
import { Tooltip } from "react-tooltip"
import TraineeEditTaskForm from "../traineeEditTaskForm/traineeEditTaskForm"
import ViewAssignedTask from "../viewAssignedTask/viewAssignedTask"
import TaskSubmissionForm from "../../TraineeDashboard/TaskSubmissionForm/tasksubmissionForm"
function TraineeTask(props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [editTaskForm, setEditTaskForm] = useState(false)
  const [assignedTask, setAssignedTask] = useState(false)
  const [submitTaskForm, setSubmitTaskForm] = useState(false)
  const [selectedTaskForSubmit, setSelectedTaskForSubmit] = useState(null)
  const [selectedTask, setSelectedTask] = useState(null)
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  let loggedUserUpdatedData = useSelector(
    (state) => state.traineeLoginReducer.login
  )
  const CurrentUser =
    loggedUser.role && loggedUser.role === "Mentor"
      ? props.matchingTrainee[0]
      : props.matchingTrainee

  loggedUserUpdatedData = loggedUserUpdatedData.filter(
    (trainee) => trainee.email === CurrentUser.email
  )

  const openModal = () => {
    setModalOpen(true)
  }
  const openSubmitForm = (item) => {
    setSelectedTaskForSubmit(item)
    setSubmitTaskForm(true)
  }
  const openTaskEditForm = () => {
    setEditTaskForm(true)
  }
  const openAssigendTask = () => {
    setAssignedTask(true)
  }
  const viewAssignedTask = (item) => {
    setSelectedTask(item)
    openAssigendTask()
  }
  const editAssignedTask = (item) => {
    setSelectedTask(item)
    openTaskEditForm()
  }
  const dispatch = useDispatch()

  const deleteAssignTask = (id) => {
    props.matchingTrainee.forEach((trainee) => {
      dispatch(deleteTask({ TraineeEmail: trainee.email, TaskId: id }))
    })
  }
  return (
    <>
      <div className="noTaskImage d-flex flex-column align-items-center">
        {loggedUserUpdatedData[0] &&
        loggedUserUpdatedData[0].tasks.length !== 0 ? (
          <div className="table-conatiner w-100 h-100 overflow-auto border border-1 rounded-1">
            <table className="table table-height table-striped table-hoverable">
              <thead>
                <tr className="tableHead">
                  <th scope="col" className="px-4">
                    Task
                  </th>
                  <th scope="col">Task Details</th>
                  <th scope="col">Task Assigned</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loggedUserUpdatedData[0].tasks &&
                  loggedUserUpdatedData[0].tasks.map((item) => (
                    <tr
                      key={item.id}
                      className={item.complete ? "bg-success" : ""}
                    >
                      <td className="px-3">
                        <img
                          src={item.file}
                          alt="task"
                          width={80}
                          height={50}
                        />
                      </td>
                      <td className="descriptionInTable">
                        <span className="fw-bold">{item.taskName}</span>
                        <br />
                        <span className="fw-light">{item.description}</span>
                      </td>
                      <td>
                        {item.time}
                        <br />
                        {item.date}
                      </td>
                      <td
                        className={
                          item.completed ? "text-success" : "text-danger"
                        }
                      >
                        {item.completed ? "Submitted" : "Not Submitted"}
                      </td>

                      <td className="align-middle">
                        <img
                          src={view}
                          alt="edit"
                          width={40}
                          data-tooltip-id="traineeTaskTooltipDeleteEditView"
                          data-tooltip-content="View Task"
                          data-tooltip-place="top"
                          onClick={() => viewAssignedTask(item)}
                        />{" "}
                        &nbsp;
                        {loggedUser.role === "Mentor" && !item.completed && (
                          <>
                            <img
                              src={edit}
                              alt="edit"
                              width={40}
                              data-tooltip-id="traineeTaskTooltipDeleteEditView"
                              data-tooltip-content="Edit Task"
                              data-tooltip-place="top"
                              onClick={() => editAssignedTask(item)}
                            />{" "}
                            &nbsp;
                            <img
                              src={deleteIcon}
                              alt="delete"
                              width={40}
                              data-tooltip-id="traineeTaskTooltipDeleteEditView"
                              data-tooltip-content="Delete"
                              data-tooltip-place="top"
                              onClick={() => deleteAssignTask(item.id)}
                            />
                          </>
                        )}
                        {loggedUser.role === "Trainee" && !item.completed && (
                          <>
                            <img
                              src={submission}
                              alt="submission"
                              width={40}
                              data-tooltip-id="traineeTaskTooltipDeleteEditView"
                              data-tooltip-content="Submit Task"
                              data-tooltip-place="top"
                              onClick={() => openSubmitForm(item)}
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
          <>
            <Lottie
              animationData={noTaskAnimation}
              className="noTask"
              loop={false}
            />
            <div className="">
              <p className="fw-bold fs-3">No Task Added</p>
            </div>
          </>
        )}
        <button
          className={`btn btn-primary ${
            loggedUser.role === "Trainee" ? "d-none" : ""
          } text-light position-absolute addNewTask`}
          onClick={openModal}
        >
          + Add Task
        </button>
      </div>

      {/* Add New Task      */}

      {modalOpen && (
        <TraineeTaskForm
          setModalOpen={setModalOpen}
          matchingTrainee={props.matchingTrainee}
        />
      )}

      {/* Edit Taskform isfor edit the assigned task and item props is passed with
      the current data */}

      {editTaskForm && (
        <TraineeEditTaskForm
          matchingTrainee={props.matchingTrainee}
          item={selectedTask}
          setEditTaskForm={setEditTaskForm}
        />
      )}

      {/* assignedTask Show the already assigned task with popup modal */}

      {assignedTask && (
        <ViewAssignedTask
          item={selectedTask}
          setAssignedTask={setAssignedTask}
        />
      )}

      {/* submission */}

      {submitTaskForm && (
        <TaskSubmissionForm
          setSubmitTaskForm={setSubmitTaskForm}
          item={selectedTaskForSubmit}
        />
      )}
    </>
  )
}

export default TraineeTask
