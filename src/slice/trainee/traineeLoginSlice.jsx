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
            mentor: "mentor@gmail.com"
        },
        {
            id: 2,
            email: "mdkamran7255@gmail.com",
            name: "Khan",
            department: "React",
            designation: "Trainee",
            mentor:  "mentor@gmail.com"
        },
        {
            id: 3,
            email: "dipak@gmail.com",
            name: "dipak",
            department: "React",
            designation: "Trainee",
            mentor: null
        },
        {
            id: 4,
            email: "rishi@gmail.com",
            name: "rishi",
            department: "React",
            designation: "Trainee",
            mentor: null
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
    }
});

export const { setStatus, getLoginUserData, addTrainee, updateTrainee } = traineeLoginSlice.actions;
export default traineeLoginSlice.reducer;


// export function validateLogin(emailToCheck, passwordToCheck) {
//     return async function validateLoginStatus(dispatch, getState) {
//       await dispatch(setStatus(STATUSES.LOADING));
//       const validation = initialState.login.find(
//         user => user.email === emailToCheck && user.password === passwordToCheck
//       );
//       if (validation) {
//         await dispatch(getLoginUserData(validation));
//         dispatch(setStatus(STATUSES.IDLE));
//         return true;
//       } else {
//         dispatch(setStatus(STATUSES.ERROR));
//         return false;
//       }    
//     };
//   }