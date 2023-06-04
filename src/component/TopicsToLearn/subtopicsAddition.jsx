import React, { useState } from "react"
import { Field, ErrorMessage, Formik, Form } from "formik"
import * as Yup from "yup"
import minus from "../../Image/minus.png"

const SubtopicForm = (props) => {
  const closeModal = () => {
    props.setShowForm(false)
  }

  const [inputs, setInputs] = useState([{ id: 1, value: "" }])

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs]
    newInputs[index].value = event.target.value
    setInputs(newInputs)
  }

  const handleAddInput = () => {
    const newId = inputs.length + 1
    const newInputs = [...inputs, { id: newId, value: "" }]
    setInputs(newInputs)
  }

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs]
    newInputs.splice(index, 1)
    setInputs(newInputs)
  }

  const handleSubmit = (values, { resetForm }) => {
    // Do something with the input values
    console.log("va")
    console.log(values, "values")
    resetForm()
    closeModal()
  }

  const validationSchema = Yup.object().shape({
    topicName: Yup.string().required("Topic Name is required"),
    additionalInformation: Yup.string().required(
      "Additional Information is required"
    ),
    link: Yup.string().url("Invalid URL").required("Link is required"),
  })

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
                  additionalInformation: "",
                  link: [],
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="pt-0 mt-0">
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
                    <label
                      htmlFor="additionalInformation"
                      className="form-label"
                    >
                      Additional Information
                    </label>
                    <Field
                      as="textarea"
                      id="additionalInformation"
                      name="additionalInformation"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="additionalInformation"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  {inputs.map((input, index) => (
                    <div key={input.id} className="position-relative">
                      <div className="my-3">
                        <label htmlFor={`link-${index}`} className="form-label">
                          Topic Related Link
                        </label>
                        <Field
                          type="url"
                          id={`link-${index}`}
                          name={`link-${index}`}
                          className="form-control"
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <ErrorMessage
                          name={`link-${index}`}
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <img
                        className="position-absolute bottom-0 pb-1 end-0 pe-1"
                        src={minus}
                        style={{ cursor: "pointer" }}
                        width={30}
                        alt="Delete"
                        onClick={() => handleRemoveInput(index)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-primary text-white"
                    onClick={handleAddInput}
                  >
                    + Add Link
                  </button>
                  <button
                    type="submit"
                    className="ms-2 btn btn-primary text-white"
                  >
                    Submit
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubtopicForm
