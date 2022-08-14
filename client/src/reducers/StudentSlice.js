import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    data:[{
            id:"1",
            name:"Abu Bakar",
            fatherName:"Pervaiz Akhtar",
            contact:"03001234567",
            batch:"2018-2022",
            department:"CS",
        }],
    error:"",
}
// createAsyncThunk Generates built in pending,fulfilled and rejected action types
export const fetchStudents = createAsyncThunk('student/fetchStudents', () =>{
    // console.log("Reahing in the FetchStudents");
    return [
        {
            id:"1",
            name:"Abu Bakar",
            fatherName:"Pervaiz Akhtar",
            contact:"03001234567",
            batch:"2018-2022",
            department:"CS",
        }
    ]
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then( (response)=> response.data )
});

const StudentSlice = createSlice({
    name:"Student",
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
        builder.addCase(fetchStudents.pending,(state) => {
            state.loading = true;
        });
        builder.addCase(fetchStudents.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        });
        builder.addCase(fetchStudents.rejected,(state,action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message
        });
    }
});

export default StudentSlice.reducer
export const { add,edit } = StudentSlice.actions