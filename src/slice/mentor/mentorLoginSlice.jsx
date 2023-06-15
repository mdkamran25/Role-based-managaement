import { createSlice, current } from "@reduxjs/toolkit"
import uuid from "react-uuid"

const initialState = {
  allMentorsInReactDepartment: [
    { id: 1, mentor: "mentor@gmail.com", assigned: true },
    { id: 2, mentor: "vishal@gmail.com", assigned: false },
    { id: 3, mentor: "asif@gmail.com", assigned: false },
    { id: 4, mentor: "meet@gmail.com", assigned: false },
    { id: 5, mentor: "chandan@gmail.com", assigned: false },
    { id: 6, mentor: "raman@gmail.com", assigned: false },
  ],
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
      password: "mentor@123",
    },
  ],
}

const mentorLoginSlice = createSlice({
  name: "mentorLogin",
  initialState,
  reducers: {
    //trainee assigned to mentor
    addMentor: (state, action) => {
      const newMentor = {
        id: uuid().substring(0, 8),
        role: "Mentor",
        showNotification: false,
        password: action.payload.name + "@123",
        ...action.payload,
      }
      state.login.push(newMentor)
    },
    //assigned or not
    mentorStatus: (state, action) => {
      const mentors = state.allMentorsInReactDepartment.find(
        (mentors) => mentors.mentor === action.payload
      )
      mentors.assigned = true
    },
    showNotificationToAllMentor: (state) => {
      state.login.map((mentor) => {
        mentor.showNotification = true
      })
    },
    ShowNotification: (state, action) => {
      const { mentorEmail, seen } = action.payload
      console.log(action.payload, seen)
      const mentor = state.login.find((mentor) => {
        return mentor.email === mentorEmail
      })
      if (mentor) {
        mentor.showNotification = seen
      }
      console.log(current(state.login), seen)
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
  mentorStatus,
} = mentorLoginSlice.actions
export default mentorLoginSlice.reducer
