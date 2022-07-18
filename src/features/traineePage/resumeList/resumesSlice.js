import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    resumes:[],
    newId:''
}
const token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH'))

export const fetchNewId = createAsyncThunk('resumes/fetchNewId', async ()=>{
    const response = await fetch('/browse/getNewId', {
        method: "POST",
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/json"
        }
    })

    const result = await response.json()
    return result.ID
})

export const fetchResumes = createAsyncThunk('resumes/fetchResumes', async ()=>{
    const response = await fetch('/browse/Trainees', {
        method: "GET",
        headers: {
          Authorization: `Basic ${token}`
        }
    })
    const result = await response.json()
    return result.value
})

export const fetchAddResume = createAsyncThunk('resumes/fetchAddResume', async (newResume)=>{
    const response = await fetch('/browse/Trainees', {
        method: "POST",
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newResume)
    })
    return await response.json()
})

export const resumesSlice = createSlice({
    name: "resumes",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchResumes.fulfilled, (state, action) => {
            state.resumes.push(...action.payload)
        }).addCase(fetchAddResume.fulfilled, (state, action)=>{
            state.resumes.push(action.payload)
        }).addCase(fetchNewId.fulfilled, (state, action)=>{
            state.newId = action.payload
        })
    }
})

export default resumesSlice.reducer

export const resumesSelector = state => state.resumes.resumes
export const newIdSelector = state => state.resumes.newId
