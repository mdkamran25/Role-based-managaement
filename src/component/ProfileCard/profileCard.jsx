import React from 'react';
import { Link } from 'react-router-dom';
import './profileCard.css'
const ProfileCard = (props) => {
    const item = props.item
    return (

        <div className='ProfileCard text-center flex-column d-flex align-items-center justify-content-center rounded-4 py-5'>
            <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"} className="rounded-circle" width={150} height={150} alt="Profile Image" />
            <p className='fw-bold fs-2'>{item.name}</p>
            <p className='fw-light fs-5 mb-0'>{item.role}</p>
            <p className='fw-light fs-5'>{item.college}</p>
            <div className='col-12 d-flex justify-content-evenly'>
                <button className='btn btn-primary text-light px-3'>Message</button>
                <Link to='/traineeProfile' state={item} className="text-center">
                    <button className='btn text-primary border border-primary px-3'>View Profile</button>
                </Link>

            </div>
        </div>
    );
};

export default ProfileCard;
