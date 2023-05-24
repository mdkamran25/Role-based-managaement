import { createSlice, current } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    login: [
        {
            id: 1,
            email: "mdkamran12310@gmail.com",
            name: "Md Kamran",
            department: "React",
            designation: "Trainee",
            mentor: "mentor@gmail.com",
            tasks: [
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
                // {taskName: 'fdsadfsa', description: 'fdasfdasdfsa', file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AA…iJ56w6Amu7oKIiPTg/wOYiDgWsr8jdwAAAABJRU5ErkJggg==', time: '16:10:00', date: 'May 24, 2023'},
            ]
        },
        {
            id: 2,
            email: "mdkamran7255@gmail.com",
            name: "Khan",
            department: "React",
            designation: "Trainee",
            mentor: "mentor@gmail.com",
            tasks: []
        },
        {
            id: 3,
            email: "dipak@gmail.com",
            name: "dipak",
            department: "React",
            designation: "Trainee",
            mentor: null,
            tasks: []
        },
        {
            id: 4,
            email: "rishi@gmail.com",
            name: "rishi",
            department: "React",
            designation: "Trainee",
            mentor: null,
            tasks: []
        },
    ],
    status: 'idle',
    loginUserDetails: []
};

const traineeLoginSlice = createSlice({
    name: 'traineeLogin',
    initialState,
    reducers: {
        setStatus(state, action) {
            state.status = action.payload;
        },
        getLoginUserData(state, action) {
            state.loginUserDetails = action.payload;
        },
        addTrainee: (state, action) => {
            const newTrainee = {
                id: state.login.length + 1,
                ...action.payload,
                mentor: null
            };
            state.login.push(newTrainee);
            console.log(current(state), "login state");
        },
        updateTrainee: (state, action) => {
            const { traineeId, mentor } = action.payload;

            const trainee = state.login.find(trainee => trainee.id === traineeId);
            if (trainee) {
                trainee.mentor = mentor;
            }

            console.log(current(state.login), "Update login");
        },
        addTask: (state, action) => {
            const { traineeEmail, task } = action.payload;

            const trainee = state.login.find(trainee => trainee.email === traineeEmail);
            if (trainee) {
                if (!trainee.tasks) {
                    trainee.tasks = [];
                }
                trainee.tasks.push({ ...task, completed: false, id: trainee.tasks.length + 1, });
            }
            console.log(current(state.login), "state Login")
        },
        deleteTask: (state, action) => {

            const { TraineeEmail, TaskId} = action.payload;
            console.log(TraineeEmail, "traineeEmail", TaskId);

            const trainee = state.login.find((trainee) => trainee.email === TraineeEmail);
            if (trainee) {
                trainee.tasks = trainee.tasks.filter((task) => task.id !== TaskId);
            }
        },


    }
});

export const { setStatus, getLoginUserData, addTrainee, updateTrainee, addTask, deleteTask} = traineeLoginSlice.actions;
export default traineeLoginSlice.reducer;


