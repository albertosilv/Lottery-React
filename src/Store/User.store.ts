import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import{User} from '../Interface/Game'
const initialState:User = {
    name:'',
    email:'',
    token:'',
    id:'',
  };
const user = createSlice({
    name:'user',
    initialState:{
        user:initialState
    },
    reducers: {
    userReducer(state,action:PayloadAction<User>) {
        state.user=action.payload
    },
  },
})

export const{userReducer} = user.actions

export default user.reducer