/* eslint-disable no-unused-vars */
import React from "react"
import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom"
import Index from "./Pages/LoginPage"
import { Provider } from "react-redux"
import { persistor, store } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import TraineeProfile from "./Pages/TraineeProfile/TraineeProfile"
import Navbar from "./component/Navbar/navbar"
import TopicsToLearn from "./Pages/Module/topicsToLearn"
import AllTraineeProfile from "./Pages/AllTraineeProfile/allTraineeProfile"
import SubTopics from "./Pages/Module/subtopics"
import Dashboard from "./Pages/Dashboard/dashboard"
import NoPageFound from "./component/NoPageFound/pageNotFound"
// import { useSelector } from "react-redux"

function App() {
  const title = useLocation()
  let showNavbar = true
  if (title.pathname.includes("/Index") || title.pathname === "/") {
    showNavbar = false
  }

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <div className="App">
      {showNavbar ? <Navbar /> : null}

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/allTraineesProfile" element={<AllTraineeProfile />} />

        <Route path={`/module/:topic_id`} element={<SubTopics />} />

        <Route path="/module" element={<TopicsToLearn />} />
        <Route
          path={`/traineeProfile/id=/:trainee_id`}
          element={<TraineeProfile />}
        />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
    //   </PersistGate>
    // </Provider>
  )
}

export default App
