import React from 'react';
import noTask from "../../../Image/no-task.svg"
import './traineeTask.css'
function TraineeTask() {
    return ( 
        <>
        <div className='noTaskImage position-relative d-flex align-items-center justify-content-center p-5'>
            <img src={noTask} className="m-5 noTask"/>
            <div className='position-absolute bottom-0'>
                <p className='fw-bold fs-3'>No Task Added</p>
            </div>
        </div>
            
        </>
     );
}

export default TraineeTask;