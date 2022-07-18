import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user : ''
}

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async ()=>{
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
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.user = action.payload
        }).addCase(fetchAuth.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export default authSlice.reducer
export const selectUser = state => state.user.user
