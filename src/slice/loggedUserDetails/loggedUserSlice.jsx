import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loggedUserDetails: [],
}

const loggedUserSlice = createSlice({
  name: "adminLogin",
  initialState,
  reducers: {
    getLoginUserData(state, action) {
      state.loggedUserDetails = action.payload
    },
    onLogout(state) {
      state.loggedUserDetails = []
    },
  },
})

export const { getLoginUserData, onLogout } = loggedUserSlice.actions
export default loggedUserSlice.reducer
