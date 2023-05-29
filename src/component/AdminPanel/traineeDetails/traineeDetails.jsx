import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import TraineeForm from './traineeForm';
import './traineeDetails.css'


function TraineeDetails() {
    const traineeDetail = useSelector(state => state.traineeLoginReducer.login)
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };


    return (
        <>
            <div className="col-12 pt-3 pe-2">
                <span className='table-name ps-1'>Trainee Details</span>
                <button className="btn btn-primary float-end text-light" onClick={openModal}>
                    + Add Trainee
                </button>
            </div>
            <hr />
            <div className="col-12 traineeTable">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                            <th scope="col">Mentor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            traineeDetail.map((item) => (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.department}</td>
                                    <td>{item.mentor || "Not assigned"}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            
            {modalOpen && (
                <TraineeForm setModalOpen={setModalOpen} />
            )
            }
        </>
    );
}

export default TraineeDetails;
