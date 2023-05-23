import React, {useState} from 'react';
import './traineeTask.css'
import Lottie from "lottie-react"
import noTaskAnimation from "./empty-box-blue.json"
import TraineeTaskForm from './traineeTaskForm';
function TraineeTask() {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
      };
    return ( 
        <>
        <div className='noTaskImage position-relative d-flex flex-column align-items-center justify-content-center px-5'>
            <button className='btn btn-primary text-light position-absolute addNewTask' onClick={openModal}>+ Add Task</button>
            <Lottie animationData={noTaskAnimation} className="noTask" loop={false} />
            <div className=''>
                <p className='fw-bold fs-3'>No Task Added</p>
            </div>
        </div>
        {modalOpen && <TraineeTaskForm setModalOpen={setModalOpen} />}    
        </>
     );
}

export default TraineeTask;