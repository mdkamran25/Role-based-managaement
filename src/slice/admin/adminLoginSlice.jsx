import { createSlice } from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
})

const initialState = {
  login: [
    {
      id: 1,
      email: "mdkamran12310@gmail.com",
      password: "kamran@123",
      name: "Md Kamran",
      role: "Lead",
    },
  ],
  status: "idle",
}

const adminLoginSlice = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload
    },
  },
})

export const { setStatus } = adminLoginSlice.actions
export default adminLoginSlice.reducer
