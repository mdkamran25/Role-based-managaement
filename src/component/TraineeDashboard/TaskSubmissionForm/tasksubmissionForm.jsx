/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { addSubmission } from "../../../slice/trainee/traineeLoginSlice"
import { ShowNotification } from "../../../slice/mentor/mentorLoginSlice"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { getCurrentDate, getCurrentTime } from "../../../Utils/dateTimeUtils"

const validationSchema = Yup.object().shape({
  repo: Yup.string()
    .url("Invalid Git Repo Link")
    .required("Git Repo Link is required"),
  //   description: Yup.string().required("Additional Information is required"),
})

function TaskSubmissionForm(props) {
  const closeModal = () => {
    props.setSubmitTaskForm(false)
  }
  const loggedUser = useSelector(
    (state) => state.loggedUserReducer.loggedUserDetails
  )

  const dispatch = useDispatch()

  const handleSubmit = (values, { resetForm }) => {
    values = {
      ...values,
      time: getCurrentTime(),
      date: getCurrentDate(),
      name: loggedUser.name,
      email: loggedUser.email,
      id: props.item.id,
      taskName: props.item.taskName,
      checked: false,
      marks: null,
      feedback: null,
    }
    dispatch(addSubmission(values))
    dispatch(ShowNotification({ mentorEmail: loggedUser.mentor, seen: true }))
    resetForm()
    closeModal()
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
                  Submit Task
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
                <Formik
                  initialValues={{
                    repo: "",
                    description: "",
                    file: undefined,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="pt-0">
                    <span className="fw-bold fs-5">{props.item.taskName}</span>

                    <div className="my-3">
                      <label htmlFor="repo" className="form-label">
                        Git Repo Link
                      </label>
                      <Field
                        type="url"
                        id="repo"
                        name="repo"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="repo"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Additional Information
                      </label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-warning ms-2">
                      Reset
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskSubmissionForm
