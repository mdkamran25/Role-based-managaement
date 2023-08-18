import React, { forwardRef } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import nothingfind from "../../assets/Image/nothingfind.svg"
import { addNewTopicWithNotification } from "../../slice/TopicsToLearn/topicsToLearnSlice"

const validationSchema = Yup.object().shape({
  topicName: Yup.string()
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

  img: Yup.mixed().test(
    "img",
    "img must be either absent or a valid img",
    function (value) {
      if (!value) {
        return true
      }

      let image = document.getElementById("img")
      let rules = /[^\s]+(.*?).(jpg|jpeg|png|svg|txt)$/i

      if (!image || !image.value.match(rules)) {
        return this.createError({
          message: "Only PNG, JPG, JPEG, SVG, and TXT img types are allowed",
          path: "img",
        })
      }

      if (image.files[0].size > 1024 * 1024) {
        return this.createError({
          message: "img size should be less than or equal to 1MB",
          path: "img",
        })
      }

      return true
    }
  ),
})

const NewTopicsForm = forwardRef((props, ref) => {
  const closeModal = () => {
    props.setShowForm(false)
  }

  const dispatch = useDispatch()

  const handleSubmit = (values, { resetForm }) => {
    let image = document.getElementById("img")

    if (image && image.files && image.files[0]) {
      const fr = new FileReader()
      fr.readAsDataURL(image.files[0])
      fr.onload = () => {
        let url = fr.result
        values.img = url
        dispatch(addNewTopicWithNotification(values))
      }
    } else {
      values.img = nothingfind
      dispatch(addNewTopicWithNotification(values))
    }

    resetForm()
    closeModal()
    setTimeout(() => ref.current.scrollIntoView({ behavior: "smooth" }), 10)
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
                  Add New Topics
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
                    topicName: "",
                    description: "",
                    img: undefined,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form className="pt-0">
                    <div className="mb-3">
                      <label htmlFor="topicName" className="form-label">
                        Topic Name
                      </label>
                      <Field
                        type="text"
                        id="topicName"
                        name="topicName"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="topicName"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="img" className="form-label">
                        Add img
                      </label>
                      <Field
                        type="file"
                        id="img"
                        name="img"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="img"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Topic Description
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
})

export default NewTopicsForm
