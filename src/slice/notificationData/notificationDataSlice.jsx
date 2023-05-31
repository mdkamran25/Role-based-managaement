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
    addNewTask: () => {},
    addNewSubmissionData: () => {},
    addNewModule: (state, action) => {
      const newModuleData = action.payload
      state.moduleNotificationData.unshift(newModuleData)
    },
  },
})

export const { addNewTask, addNewModule, addNewSubmissionData } =
  notificationDataSlice.actions

export default notificationDataSlice.reducer
