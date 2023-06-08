import React from "react"
import Lottie from "lottie-react"
import "./pageNotFound.css"
import PageNotFound from "../../Image/page-not-found.json"
function NoPageFound() {
  return (
    <>
      <div className="container h-75">
        <div className="row g-0 row g-0 d-flex align-items-center justify-content-center w-100 h-100">
          <div className="col-12 pageNotFound">
            <Lottie animationData={PageNotFound} loop={true} />
          </div>
        </div>
      </div>
    </>
  )
}

export default NoPageFound
