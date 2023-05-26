import React from 'react';
import { useSelector } from 'react-redux';
import nothingfind from "../../Image/nothingfind.svg"
import './topicsToLearn.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function TopicsToLearn() {
    const topics = useSelector(state => state.topicsToLearnReducer.topics)
    return (
        <>
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                <div className='row w-100 g-0'>
                    <div className='col-12 pt-3'>
                        <h3 className='mb-0'>Topics To Learn</h3>
                    </div>
                </div>
                <div className='row g-0 pb-3'>
                    <MDBRow className='row-cols-1 row-cols-sm-2 row-cols-md-3 g-1 mb-5'>
                        {
                            topics.map((topic) => {
                                return (
                                    <MDBCol className='mb-5 d-flex justify-content-center align-items-center'>
                                        <MDBCard className='cardContain'>
                                            <MDBCardImage
                                                className='pb-3'
                                                src={topic.img ? topic.img: nothingfind}
                                                alt='...'
                                                position='top'
                                                height={265}
                                            />
                                            <MDBCardBody>
                                                <MDBCardTitle><Link navigate="nav-link active">{topic.topicName}</Link></MDBCardTitle>
                                                <MDBCardText>
                                                    Description
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                )

                            })
                        }
                    </MDBRow>

                </div>

            </div>
        </>
    );
}

export default TopicsToLearn;