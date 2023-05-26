import React from 'react';
import './TraineeProfile.css';
import linkdinIcon from '../../Image/linkedin-icon.svg'
import githubIcon from '../../Image/github.gif'
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
function TraineeProfile() {
    const location = useLocation();
    const ProfileData = location.state
    console.log(ProfileData, "user Profile")
    const topics = useSelector(state => state.topicsToLearnReducer.topics)
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='container bg-light py-5 rounded-4 Trainee-Profile-container'>
                    <div className="row g-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly">
                        <div className='col-10 col-md-3 Profile-Card flex-column d-flex align-items-center justify-content-center rounded-4 py-5'>
                            <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} className="rounded-circle" width={150} height={150} alt="Profile Image" />
                            <p className='fw-bold fs-2'>{ProfileData.name}</p>
                            <p className='fw-light fs-5 mb-0'>{ProfileData.role}</p>
                            <p className='fw-light fs-5'>{ProfileData.college}</p>
                            <button className='btn btn-primary text-light px-3'>Message</button>
                        </div>
                        <div className='col-10 mt-3 mt-md-0 col-md-8 Personal-Detail rounded-4 py-5'>
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Full Name:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>{ProfileData.name}</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Email:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>{ProfileData.email}</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Phone:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>{ProfileData.phone}</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>College:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>{ProfileData.college}</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Address:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>{ProfileData.address}</span>
                                </div>
                            </div>
                        </div>
                        <div className=' col-10 col-md-3  Social-Media rounded-4 py-5 mt-3'>
                            <div className='col-12 d-flex px-3 px-md-2 px-xl-3'>
                                <img src={linkdinIcon} width={30} />
                                <a className='nav-link active ms-auto' href="#">{ProfileData.gtihub ? ProfileData.github : "Not Added"}</a>
                            </div>
                            <hr />
                            <div className='col-12 d-flex px-3 px-md-2 px-xl-3'>
                                <img src={githubIcon} width={30} />
                                <a className='nav-link active ms-auto' href="#">{ProfileData.gtihub ? ProfileData.github : "Not Added"}</a>
                            </div>

                        </div>
                        <div className='col-10 col-md-4 Course-Completed rounded-4 pb-5 pt-3 mt-3'>
                            <p className='fw-bold fs-5 pb-2 px-3'>Topics To Learn</p>
                            <div className='topics-container'>
                            {
                                topics.map((item) => {
                                    console.log(item, "item");
                                    return (
                                        <>
                                            <div className='col-12 px-3' key={item.id}>
                                                {item.topicName}
                                                <div class="progress">
                                                    <div class="progress-bar w-25" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <hr />
                                        </>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className='col-10 col-md-4 Task-Completed rounded-4 pb-5 pt-3 mt-3'>
                            <p className='fw-bold fs-5 pb-2 px-3'>Task Completed</p>
                            <div className='col-12 px-3'>

                            </div>
                            {/* <hr /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TraineeProfile;