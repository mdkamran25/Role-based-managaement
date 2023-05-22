import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState= 
    {
        login: [
          {
            id: 1,
            email: "mdkamran12310@gmail.com",
            password: "kamran@123",
            name: "Md Kamran",
          },
        ],
        status: 'idle',
        loginUserDetails:[]
    }

const adminLoginSlice = createSlice({
    name:'adminLogin',
    initialState,
    reducers:{
        setStatus(state, action){
            state.status = action.payload;    
        },
        getLoginUserData(state,action){
          state.loginUserDetails = action.payload;
        },
        onLogout(state,action){
          state.loginUserDetails = []
        }
    }
})

export const {setStatus, getLoginUserData, onLogout} = adminLoginSlice.actions;
export default adminLoginSlice.reducer;

export function validateLogin(emailToCheck, passwordToCheck) {
  return async function validateLoginStatus(dispatch, getState) {
    await dispatch(setStatus(STATUSES.LOADING));
    const validation = initialState.login.find(
      user => user.email === emailToCheck && user.password === passwordToCheck
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

