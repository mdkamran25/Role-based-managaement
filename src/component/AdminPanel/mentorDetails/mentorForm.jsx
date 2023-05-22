import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addTrainee, updateTrainee } from '../../../slice/trainee/traineeLoginSlice';
import { addMentor } from '../../../slice/mentor/mentorLoginSlice';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = Yup.object().shape({
  // Validation schema definition...
});

function MentorForm(props) {
  const mentors = useSelector(state => state.mentorLoginReducer.login || []);
  const trainees = useSelector(state => state.traineeLoginReducer.login || []);

  const closeModal = () => {
    props.setModalOpen(false);
  };

  const dispatch = useDispatch();

//   const assignMentorToTrainee = () => {
//     mentors.forEach((mentor) => {
//       const matchingTrainees = trainees.filter(
//         (trainee) =>
//           trainee.email === mentor.FirstTraineeEmail ||
//           trainee.email === mentor.SecondTraineeEmail
//       );
//       console.log(matchingTrainees, "m t");
  
//       if (matchingTrainees.length > 0) {
//         const mentorName = mentor.name;
  
//         matchingTrainees.forEach((matchingTrainee) => {
//           const traineeId = matchingTrainee.id;
//           dispatch(updateTrainee({ traineeId, mentor: mentorName }));
//         });
//       }
//     });
//   };
  
  
// const assignMentorToTrainee = () => {
//     mentors.forEach((mentor) => {
//       const matchingTrainees = trainees.filter(
//         (trainee) =>
//           trainee.email === mentor.FirstTraineeEmail ||
//           trainee.email === mentor.SecondTraineeEmail ||
//           (mentor.SecondTraineeEmail === null && trainee.mentor === null)
//       );
  
//       if (matchingTrainees.length > 0) {
//         const mentorName = mentor.name;
  
//         matchingTrainees.forEach((matchingTrainee) => {
//           const traineeId = matchingTrainee.id;
//           dispatch(updateTrainee({ traineeId, mentor: mentorName }));
//         });
//       }
//     });
//   };
// useEffect(()=>{
//     assignMentorToTrainee();
// },[])

//   const handleSubmit = async (values) => {
//     dispatch(addMentor(values));
//     assignMentorToTrainee();
//     closeModal();
//   };
const handleSubmit = async (values) => {
    dispatch(addMentor(values));
  
    const mentor = values;
    const matchingTrainees = trainees.filter(
      (trainee) =>
        trainee.email === mentor.FirstTraineeEmail ||
        trainee.email === mentor.SecondTraineeEmail
    );
  
    matchingTrainees.forEach((trainee) => {
      dispatch(updateTrainee({ traineeId: trainee.id, mentor: mentor.email }));
    });
  
    closeModal();
  };
  
    return (
            <div>
                <div
                    className="modal-backdrop show"
                    style={{ backdropFilter: 'blur(8px)' }}
                ></div>
                <div
                    className="modal fade show"
                    id="exampleModalToggle"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel"
                    tabIndex="-1"
                    style={{ display: 'block' }}
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
                                        name: '',
                                        department: '',
                                        designation: '',
                                        email: '',
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
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''
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
                                                    type="text"
                                                    id="department"
                                                    name="department"
                                                    className={`form-control ${touched.department && errors.department
                                                        ? 'is-invalid'
                                                        : ''
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
                                                    type="text"
                                                    id="designation"
                                                    name="designation"
                                                    className={`form-control ${touched.designation && errors.designation ? 'is-invalid' : ''
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
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''
                                                        }`}
                                                />
                                                {touched.email && errors.email && (
                                                    <div className="text-danger">{errors.email}</div>
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="FirstTraineeEmail" className="form-label">
                                                    First Trainee Email
                                                </label>
                                                <Field
                                                    type="email"
                                                    id="FirstTraineeEmail"
                                                    name="FirstTraineeEmail"
                                                    className={`form-control ${touched.FirstTraineeEmail && errors.FirstTraineeEmail ? 'is-invalid' : ''
                                                        }`}
                                                />
                                                {touched.FirstTraineeEmail && errors.FirstTraineeEmail && (
                                                    <div className="text-danger">{errors.FirstTraineeEmail}</div>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="SecondTraineeEmail" className="form-label">
                                                    Second Trainee Email
                                                </label>
                                                <Field
                                                    type="email"
                                                    id="SecondTraineeEmail"
                                                    name="SecondTraineeEmail"
                                                    className={`form-control ${touched.SecondTraineeEmail && errors.SecondTraineeEmail ? 'is-invalid' : ''
                                                        }`}
                                                />
                                                {touched.SecondTraineeEmail && errors.SecondTraineeEmail && (
                                                    <div className="text-danger">{errors.SecondTraineeEmail}</div>
                                                )}
                                            </div>


                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                            <button type="reset" className="ms-2 btn btn-warning">
                                                Reset
                                            </button>

                                        </Form>
                                      )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default MentorForm;