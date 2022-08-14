import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    data:[{
            id:"1",
            title:"The Fundamentals of IT",
            creditHours:"4(3-1)",
            code:"CSI-321"
        }],
    error:"",
}
// createAsyncThunk Generates built in pending,fulfilled and rejected action types
export const fetchCourses = createAsyncThunk('course/fetchCourses', () =>{
    // console.log("Reahing in the FetchCourses");
    return [
        {
            id:"1", 
            title:"The Fundamentals of IT",
            creditHours:"4(3-1)",
            code:"CSI-321"
        }
    ]
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then( (response)=> response.data )
});

const CourseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{
        add:(state,action) => {
            state.data.push(action.payload)
        },
        edit:(state,action) => {
            return "reaching"
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchCourses.pending,(state) => {
            state.loading = true;
        });
        builder.addCase(fetchCourses.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        });
        builder.addCase(fetchCourses.rejected,(state,action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message
        });
    }
});

export default CourseSlice.reducer
export const { add,edit } = CourseSlice.actions