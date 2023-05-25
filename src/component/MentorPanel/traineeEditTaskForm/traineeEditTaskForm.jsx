import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addTask } from "../../../slice/trainee/traineeLoginSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

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

  file: Yup.mixed()
    .test(
      "fileType",
      "Only PNG, TXT, JPG, JPEG, and SVG file types are allowed",
      (value) => value || (value && /(png|txt|jpg|jpeg|svg)$/.test(value.type))
    )
    .test(
      "fileSize",
      "File size should be less than or equal to 1MB",
      (value) => value || (value && value.size >= 1048576)
    )


});

function TraineeEditTaskForm(props) {
  const closeModal = () => {
    props.setEditTaskForm(false);
  };
  const date = new Date();
  const options = { hour12: false };
  const time = date.toLocaleTimeString("en-US", options);
  const dates = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  console.log("matchingTrainee= ", props.matchingTrainee)

  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    console.log(values);
    let image = document.getElementById("file");
    console.log(image.files[0], "values as file");
    const fr = new FileReader();
    fr.readAsDataURL(image.files[0]);
    fr.onload = () => {
      let url = fr.result;
      values.file = url;
      values = {
        ...values, time: time, date: dates
      }
      props.matchingTrainee.forEach((trainee) => {
        dispatch(addTask({ traineeEmail: trainee.email, task: values }));
      });
    };
    closeModal();
  };
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
                    taskName: "",
                    description: "",
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
                        value={props.item.taskName}
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
                        value={props.item.file}
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
                        value={props.item.description}
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
  );
}

export default TraineeEditTaskForm;
