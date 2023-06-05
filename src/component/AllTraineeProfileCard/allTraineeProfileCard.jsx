import React, { useState } from "react"
import ProfileCard from "../ProfileCard/profileCard"
import { useSelector } from "react-redux"
import "./allTraineeProfileCard.css"

function AllTraineeProfileCard() {
  const traineeData = useSelector((state) => state.traineeLoginReducer.login)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredTrainees = traineeData.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12 d-sm-flex">
          <h3 className="mb-0 me-sm-auto">All Trainees in React Department</h3>
          <input
            type="text"
            className="form-control mt-2 mt-sm-0 me-auto me-sm-0 me me ms-sm-auto traineeSearchbar align-middle w-50"
            placeholder="Search trainee by their name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="row g-3 pb-3">
        {filteredTrainees.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <ProfileCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTraineeProfileCard
