import React from "react"
import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import Index from "./Pages/LoginPage"
import { Provider } from "react-redux"
import { persistor, store } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import AdminPanel from "./Pages/Dashboard/adminDashboard/adminDashboard"
import TraineeProfile from "./Pages/TraineeProfile/TraineeProfile"
import Navbar from "./component/Navbar/navbar"
import TopicsToLearn from "./Pages/Module/topicsToLearn"
import AllTraineeProfile from "./Pages/AllTraineeProfile/allTraineeProfile"
import TraineeDashboard from "./Pages/Dashboard/traineeDashboard/traineeDashboard"
import SubTopics from "./Pages/Module/subtopics"
import MentorDashboard from "./Pages/Dashboard/mentorDashboard/mentorDashboard"

function App() {
  const title = useLocation()
  let showNavbar = true
  if (title.pathname.includes("/Index") || title.pathname === "/") {
    showNavbar = false
  }
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {showNavbar ? <Navbar /> : <></>}
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/mentorDashboard" element={<MentorDashboard />} />
            <Route path="/traineePanel" element={<TraineeDashboard />} />
            <Route path="/allTraineesProfile" element={<AllTraineeProfile />} />
            <Route path="/subtopics" element={<SubTopics />}></Route>
            <Route path="/traineeProfile" element={<TraineeProfile />} />
            <Route path="/module" element={<TopicsToLearn />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
