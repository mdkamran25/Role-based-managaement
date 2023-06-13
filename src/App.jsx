/* eslint-disable no-unused-vars */
import React from "react"
import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import Index from "./Pages/LoginPage"
import TraineeProfile from "./Pages/TraineeProfile/TraineeProfile"
import Navbar from "./component/Navbar/navbar"
import TopicsToLearn from "./Pages/Module/topicsToLearn"
import AllTraineeProfile from "./Pages/AllTraineeProfile/allTraineeProfile"
import SubTopics from "./Pages/Module/subtopics"
const Dashboard = React.lazy(() => import("./Pages/Dashboard/dashboard"))
import NoPageFound from "./component/NoPageFound/pageNotFound"
import PrivateRoute from "./Routes/PrivateRoutes/PrivateRoute"
import PublicRoute from "./Routes/PublicRoutes/PublicRoutes"
import ProtectedTraineeProfile from "./Routes/ProtectedRoutes/ProtectedTraineeProfileRoute"
import ProtectedAllTraineeProfile from "./Routes/ProtectedRoutes/ProtectedAllTraineeProfileRoute"
import Loader from "./component/Loader/Loader"
function App() {
  const title = useLocation()
  let showNavbar = true
  if (title.pathname.includes("/Index") || title.pathname === "/") {
    showNavbar = false
  }

  return (
    <div className="App">
      {showNavbar ? <Navbar /> : null}

      <Routes>
        {/* <Route path="/" element={<Chat />} /> */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Index />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback={<Loader />}>
                <Dashboard />
              </React.Suspense>
            }
          />

          <Route path={`/module/:topic_id`} element={<SubTopics />} />

          <Route path="/module" element={<TopicsToLearn />} />

          <Route element={<ProtectedAllTraineeProfile />}>
            <Route path="/allTraineesProfile" element={<AllTraineeProfile />} />
          </Route>

          <Route element={<ProtectedTraineeProfile />}>
            <Route
              path={`/traineeProfile/id=/:trainee_id`}
              element={<TraineeProfile />}
            />
          </Route>

          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
