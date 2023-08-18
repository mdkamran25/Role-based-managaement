import { createSlice } from "@reduxjs/toolkit"
import { getCurrentDate, getCurrentTime } from "../../Utils/dateTimeUtils"
const initialState = {
  notifications: [],
}

const notificationDataSlice = createSlice({
  name: "notificationData",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const { ...data } = action.payload
      const newNotification = {
        ...data,
        date: getCurrentDate(),
        time: getCurrentTime(),
      }
      state.notifications.unshift(newNotification)
    },
  },
})

export const { addNotification } = notificationDataSlice.actions

export default notificationDataSlice.reducer
