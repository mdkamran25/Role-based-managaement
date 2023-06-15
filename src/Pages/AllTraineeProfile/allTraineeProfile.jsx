import React, { useEffect, useState, useTransition } from "react"
import ProfileCard from "../../component/ProfileCard/profileCard"
import { useSelector } from "react-redux"
import "./allTraineeProfile.css"

function AllTraineeProfile() {
  const traineeData = useSelector((state) => state.traineeLoginReducer.login)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTrainees, setFilteredTrainees] = useState(traineeData)
  const [isPending, startTransition] = useTransition()
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  useEffect(() => {
    startTransition(() => {
      setFilteredTrainees(
        traineeData.filter((trainee) =>
          trainee.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    })
  }, [searchQuery])

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
        {isPending ? (
          <div className="col-12 text-center">
            <p>Searching...</p>
          </div>
        ) : filteredTrainees.length > 0 ? (
          filteredTrainees.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <ProfileCard item={item} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No trainees found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllTraineeProfile
