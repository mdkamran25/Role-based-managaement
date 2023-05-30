import { createSlice, current } from "@reduxjs/toolkit"
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
        id: state.login.length + 1,
        ...action.payload,
        mentor: null,
      }
      state.login.push(newTrainee)
      console.log(current(state), "login state")
    },
    updateTrainee: (state, action) => {
      const { traineeId, mentor } = action.payload

      const trainee = state.login.find((trainee) => trainee.id === traineeId)
      if (trainee) {
        trainee.mentor = mentor
      }

      console.log(current(state.login), "Update login")
    },
    addTask: (state, action) => {
      const { traineeEmail, task } = action.payload

      const trainee = state.login.find(
        (trainee) => trainee.email === traineeEmail
      )
      if (trainee) {
        if (!trainee.tasks) {
          trainee.tasks = []
        }
        trainee.tasks.unshift({
          ...task,
          completed: false,
          id: trainee.tasks.length + 1,
        })
        trainee.ShowNotification = true
      }
    },
    deleteTask: (state, action) => {
      const { TraineeEmail, TaskId } = action.payload
      console.log(TraineeEmail, "traineeEmail", TaskId)

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
      console.log(trainee, trainee?.ShowNotification, "notification")
      if (trainee) {
        trainee.ShowNotification = false
      }
    },
    setNotificationForall: (state) => {
      console.log("data added")
      state.login.map((trainee) => {
        console.log(trainee.ShowNotification, "notification")
        trainee.ShowNotification = true
      })
    },
  },
})

export const {
  addTrainee,
  updateTrainee,
  addTask,
  deleteTask,
  updateTask,
  setNotification,
  setNotificationForall,
} = traineeLoginSlice.actions
export default traineeLoginSlice.reducer
