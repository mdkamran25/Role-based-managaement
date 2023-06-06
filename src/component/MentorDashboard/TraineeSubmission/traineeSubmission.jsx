import React, { useState } from "react"
import "./TraineeSubmission.css"
import Lottie from "lottie-react"
import noDataAnimation from "./no-data.json"
import view from "../../../Image/icons-eye.png"
import edit from "../../../Image/icons-edit.png"
import deleteIcon from "../../../Image/icons-delete.svg"
import evaluation from "../../../Image/evaluation.png"
import { useSelector, useDispatch } from "react-redux"
import { deleteSubmissions } from "../../../slice/trainee/traineeLoginSlice"
import { Tooltip } from "react-tooltip"
import SubmissionEditForm from "../../TraineeDashboard/submissionEditForm/submissionEditForm"
import ViewSubmissionData from "../../TraineeDashboard/viewSubmissionData/viewSubmissionData"
import Evaluation from "../Evaluation/evaluation"
function TraineeSubmission() {
  const [isSubmissionButtonClicked, setSubmissionButtonClicked] = useState(true)
  const [openSubmissionView, setOpenSubmissionView] = useState(false)
  const [openEditForm, setOpenEditForm] = useState(false)
  const [openEvaluationForm, setOpenEvaluationForm] = useState(false)
  const [submissionEditFormData, setsubmissionEditFormData] = useState(null)
  const dispatch = useDispatch()
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )
  let loggedUserUpdatedData = useSelector(
    (state) => state.traineeLoginReducer.login
  )
  const CurrentUser =
    loggedUser.role && loggedUser.role === "Mentor"
      ? isSubmissionButtonClicked
        ? loggedUser.FirstTraineeEmail
        : loggedUser.SecondTraineeEmail
      : loggedUser.email

  loggedUserUpdatedData = loggedUserUpdatedData.filter(
    (trainee) => trainee.email === CurrentUser
  )

  const viewSubmission = (item) => {
    setOpenSubmissionView(true)
    setsubmissionEditFormData(item)
  }

  const evaluate = (item) => {
    setOpenEvaluationForm(true)
    setsubmissionEditFormData(item)
  }

  const editSubmission = (item) => {
    setOpenEditForm(true)
    setsubmissionEditFormData(item)
  }

  const deleteSubmission = (submissionID, submissionEmail) => {
    dispatch(
      deleteSubmissions({
        TraineeEmail: submissionEmail,
        TaskId: submissionID,
      })
    )
  }

  const handleSubmissionButtonClick = () => {
    setSubmissionButtonClicked(!isSubmissionButtonClicked)
  }

  return (
    <>
      <div className="noTaskImage d-flex flex-column align-items-center">
        {loggedUser.role === "Mentor" && (
          <div className="trainee-segmented-buttons position-relative col-12 rounded-top ">
            <button
              className={`btn px-4 position-absolute  no-hover`}
              id={`${isSubmissionButtonClicked ? "firstTraineeButton" : ""}`}
              onClick={handleSubmissionButtonClick}
            >
              First Trainee
            </button>
            <button
              className={`btn px-4 position-absolute  no-hover textOverflow`}
              onClick={handleSubmissionButtonClick}
              id={`${isSubmissionButtonClicked ? "" : "secondTraineeButton"}`}
            >
              Second Trainee
            </button>
          </div>
        )}
        {loggedUserUpdatedData[0] &&
        loggedUserUpdatedData[0].submission &&
        loggedUserUpdatedData[0].submission.length !== 0 ? (
          <div className="table-conatiner w-100 h-100 overflow-auto border border-top ">
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
                      {item.checked ? "Checked" : "Not Checked"}
                    </td>
                    <td>{item.checked ? item.marks : ""}</td>
                    <td className="align-middle">
                      <img
                        src={view}
                        alt="edit"
                        width={40}
                        data-tooltip-id="traineeTaskTooltipDeleteEditView"
                        data-tooltip-content="View Submission"
                        data-tooltip-place="top"
                        onClick={() => viewSubmission(item)}
                      />{" "}
                      &nbsp;
                      {loggedUser.role === "Mentor" && (
                        <>
                          <img
                            src={evaluation}
                            alt="evaluation"
                            width={40}
                            data-tooltip-id="traineeTaskTooltipDeleteEditView"
                            data-tooltip-content={
                              item.checked ? "Re-evaluate" : "Evaluate"
                            }
                            data-tooltip-place="top"
                            onClick={() => evaluate(item)}
                          />{" "}
                          &nbsp;
                        </>
                      )}
                      {loggedUser.role === "Trainee" && !item.checked && (
                        <>
                          <img
                            src={edit}
                            alt="edit"
                            width={40}
                            data-tooltip-id="traineeTaskTooltipDeleteEditView"
                            data-tooltip-content="Edit Submission"
                            data-tooltip-place="top"
                            onClick={() => editSubmission(item)}
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

      {/* open Evaluation Form */}
      {openEvaluationForm && (
        <Evaluation
          setOpenEvaluationForm={setOpenEvaluationForm}
          item={submissionEditFormData}
        />
      )}
      {/* Edit submitted task  */}

      {openEditForm && (
        <SubmissionEditForm
          item={submissionEditFormData}
          setOpenEditForm={setOpenEditForm}
        />
      )}

      {/* assignedTask Show the already assigned task with popup modal */}

      {openSubmissionView && (
        <ViewSubmissionData
          item={submissionEditFormData}
          setOpenSubmissionView={setOpenSubmissionView}
        />
      )}
    </>
  )
}

export default TraineeSubmission
