import React from "react"

const Loader = () => {
  return (
    <>
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
        <div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        <h5>Loading...</h5>
      </div>
    </>
  )
}

export default Loader
