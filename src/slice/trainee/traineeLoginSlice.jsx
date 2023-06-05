import { createSlice } from "@reduxjs/toolkit"
import { addNotification } from "../notificationData/notificationDataSlice"
import uuid from "react-uuid"

const initialState = {
  login: [
    {
      id: 1,
      email: "mdkamran12310@gmail.com",
      name: "Md Kamran",
      department: "React",
      designation: "Trainee",
      mentor: "mentor@gmail.com",
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "8969385731",
      address: "Ara, Bihar",
      college: "Parul University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 2,
      email: "mdkamran7255@gmail.com",
      name: "Khan",
      department: "React",
      designation: "Trainee",
      mentor: "mentor@gmail.com",
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "8969385731",
      address: "Ara, Bihar",
      college: "Parul University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 3,
      email: "dipak@gmail.com",
      name: "Dipak",
      department: "React",
      designation: "Trainee",
      mentor: null,
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "9769385739",
      address: "Rajkot, Gujarat",
      college: "Marwadi University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 4,
      email: "rishi@gmail.com",
      name: "Rishi",
      department: "React",
      designation: "Trainee",
      mentor: null,
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "7569385734",
      address: "Daman",
      college: "Diu University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 5,
      email: "anjali@gmail.com",
      name: "Anjali",
      department: "React",
      designation: "Trainee",
      mentor: null,
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "6569385734",
      address: "Dawarka",
      college: "Dawarka University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 6,
      email: "prashant@gmail.com",
      name: "Prashant",
      department: "React",
      designation: "Trainee",
      mentor: null,
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "8769385731",
      address: "GandhiNagar",
      college: "L.D College of Engineering",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 7,
      email: "chetan@gmail.com",
      name: "Chetan",
      department: "React",
      designation: "Trainee",
      mentor: null,
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "9569385730",
      address: "Rajkot",
      college: "Rajkot University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 8,
      email: "ashish@gmail.com",
      name: "Ashish",
      department: "React",
      designation: "Trainee",
      mentor: null,
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "6869385731",
      address: "Ahmedabad",
      college: "Nirma University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
    {
      id: 9,
      email: "vipul@gmail.com",
      name: "Vipul",
      department: "React",
      designation: "Trainee",
      mentor: null,
      tasks: [],
      submission: [],
      role: "Trainee",
      phone: "9012885738",
      address: "Ahmedabad",
      college: "L.K.U University",
      github: undefined,
      linkdin: undefined,
      ShowNotification: false,
    },
  ],
}

const traineeLoginSlice = createSlice({
  name: "traineeLogin",
  initialState,
  reducers: {
    addTrainee: (state, action) => {
      const newTrainee = {
        id: uuid().substring(0, 8),
        ...action.payload,
        mentor: null,
      }
      state.login.push(newTrainee)
    },
    updateTrainee: (state, action) => {
      const { traineeId, mentor } = action.payload

      const trainee = state.login.find((trainee) => trainee.id === traineeId)
      if (trainee) {
        trainee.mentor = mentor
      }
    },
    addTaskWithNotification: (state, action) => {
      const { traineeEmail, task, id } = action.payload
      const { emails, ...taskValues } = task
      const trainee = state.login.find(
        (trainee) => trainee.email === traineeEmail
      )

      if (trainee) {
        if (!trainee.tasks) {
          trainee.tasks = []
        }
        trainee.tasks.unshift({
          ...taskValues,
          completed: false,
          id: id,
        })
        trainee.ShowNotification = true
      }
    },
    deleteTask: (state, action) => {
      const { TraineeEmail, TaskId } = action.payload

      const trainee = state.login.find(
        (trainee) => trainee.email === TraineeEmail
      )
      if (trainee) {
        trainee.tasks = trainee.tasks.filter((task) => task.id !== TaskId)
      }
    },
    updateTask: (state, action) => {
      const { TraineeEmail, TaskId, Task } = action.payload

      const trainee = state.login.find(
        (trainee) => trainee.email === TraineeEmail
      )

      if (trainee) {
        const taskIndex = trainee.tasks.findIndex((item) => item.id === TaskId)
        if (taskIndex !== -1) {
          trainee.tasks[taskIndex] = {
            ...trainee.tasks[taskIndex],
            ...Task,
          }
        }
        trainee.ShowNotification = true
      }
    },
    setNotification: (state, action) => {
      const traineeEmail = action.payload
      const trainee = state.login.find(
        (trainee) => trainee.email === traineeEmail
      )
      if (trainee) {
        trainee.ShowNotification = false
      }
    },
    setNotificationForall: (state) => {
      state.login.map((trainee) => {
        trainee.ShowNotification = true
      })
    },
    addSubmissionWithNotification: (state, action) => {
      const { email, id, ...submission } = action.payload

      const trainee = state.login.find((trainee) => trainee.email === email)

      if (trainee) {
        if (!trainee.submission) {
          trainee.submission = []
        }
        trainee.submission.push({ ...submission, id, email })
        const task = trainee.tasks.find((task) => task.id === id)
        if (task) {
          task.completed = true
        }
      }
    },
    deleteSubmissions: (state, action) => {
      const { TraineeEmail, TaskId } = action.payload
      const trainee = state.login.find(
        (trainee) => trainee.email === TraineeEmail
      )
      if (trainee) {
        trainee.submission = trainee.submission.filter(
          (submission) => submission.id !== TaskId
        )
      }
      const task = trainee.tasks.find((task) => task.id === TaskId)
      if (task) {
        task.completed = false
      }
    },
    updatedSubmitted: (state, action) => {
      const { email, id, ...submission } = action.payload

      const trainee = state.login.find((trainee) => trainee.email === email)

      if (trainee) {
        const taskIndex = trainee.submission.findIndex((item) => item.id === id)
        if (taskIndex !== -1) {
          trainee.submission[taskIndex] = {
            ...trainee.submission[taskIndex],
            ...submission,
          }
        }
      }
    },
  },
})

export const {
  addTrainee,
  updateTrainee,
  addTaskWithNotification,
  deleteTask,
  updateTask,
  setNotification,
  setNotificationForall,
  addSubmissionWithNotification,
  deleteSubmissions,
  updatedSubmitted,
} = traineeLoginSlice.actions
export default traineeLoginSlice.reducer

export const addTask = (taskData) => (dispatch) => {
  dispatch(addTaskWithNotification(taskData))
}

export const addSubmission = (submissionData) => (dispatch) => {
  const { taskName, id, email, name } = submissionData
  const taskNotification = {
    notificationType: "Submission",
    notificationMessage: name + " has submitted ",
    notificationDetails: taskName,
    id: id,
    email: email,
  }

  dispatch(addSubmissionWithNotification(submissionData))
  dispatch(addNotification(taskNotification))
}
