import {configureStore} from '@reduxjs/toolkit'
import CourseSlice from '../reducers/CourseSlice'
const store = configureStore({
    reducer:{
        course:CourseSlice,
    }
})

export default store;