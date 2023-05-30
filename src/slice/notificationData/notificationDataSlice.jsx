import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  taskNotificationData: [],
  submissionNotificationData: [],
  moduleNotificationData: [],
}

const notificationDataSlice = createSlice({
  name: "notificationData",
  initialState,
  reducers: {
    addNewTask: (state, action) => {},
    addNewSubmissionData: (state, action) => {},
    addNewModule: (state, action) => {
      const newModuleData = action.payload
      state.moduleNotificationData.unshift(newModuleData)
    },
  },
})

export const { addNewTask, addNewModule, addNewSubmissionData } =
  notificationDataSlice.actions

export default notificationDataSlice.reducer
