import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { AUTH_TOKEN_KEY, CATEGORY_ALL } from "../../../constants/constants"

const initialState = {
    resumes:[],
    newId:'',
    languages:[],
    filterField : CATEGORY_ALL
}
const token = JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY))

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

export const fetchLanguages = createAsyncThunk('languages/fetchLanguages', async ()=>{
    const response = await fetch('/browse/Languages', {
        method: "GET",
        headers: {
          Authorization: `Basic ${token}`,
        }
    })
    const result = await response.json()
    return result.value
})

export const fetchChangeOwner = createAsyncThunk('owner/fetchChangeOwner', async (ownerAndResume)=>{
    const response = await fetch('/browse/changeOwner', {
        method: "POST",
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ownerAndResume)
    })
    const result = await response.json()
    return result
})

export const resumesSlice = createSlice({
    name: "resumes",
    initialState,
    reducers:{
        updateFilterField(state,action){
            state.filterField = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(fetchResumes.fulfilled, (state, action) => {
            state.resumes = []
            state.resumes.push(...action.payload)
        }).addCase(fetchAddResume.fulfilled, (state, action)=>{
            state.resumes.push(action.payload)
        }).addCase(fetchNewId.fulfilled, (state, action)=>{
            state.newId = action.payload
        }).addCase(fetchLanguages.fulfilled, (state, action)=>{
            state.languages.push(...action.payload)
        }).addCase(fetchChangeOwner.fulfilled, (state, action)=>{
            console.log(action)
        })
    }
})

export default resumesSlice.reducer

export const {updateFilterField} = resumesSlice.actions

export const resumesSelector = state => state.resumes.resumes
export const newIdSelector = state => state.resumes.newId
export const languagesSelector = state => state.resumes.languages
export const filterFieldSelector = state => state.resumes.filterField