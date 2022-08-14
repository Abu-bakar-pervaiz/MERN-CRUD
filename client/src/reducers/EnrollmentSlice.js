import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    data:[{
            id:"1",
            name:"Social Sciences",
            code:"CSI-321"
        }],
    error:"",
}
// createAsyncThunk Generates built in pending,fulfilled and rejected action types
export const fetchEnrollments = createAsyncThunk('enrollment/fetchEnrollments', () =>{
    // console.log("Reahing in the FetchEnrollments");
    return [
        {
            id:"1", 
            name:"Social Sciences",
            creditHours:"4(3-1)",
            code:"CSI-321"
        }
    ]
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then( (response)=> response.data )
});

const EnrollmentSlice = createSlice({
    name:"Enrollment",
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
        builder.addCase(fetchEnrollments.pending,(state) => {
            state.loading = true;
        });
        builder.addCase(fetchEnrollments.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        });
        builder.addCase(fetchEnrollments.rejected,(state,action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message
        });
    }
});

export default EnrollmentSlice.reducer
export const { add,edit } = EnrollmentSlice.actions