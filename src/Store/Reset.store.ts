import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import{User,Item} from '../Interface/Game'
const initialState:User = {
    name:'',
    email:'',
    token:'',
    id:''
};
const reset = createSlice({
    name:'reset',
    initialState:{
        user:initialState
    },
    reducers: {
    resetPassword(state,action:PayloadAction<User>) {
        state.user=action.payload
    },
  },
})

export const{resetPassword} = reset.actions

export default reset.reducer