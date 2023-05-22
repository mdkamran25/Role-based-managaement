import React, { useState } from "react";
import { useSelector } from "react-redux";
import TraineeTask from "../TraineeTask/traineeTask";
import "./traineeAssignedToMentor.css";
function TraineeAssignedToMentor() {
    // const [data, setData] = useState()

    const mentorDetail = useSelector(
        (state) => state.mentorLoginReducer.loggedUserDetails
    );

    const traineeData = useSelector((state) => state.traineeLoginReducer.login);

    const matchingTrainees = traineeData.filter(
        (trainee) => trainee.mentor === mentorDetail[0].email
    );

    console.log(matchingTrainees, "trainee filter Data");
    // const SegmentedButtons = () => {
    //     const [isSubmissionButtonClicked, setSubmissionButtonClicked] = useState(false);

    //     const handleSubmissionButtonClick = () => {
    //         setSubmissionButtonClicked(true);
    //     };

        return (
            <>
                <div className="col-12 d-flex flex-column flex-md-row mt-5 justify-content-center justify-content-md-evenly align-items-md-start align-items-center">
                    <div className="col-11 col-md-5 TraineeDetail rounded-3 d-flex flex-row">
                        <div className="col-12 pt-3">
                            <span className="table-name pt-1 ps-2">Trainee Assigned</span>
                            <hr />
                            <div className="col-12 d-flex align-items-center justify-content-center flex-column flex-xl-row pb-3">
                                {matchingTrainees &&
                                    matchingTrainees.map((items) => {
                                        return (
                                            <div className="p-2" key={items.id}>
                                                <div
                                                    className="card pt-2 pb-3"
                                                    style={{ width: "18rem" }}
                                                >
                                                    <img
                                                        className="rounded-circle align-self-center"
                                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                        alt="User-Profile-Image"
                                                        width={100}
                                                        height={100}
                                                    />
                                                    <div className="card-body float-left ps-3 pt-3 pb-0">
                                                        <h5 className="card-title p-0 m-0">
                                                            Name: <span>{items.name}</span>
                                                        </h5>
                                                    </div>
                                                    <hr />
                                                    <span className="ps-3">
                                                        Email: <span>{items.email}</span>
                                                    </span>
                                                    <hr />
                                                    <span className="ps-3">
                                                        Department: {items.department}
                                                    </span>
                                                    <hr />
                                                    <span className="ps-3">
                                                        Designation: {items.designation}
                                                    </span>
                                                    <hr />
                                                    <button className="btn btn-primary w-50 align-self-center">
                                                        View Profile
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-5 mt-3 mt-md-0 rounded-3 d-flex flex-column TraineeDetail rounded-3">
                        {/* <div className="segmented-buttons col-12">
                            <button
                                className={`btn btn-primary pt-3 ${isSubmissionButtonClicked ? 'fade-effect' : ''}`}
                                id="submissionButton"
                                onClick={handleSubmissionButtonClick}
                            >
                                Submission
                            </button>
                            <button className="btn btn-light pt-3" id="taskButton">
                                Task
                            </button>
                        </div> */}
                        <hr className="mt-0" />
                        <div className="col-12">
                            <TraineeTask />
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default TraineeAssignedToMentor;
