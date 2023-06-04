import { createSlice } from "@reduxjs/toolkit"

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
      showNotification: false,
    },
  ],
}

const mentorLoginSlice = createSlice({
  name: "mentorLogin",
  initialState,
  reducers: {
    addMentor: (state, action) => {
      const newMentor = {
        id: state.login.length + 1,
        role: "Mentor",
        showNotification: false,
        ...action.payload,
      }
      state.login.push(newMentor)
    },
    showNotificationToAllMentor: (state) => {
      state.login.map((mentor) => {
        mentor.showNotification = true
      })
    },
    ShowNotification: (state, action) => {
      const { mentorEmail, decision } = action.payload
      const mentor = state.login.find((mentor) => {
        return mentor.email === mentorEmail
      })
      if (mentor) {
        mentor.showNotification = decision
      }
    },

    onLogout(state) {
      state.loggedUserDetails = []
    },
  },
})

export const {
  addMentor,
  onLogout,
  showNotificationToAllMentor,
  ShowNotification,
} = mentorLoginSlice.actions
export default mentorLoginSlice.reducer
