import React from 'react';
import './TraineeSubmission.css'
import Lottie from "lottie-react";
import noDataAnimation from "./no-data.json";
function TraineeSubmission() {
    return ( 
        <>
        <div className='noSubmissionAnimation position-relative d-flex align-items-center justify-content-center p-5'>
            <Lottie animationData={noDataAnimation} className="noSubmission" loop={false}/>
            <div className='position-absolute bottom-0'>
                <p className='fw-bold fs-3'>No Submission Yet</p>
            </div>
        </div>
            
        </>
     );
}

export default TraineeSubmission;