import React from "react";
import "./adminpanel.css";
import MentorDetails from "./mentorDetails/mentorDetails";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router"
import { onLogout } from "../../slice/loggedUserDetails/loggedUserSlice";

function AdminPanel() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <>
      <MentorDetails />
    </>
  );
}

export default AdminPanel;
