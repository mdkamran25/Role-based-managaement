import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router"
import "./MentorPanel.css";
import { onLogout } from "../../slice/loggedUserDetails/loggedUserSlice";
import TraineeAssignedToMentor from "./TraineeAssignedToMentor/traineeAssignedToMentor";
;

function MentorPanel() {
    const loggedUser = useSelector((state)=> state.loggedUserReducer.loggedUserDetails)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const logoutFunction = ()  => {
        dispatch(onLogout());
        navigate('/')
    }  
    return (
    <>
      <TraineeAssignedToMentor />
    </>
  );
}

export default MentorPanel;
