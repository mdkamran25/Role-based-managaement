import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./component/LoginPage";
import AdminLogin from "./component/LoginPage/AdminLogin/adminLogin";
import MentorLogin from "./component/LoginPage/MentorLogin/mentorLogin";
import TraineeLogin from "./component/LoginPage/TraineeLogin/traineeLogin";
import { Provider } from "react-redux";
import store from "./store";
import AdminPanel from "./component/AdminPanel/adminpanel";
import MentorPanel from "./component/MentorPanel/MentorPanel";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="adminPanel" element={<AdminPanel />} />
            <Route path="mentorPanel" element={<MentorPanel />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
