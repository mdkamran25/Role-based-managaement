import React from 'react';
import ProfileCard from '../ProfileCard/profileCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './allTraineeProfileCard.css';

function AllTraineeProfileCard() {
  const traineeData = useSelector(state => state.traineeLoginReducer.login);
  
  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-12'>
          <h3 className='mb-0'>All Trainees in React Department</h3>
        </div>
      </div>
      <div className='row g-3 pb-3'>
        {traineeData.map((item) => (
          <div className='col-12 col-sm-6 col-md-4 col-lg-3' key={item.id}>
            <ProfileCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTraineeProfileCard;
