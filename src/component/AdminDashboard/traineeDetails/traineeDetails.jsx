import React from "react"
import { useSelector } from "react-redux"
import "./traineeDetails.css"

function TraineeDetails() {
  const traineeDetail = useSelector((state) => state.traineeLoginReducer.login)

  return (
    <>
      <div className="col-12 pt-3 pe-2">
        <span className="table-name ps-1 ">Trainee Details</span>
      </div>
      <hr />
      <div className="col-12 traineeTable ">
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
            {traineeDetail.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td>{item.mentor || "Not assigned"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TraineeDetails
