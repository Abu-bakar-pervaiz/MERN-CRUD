import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { fetchCourses } from '../../reducers/CourseSlice';
import {Link} from 'react-router-dom';
const Content = () => {
    const courses = useSelector( (state)=>state.course)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( fetchCourses() );
        setTimeout(() => {
            console.log(courses.data);
        }, 500);
    },[])
    
    return (
        <div>
            {
                !courses.loading && courses.error ? <div>Error : {courses.error}</div> : ""
            }
            {
                courses.loading ? (
                    <h1>Loading.....</h1>
                )
                :(
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Title</th>
                            <th>Credit Hours</th>
                            <th>Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        courses.data.map( (course,i)=>(   
                            <tr>
                                <td>{i+1}</td>
                                <td>{course.title}</td>
                                <td>{course.creditHours}</td>
                                <td>{course.code}</td>
                                <td>
                                    <Link to={'/edit-course/'+course.id} className="btn btn-warning fa fa-edit"></Link>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                )
            }
            
        </div>
    )
}

const Courses = () => {
    return (
        <ContentLayout heading="New Course" content={ <Content/> } />
    )
  }
  
export default Courses