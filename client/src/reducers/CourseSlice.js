import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading:false,
    data:[{
        id:1,
        title:"First Course",
        creditHours:"3(2-1)",
        code:"FC-1"
    }],
    error:"",
}

const CourseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{
        add:(state,action) => {
            state.data.push(action.payload)
        }
    }
});

export default CourseSlice.reducer
export const { add } = CourseSlice.actions