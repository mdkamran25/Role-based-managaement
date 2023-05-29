import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./component/LoginPage";
import AdminLogin from "./component/LoginPage/AdminLogin/adminLogin";
import MentorLogin from "./component/LoginPage/MentorLogin/mentorLogin";
import TraineeLogin from "./component/LoginPage/TraineeLogin/traineeLogin";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import AdminPanel from "./component/AdminPanel/adminpanel";
import MentorPanel from "./component/MentorPanel/MentorPanel";
import TraineeProfile from "./component/TraineeProfile/TraineeProfile";
import Navbar from "./component/Navbar/navbar";
import TopicsToLearn from "./component/TopicsToLearn/topicsToLearn";
import AllTraineeProfileCard from "./component/AllTraineeProfileCard/allTraineeProfileCard";
import TraineePanel from "./component/TraineePanel/traineePanel";

function App() {
  const title = useLocation()
  let showNavbar = true
  if(title.pathname.includes('/Index') || title.pathname==='/'){ showNavbar = false}
  return (
    <div className="App">
          
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {showNavbar ? <Navbar />: <></>}
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/adminPanel" element={<AdminPanel />} />
              <Route path="/mentorPanel" element={<MentorPanel />} />
              <Route path='/traineePanel' element={<TraineePanel />} />
              <Route path="/allTraineesProfile" element={<AllTraineeProfileCard />} />
              <Route path="/traineeProfile" element={<TraineeProfile />} />
              <Route path="/module" element={<TopicsToLearn />} />
            </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
