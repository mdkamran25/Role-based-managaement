import React, { useState } from 'react';
import './traineeTask.css'
import Lottie from "lottie-react"
import { useSelector, useDispatch } from 'react-redux';
import view from "../../../Image/icons-eye.png";
import deleteIcon from "../../../Image/icons-delete.svg";
import noTaskAnimation from "./empty-box-blue.json";
import TraineeTaskForm from './traineeTaskForm';
import { deleteTask } from '../../../slice/trainee/traineeLoginSlice';
import { Tooltip } from "react-tooltip";
function TraineeTask(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const editAssignedTask = () => {

    }
    const dispatch = useDispatch();

    const deleteAssignTask = (ItemId) => {
        console.log("ItemId", ItemId);

        props.matchingTrainee.forEach((trainee) => {
            console.log(trainee.email)
            dispatch(deleteTask({ TraineeEmail: trainee.email, TaskId: ItemId }))
        })
    }
    return (
        <>
            <div className='noTaskImage d-flex flex-column align-items-center'>
                {props.matchingTrainee[0].tasks.length !== 0 ? (
                    <div className='table-conatiner w-100 h-100 overflow-auto border border-1 rounded-1' >
                        <table className="table table-height table-striped table-hoverable">
                            <thead>
                                <tr className='tableHead'>
                                    <th scope="col" className="px-4">Task</th>
                                    <th scope="col" >Task Details</th>
                                    <th scope="col">Task Assigned</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.matchingTrainee[0].tasks.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-3"><img src={item.file} alt="task image" width={80} height={50} /></td>
                                        <td className='descriptionInTable'><span className='fw-bold'>{item.taskName}</span>
                                            <br />
                                            <span className='fw-light'>{item.description}</span>
                                        </td>
                                        <td>{item.time}
                                            <br />
                                            {item.date}
                                        </td>
                                        <td className='align-middle justify'>
                                            <img src={view} alt="edit" width={40}
                                                data-tooltip-id="traineeTaskTooltipDeleteEditView"
                                                data-tooltip-content="View/Edit"
                                                data-tooltip-place="top"
                                                onClick={editAssignedTask}
                                            />  &nbsp; &nbsp;
                                            <img src={deleteIcon} alt="edit" width={40}
                                                data-tooltip-id="traineeTaskTooltipDeleteEditView"
                                                data-tooltip-content="Delete"
                                                data-tooltip-place="top"
                                                onClick={() => deleteAssignTask(item.id)}
                                            />
                                        </td>
                                        <Tooltip id="traineeTaskTooltipDeleteEditView" />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <>
                        <Lottie animationData={noTaskAnimation} className="noTask" loop={false} />
                        <div className="">
                            <p className="fw-bold fs-3">No Task Added</p>
                        </div>
                    </>
                )}
                <button className='btn btn-primary text-light position-absolute addNewTask' onClick={openModal}>+ Add Task</button>

            </div>
            {modalOpen && <TraineeTaskForm setModalOpen={setModalOpen} matchingTrainee={props.matchingTrainee} />}
        </>
    );
}

export default TraineeTask;