import React, { useState, useCallback } from 'react';
import bell from "../../Image/bell.svg";
import './bellNotification.css'
const SmallBox = React.memo(() => {
    return (
        <div className="small-box position-absolute rounded-2">
            <div className='taskNotification d-flex position-relative justify-content-between pt-2 pb-4 px-3'>
                <p className='text-dark mb-0 fw-bold'>Task</p>
                <p className='text-dark fw-normal mb-0 position-absolute taskName'>Task Name</p>
                <p className='text-dark fw-normal'>Task Time</p>
                <p className='text-dark mb-0 fw-normal position-absolute taskDate'>Task Date</p>
            </div>
            <hr />
            <div className='submissionNotification d-flex position-relative justify-content-between pt-2 pb-4 px-3'>
                <p className='text-dark fw-bold mb-0'>Submission</p>
                <p className='text-dark fw-normal mb-0 position-absolute taskName'>Task Name</p>
                <p className='text-dark fw-normal'>Task Time</p>
                <p className='text-dark fw-normal mb-0 position-absolute taskDate'>Task Date</p>
            </div>
            <hr />
        </div>
    );
});

function BellNotification() {
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const handleNotificationClick = useCallback(() => {
        setIsBoxVisible(prevState => !prevState);
    }, []);

    return (
        <div className="bell-notification ms-auto me-4 position-relative" onClick={handleNotificationClick} current-count="8">
            <img src={bell} className='bell' width={40} alt="bell-notification" />
            {isBoxVisible && <SmallBox />}
        </div>
    );
}

export default BellNotification;
