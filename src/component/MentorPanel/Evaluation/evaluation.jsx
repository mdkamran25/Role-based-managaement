import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useDispatch } from "react-redux"
import { updatedSubmitted } from "../../../slice/trainee/traineeLoginSlice"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  marks: Yup.number()
    .min(0, "Marks must be greater than or equal to 0")
    .max(100, "Marks must be less than or equal to 100")
    .required("Marks is required"),
  feedback: Yup.string().required("Either good or bad, feedback is required."),
})

function Evaluation(props) {
  const closeModal = () => {
    props.setOpenEvaluationForm(false)
  }
  const dispatch = useDispatch()

  const date = new Date()
  const options = { hour12: false }
  const time = date.toLocaleTimeString("en-US", options)
  const dates = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const handleSubmit = (values, { resetForm }) => {
    values = {
      ...values,
      evaluationTime: time,
      evaluationDate: dates,
      checked: true,
      email: props.item.email,
      id: props.item.id,
    }
    dispatch(updatedSubmitted(values))

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
                    marks: props.item.checked ? props.item.marks : "",
                    feedback: props.item.checked ? props.item.feedback : "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="pt-0">
                    <span className="fw-bold fs-5">{props.item.taskName}</span>

                    <div className="my-3">
                      <label htmlFor="marks" className="form-label">
                        Marks
                      </label>
                      <Field
                        type="text"
                        id="marks"
                        name="marks"
                        className="form-control"
                        placeholder="Marks out of 100"
                      />
                      <ErrorMessage
                        name="marks"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="feedback" className="form-label">
                        Additional Information
                      </label>
                      <Field
                        as="textarea"
                        id="feedback"
                        name="feedback"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="feedback"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
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

export default Evaluation
