import {configureStore} from '@reduxjs/toolkit'
import CategorySlice from '../reducers/CategorySlice';
import CourseSlice from '../reducers/CourseSlice'
import EnrollmentSlice from '../reducers/EnrollmentSlice';
import ProfileSlice from '../reducers/ProfileSlice';
import StudentSlice from '../reducers/StudentSlice';

const store = configureStore({
    reducer:{
        course:CourseSlice,
        categories:CategorySlice,
        students:StudentSlice,
        profile:ProfileSlice,
        enrollments:EnrollmentSlice,
    }
})

export default store;