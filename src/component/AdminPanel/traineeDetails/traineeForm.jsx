import React from "react"
import { addTrainee } from "../../../slice/trainee/traineeLoginSlice"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain alphabets")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must not exceed 30 characters")
    .required("Name is required"),
  department: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Department can only contain alphabets")
    .min(2, "Department must be at least 2 characters")
    .max(20, "Department must not exceed 20 characters")
    .required("Department is required"),
  designation: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Designation can only contain alphabets")
    .min(2, "Designation must be at least 2 characters")
    .max(20, "Designation must not exceed 20 characters")
    .required("Designation is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
})

function TraineeForm(props) {
  const closeModal = () => {
    props.setModalOpen(false)
  }
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    console.log(values)
    dispatch(addTrainee(values))
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
                  Trainee Form
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
                    name: "",
                    department: "",
                    designation: "",
                    email: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="pt-0">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <Field
                        type="text"
                        id="department"
                        name="department"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="department"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="designation" className="form-label">
                        Designation
                      </label>
                      <Field
                        type="text"
                        id="designation"
                        name="designation"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="designation"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" className=" ms-2 btn btn-warning">
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

export default TraineeForm
