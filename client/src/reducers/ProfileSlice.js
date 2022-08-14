import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    data:{
            id:"1",
            name:"Abu Bakar",
            fatherName:"Pervaiz Akhtar",
            contact:"03001234567",
            batch:"2018-2022",
            department:"CS",
        },
    error:"",
}
// createAsyncThunk Generates built in pending,fulfilled and rejected action types
export const fetchProfile = createAsyncThunk('profile/fetchProfile', () =>{
    return {
            id:"1",
            name:"Abu Bakar",
            fatherName:"Pervaiz Akhtar",
            contact:"03001234567",
            batch:"2018-2022",
            department:"CS",
        }
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then( (response)=> response.data )
});

const Profilelice = createSlice({
    name:"Profile",
    initialState,
    reducers:{
        edit:(state,action) => {
            return "reaching"
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchProfile.pending,(state) => {
            state.loading = true;
        });
        builder.addCase(fetchProfile.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        });
        builder.addCase(fetchProfile.rejected,(state,action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message
        });
    }
});

export default Profilelice.reducer
export const { add,edit } = Profilelice.actions