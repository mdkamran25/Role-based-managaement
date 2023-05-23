import React, { useState } from "react";
import "./mentorDetails.css";
import TraineeDetails from "../traineeDetails/traineeDetails";
import MentorForm from "./mentorForm";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";

function MentorDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const mentorDetail = useSelector((state) => state.mentorLoginReducer.login);

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="col-12 d-flex flex-column flex-lg-row mt-5 justify-content-center justify-content-lg-evenly align-items-lg-start align-items-center">
        <div className="col-11 col-lg-6 rounded-3 mentorDetails d-flex flex-column">
          <div className="col-12 pt-3 pe-2">
            <span className="table-name ps-1">Mentor Details</span>
            <button
              className="btn btn-primary float-end"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Assigned Mentor To Trainee"
              data-tooltip-place="top"
              onClick={openModal}
            >
              + Add Mentor
            </button>
            <Tooltip id="my-tooltip" />
          </div>
          <hr />
          <div className="col-12 mentorTable table-overflow">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Designation</th>
                  <th scope="col">First Trainee Email</th>
                  <th scope="col">Second Trainee Email</th>
                </tr>
              </thead>
              <tbody>
                {mentorDetail.map((item) => (
                  <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.designation}</td>
                    <td>{item.FirstTraineeEmail || "Not assigned"}</td>
                    <td>{item.SecondTraineeEmail || "Not assigned"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-11 col-lg-5 mentorDetails mt-3 mt-lg-0 rounded-3 d-flex flex-column">
          <TraineeDetails />
        </div>
      </div>
      {modalOpen && <MentorForm setModalOpen={setModalOpen} />}
    </>
  );
}

export default MentorDetails;
