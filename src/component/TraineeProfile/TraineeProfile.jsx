import React from 'react';
import './TraineeProfile.css';
import linkdinIcon from '../../Image/linkedin-icon.svg'
function TraineeProfile() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='container bg-light py-5 rounded-4 Trainee-Profile-container'>
                    <div className="row g-0 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly">
                        <div className='col-10 col-md-4 Profile-Card flex-column d-flex align-items-center justify-content-center rounded-4 py-5'>
                            <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} className="rounded-circle" width={150} height={150} alt="Profile Image" />
                            <p className='fw-bold fs-2'>Full Name</p>
                            <p className='fw-light fs-5 mb-0'>Trainee</p>
                            <p className='fw-light fs-5'>College Name</p>
                            <button className='btn btn-primary text-light px-3'>Message</button>
                        </div>
                        <div className='col-10 col-md-7 Personal-Detail rounded-4 py-5'>
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Full Name:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>Md Kamran</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Email:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>Md Kamran</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Phone:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>Md Kamran</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>Address:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>Md Kamran</span>
                                </div>
                            </div>
                            <hr className='mx-5' />
                            <div className='row g-0 d-flex justify-content-center'>
                                <div className='col-4'>
                                    <span className='fw-bold fs-4'>College:</span>
                                </div>
                                <div className='col-6 pt-1'>
                                    <span className='fw-light fs-5'>Md Kamran</span>
                                </div>
                            </div>
                        </div>
                        <div className=' col-10 col-md-3 Social-Media rounded-4 py-5 mt-3'>
                            <div className='col-12'>
                                <img src={linkdinIcon} width={30} />
                                <a className='nav-link active' href="#">https://www.linkdin.com</a>
                            </div>
                            Social Media
                        </div>
                        <div className='col-10 col-md-4 Course-Completed rounded-4 py-5'>
                            Course Completed
                        </div>
                        <div className='col-10 col-md-4 Task-Completed rounded-4 py-5'>
                            Task Completed
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TraineeProfile;