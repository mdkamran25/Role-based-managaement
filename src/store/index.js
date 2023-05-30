import { configureStore, combineReducers } from "@reduxjs/toolkit"
import adminLoginSlice from "../slice/admin/adminLoginSlice"
import traineeLoginSlice from "../slice/trainee/traineeLoginSlice"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import mentorLoginSlice from "../slice/mentor/mentorLoginSlice"
import "react-tooltip/dist/react-tooltip.css"
import loggedUserSlice from "../slice/loggedUserDetails/loggedUserSlice"
import topicsToLearnSlice from "../slice/TopicsToLearn/topicsToLearnSlice"
import notificationDataSlice from "../slice/notificationData/notificationDataSlice"

const rootReducer = combineReducers({
  adminLoginReducer: adminLoginSlice,
  traineeLoginReducer: traineeLoginSlice,
  mentorLoginReducer: mentorLoginSlice,
  loggedUserReducer: loggedUserSlice,
  topicsToLearnReducer: topicsToLearnSlice,
  notificationDataReducer: notificationDataSlice,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store)
