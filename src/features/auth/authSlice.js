import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "./constans";

const initialState = {
    user : '',
    status : ''
}

export const fetchAuth = createAsyncThunk('auth/fetchAuth',async ()=>{
    const token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH'))
    const response = await fetch("browse/getUserProfile", {
        method: "POST",
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/json"
        }
    })
    const result = await response.json()
    return result.Name
    
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchAuth.pending, (state, action) => {
            state.status = STATUS.loading
        }).addCase(fetchAuth.fulfilled, (state, action) => {
            state.status = STATUS.succeeded
            state.user = action.payload
        }).addCase(fetchAuth.rejected, (state, action) => {
            state.status = STATUS.failed
            state.error = action.error.message
        })
    }
})

export default authSlice.reducer
export const selectUser = state => state.user.user
export const selectStatus = state => state.user.status