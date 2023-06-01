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
      email: "mentor@gmail.com",
      name: "Mentor",
      designation: "Senior Developer",
      department: "React",
      FirstTraineeEmail: "mdkamran7255@gmail.com",
      SecondTraineeEmail: "mdkamran12310@gmail.com",
      role: "Mentor",
    },
  ],
  status: "idle",
}

const mentorLoginSlice = createSlice({
  name: "mentorLogin",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload
    },

    addMentor: (state, action) => {
      const newMentor = {
        id: state.login.length + 1,
        role: "Mentor",
        ...action.payload,
      }
      state.login.push(newMentor)
      // console.log(current(state.login))
    },
    // addTask(state, action){

    // },
    onLogout(state) {
      state.loggedUserDetails = []
    },
  },
})

export const { setStatus, addMentor, onLogout } = mentorLoginSlice.actions
export default mentorLoginSlice.reducer
