import { configureStore } from "@reduxjs/toolkit";
import adminLoginSlice from "../slice/admin/adminLoginSlice";
import traineeLoginSlice from "../slice/trainee/traineeLoginSlice";
import thunk from 'redux-thunk';
import mentorLoginSlice from "../slice/mentor/mentorLoginSlice";
const store = configureStore({
  reducer: {
    adminLoginReducer: adminLoginSlice,
    traineeLoginReducer: traineeLoginSlice,
    mentorLoginReducer: mentorLoginSlice,
  },
  middleware: [thunk],  
});

export default store;