import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { updateTask } from "../../../slice/trainee/traineeLoginSlice"
import { useDispatch } from "react-redux"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  taskName: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      "Task Name can only contain alphabets & number"
    )
    .min(2, "Task Name must be at least 2 characters")
    .max(100, "Task Name must not exceed 100 characters")
    .required("Task Name is required"),
  description: Yup.string()
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      "Description can only contain alphabets and numbers"
    )
    .min(10, "Description must be at least 10 characters")
    .max(2000, "Description must not exceed 2000 characters")
    .required("Description is required"),

  file: Yup.mixed().test(
    "file",
    "File must be either absent or a valid file",
    function (value) {
      if (!value) {
        return true
      }
      // Perform additional file validation here
      // For example, file type and size checks
      let image = document.getElementById("file")
      let rules = /[^\s]+(.*?).(jpg|jpeg|png|svg|txt)$/i

      if (value && !image.value.match(rules)) {
        // Invalid file type
        return this.createError({
          message: "Only PNG, JPG, JPEG, SVG, and TXT file types are allowed",
          path: "file",
        })
      }

      if (value && image.files[0].size > 1024 * 1024) {
        return this.createError({
          message: "File size should be less than or equal to 1MB",
          path: "file",
        })
      }

      return true
    }
  ),
})

function TraineeEditTaskForm(props) {
  const closeModal = () => {
    props.setEditTaskForm(false)
  }
  const date = new Date()
  const options = { hour12: false }
  const time = date.toLocaleTimeString("en-US", options)
  const dates = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const dispatch = useDispatch()

  const handleSubmit = (values, { resetForm }) => {
    let image = document.getElementById("file")

    if (image.files[0]) {
      const fr = new FileReader()
      fr.readAsDataURL(image.files[0])
      fr.onload = () => {
        let url = fr.result
        values.file = url
        updateTaskWithValues(values)
      }
    } else {
      values.file = props.item.file
      updateTaskWithValues(values)
    }

    resetForm()
    closeModal()
  }

  const updateTaskWithValues = (values) => {
    values = {
      ...values,
      time: time,
      date: dates,
    }

    props.matchingTrainee.forEach((trainee) => {
      dispatch(
        updateTask({
          TraineeEmail: trainee.email,
          TaskId: props.item.id,
          Task: values,
        })
      )
    })
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
                  Update Task
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
                    taskName: props.item.taskName,
                    description: props.item.description,
                    file: undefined,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="pt-0">
                    <div className="mb-3">
                      <label htmlFor="taskName" className="form-label">
                        Task Name
                      </label>
                      <Field
                        type="text"
                        id="taskName"
                        name="taskName"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="taskName"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="file" className="form-label">
                        Add File
                      </label>
                      <Field
                        type="file"
                        id="file"
                        name="file"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="file"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Task Description
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

export default TraineeEditTaskForm
