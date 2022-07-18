import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    resumes:[]
}

export const fetchResumes = createAsyncThunk('resumes/fetchResumes', async ()=>{
    const token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH'))
    const response = await fetch('/browse/Trainees', {
        method: "GET",
        headers: {
          Authorization: `Basic ${token}`
        }
    })
    const result = await response.json()
    return result.value
})

export const resumesSlice = createSlice({
    name: "resumes",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchResumes.fulfilled, (state, action) => {
            state.resumes.push(...action.payload)
        })
    }
})

export default resumesSlice.reducer

export const resumesSelector = state => state.resumes.resumes
