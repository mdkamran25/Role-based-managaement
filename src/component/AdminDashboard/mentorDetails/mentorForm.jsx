import React from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { updateTrainee } from "../../../slice/trainee/traineeLoginSlice"
import { addMentor, mentorStatus } from "../../../slice/mentor/mentorLoginSlice"
import { useDispatch, useSelector } from "react-redux"

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
  FirstTraineeEmail: Yup.string()
    .email("Invalid email")
    .required("Trainee Email is required"),
  SecondTraineeEmail: Yup.string().email("Invalid email"),
  // .required("Trainee Email is required"),
  // password: Yup.string()
  //   .matches(
  //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/,
  //     "Password must contain at least one letter, one number, one special character, and be 5-10 characters long"
  //   )
  //   .required("Password is required"),
})
function MentorForm(props) {
  const trainees = useSelector((state) => state.traineeLoginReducer.login || [])
  const allMentorInReactDepartment = useSelector(
    (state) => state.mentorLoginReducer.allMentorsInReactDepartment || []
  )

  const mentorOptions = allMentorInReactDepartment.filter(
    (mentor) => !mentor.assigned
  )
  console.log(mentorOptions, allMentorInReactDepartment)
  const closeModal = () => {
    props.setModalOpen(false)
  }

  const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    dispatch(addMentor(values))
    dispatch(mentorStatus(values.email))

    const mentor = values
    const matchingTrainees = trainees.filter(
      (trainee) =>
        trainee.email === mentor.FirstTraineeEmail ||
        trainee.email === mentor.SecondTraineeEmail
    )

    matchingTrainees.forEach((trainee) => {
      dispatch(updateTrainee({ traineeId: trainee.id, mentor: mentor.email }))
    })

    closeModal()
  }

  return (
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
                Mentor Form
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
                  // password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ touched, errors }) => (
                  <Form className="pt-0">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <Field
                        autoComplete="off"
                        required
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                      />
                      {touched.name && errors.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="department" className="form-label">
                        Department
                      </label>
                      <Field
                        autoComplete="off"
                        required
                        type="text"
                        id="department"
                        name="department"
                        className={`form-control ${
                          touched.department && errors.department
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      {touched.department && errors.department && (
                        <div className="text-danger">{errors.department}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="designation" className="form-label">
                        Designation
                      </label>
                      <Field
                        autoComplete="off"
                        required
                        type="text"
                        id="designation"
                        name="designation"
                        className={`form-control ${
                          touched.designation && errors.designation
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      {touched.designation && errors.designation && (
                        <div className="text-danger">{errors.designation}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Mentor Email
                      </label>
                      <Field
                        autoComplete="off"
                        required
                        as="select"
                        id="email"
                        name="email"
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                      >
                        <option value="">Select Mentor Email</option>
                        {mentorOptions.map((mentor) => (
                          <option key={mentor.id} value={mentor.mentor}>
                            {mentor.mentor}
                          </option>
                        ))}
                      </Field>

                      {touched.email && errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="FirstTraineeEmail" className="form-label">
                        First Trainee Email
                      </label>
                      <Field
                        autoComplete="off"
                        required
                        type="email"
                        id="FirstTraineeEmail"
                        name="FirstTraineeEmail"
                        className={`form-control ${
                          touched.FirstTraineeEmail && errors.FirstTraineeEmail
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      {touched.FirstTraineeEmail &&
                        errors.FirstTraineeEmail && (
                          <div className="text-danger">
                            {errors.FirstTraineeEmail}
                          </div>
                        )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="SecondTraineeEmail"
                        className="form-label"
                      >
                        Second Trainee Email
                      </label>
                      <Field
                        autoComplete="off"
                        type="email"
                        id="SecondTraineeEmail"
                        name="SecondTraineeEmail"
                        className={`form-control ${
                          touched.SecondTraineeEmail &&
                          errors.SecondTraineeEmail
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      {touched.SecondTraineeEmail &&
                        errors.SecondTraineeEmail && (
                          <div className="text-danger">
                            {errors.SecondTraineeEmail}
                          </div>
                        )}
                    </div>
                    {/* <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        autoComplete="off"
                        required
                        type="password"
                        id="password"
                        name="password"
                        className={`form-control ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      {touched.password && errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </div> */}

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" className="ms-2 btn btn-warning">
                      Reset
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorForm