import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  login: [
    {
      id: 1,
      email: "admin@gmail.com",
      password: "admin@123",
      name: "Admin",
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
