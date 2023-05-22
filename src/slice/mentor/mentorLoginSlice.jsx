import { createSlice, current } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const initialState =
{
  login: [
    {
      id: 1,
      email: "mentor@gmail.com",
      name: "Mentor",
      designation: "Senior Developer",
      department: "React",
      FirstTraineeEmail: "mdkamran7255@gmail.com",
      SecondTraineeEmail: "rishi@gmail.com",
    },
    // {
    //   id:2,
    //   email: "mentor@gmail.com",
    //   name: "Nisarg",
    //   designation:"Senior Developer",
    //   department:"React",
    //   FirstTraineeEmail:"mdkamran12310@gmail.com",
    //   SecondTraineeEmail:null,
    // },
  ],
  status: 'idle',
  loggedUserDetails: []
}

const mentorLoginSlice = createSlice({
  name: 'mentorLogin',
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    getLoginUserData(state, action) {
      state.loggedUserDetails = action.payload;
    },
    addMentor: (state, action) => {
      const newMentor = {
        id: state.login.length + 1,
        ...action.payload
      };
      state.login.push(newMentor);
    },
    onLogout (state, action) {
      state.loggedUserDetails = []
    },
  }
})

export const { setStatus, getLoginUserData, addMentor, onLogout } = mentorLoginSlice.actions;
export default mentorLoginSlice.reducer;

export function validateLogin(emailToCheck) {
  return async function validateLoginStatus(dispatch, getState) {
    await dispatch(setStatus(STATUSES.LOADING));
    const validation = initialState.login.find(
      user => user.email === emailToCheck
    );
    if (validation) {
      await dispatch(getLoginUserData(validation));
      dispatch(setStatus(STATUSES.IDLE));
      return true;
    } else {
      dispatch(setStatus(STATUSES.ERROR));
      return false;
    }
  };
}

