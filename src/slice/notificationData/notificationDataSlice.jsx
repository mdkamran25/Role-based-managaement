import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  notifications: [], // Change to an array
}

const notificationDataSlice = createSlice({
  name: "notificationData",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const date = new Date()
      const options = { hour12: false }
      const time = date.toLocaleTimeString("en-US", options)
      const dates = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      const { ...data } = action.payload
      const newNotification = {
        ...data,
        date: dates,
        time: time,
      }
      state.notifications.unshift(newNotification) // Update to state.notifications
    },
  },
})

export const { addNotification } = notificationDataSlice.actions

export default notificationDataSlice.reducer
