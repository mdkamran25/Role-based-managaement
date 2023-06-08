import { createSlice } from "@reduxjs/toolkit"

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
  reducers: {},
})

// export const {} = adminLoginSlice.actions
export default adminLoginSlice.reducer
