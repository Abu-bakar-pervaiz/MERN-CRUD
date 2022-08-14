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
export const fetchCategories = createAsyncThunk('category/fetchCategories', () =>{
    // console.log("Reahing in the FetchCategories");
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

const CategorySlice = createSlice({
    name:"Category",
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
        builder.addCase(fetchCategories.pending,(state) => {
            state.loading = true;
        });
        builder.addCase(fetchCategories.fulfilled,(state,action) => {
            state.loading = false
            state.data = action.payload
            state.error = ""
        });
        builder.addCase(fetchCategories.rejected,(state,action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message
        });
    }
});

export default CategorySlice.reducer
export const { add,edit } = CategorySlice.actions