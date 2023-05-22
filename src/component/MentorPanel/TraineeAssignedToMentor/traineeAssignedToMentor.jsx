import React from 'react'
import { useSelector } from 'react-redux';
function TraineeAssignedToMentor() {
    const mentorDetail = useSelector((state) => state.mentorLoginReducer.loggedUserDetails)
    const traineeData = useSelector((state) => state.traineeLoginReducer.login)
    return (
        <>
            <div className="col-12 d-flex flex-column flex-lg-row mt-5 justify-content-center justify-content-lg-evenly align-items-lg-start align-items-center">
                <div className="col-11 col-lg-6 mentorDetail rounded-3 d-flex flex-column">
                    <div className="col-12 pt-3 pe-2">
                        <span className='table-name ps-1'>Mentor Details</span>
                        <button className="btn btn-primary float-end" onClick={openModal}>+ Add Mentor</button>
                    </div>
                                   
                </div>
                <div className="col-11 col-lg-5 mentorDetail mt-3 mt-lg-0 rounded-3 d-flex flex-column">

                </div>
            </div>
        </>
    );
}

export default TraineeAssignedToMentor;