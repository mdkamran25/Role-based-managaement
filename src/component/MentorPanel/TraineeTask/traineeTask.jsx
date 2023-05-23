import React from 'react';
import noTask from "../../../Image/no-task.svg"
import './traineeTask.css'
import Lottie from "lottie-react"
import noTaskAnimation from "./empty-box-blue.json"
function TraineeTask() {
    return ( 
        <>
        <div className='noTaskImage position-relative d-flex align-items-center justify-content-center p-5'>
            <Lottie animationData={noTaskAnimation} className="noTask" loop={false} />
            <div className='position-absolute bottom-0'>
                <p className='fw-bold fs-3'>No Task Added</p>
            </div>
        </div>
            
        </>
     );
}

export default TraineeTask;