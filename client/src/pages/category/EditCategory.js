import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { edit } from '../../reducers/CourseSlice';
import { useParams } from 'react-router-dom'
const Content = () => {
    const params = useParams();
    const courses = useSelector( (state)=>state.course.data)
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [code, setCode] = useState("")
    const [creditHours, setCreditHours] = useState("")
    useEffect( ()=>{
        let course = courses.find( course => course.id == params.id )
        setTitle(course.title)       
        setCode(course.code)        
        setCreditHours(course.creditHours)        
    },[] )
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const course = {
            title,code,creditHours
        };
        dispatch( edit(course) )
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className='form-control' placeholder='Enter Course Title' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="code">Code</label>
                        <input type="text" onChange={(e)=>setCode(e.target.value)} value={code} className='form-control' placeholder='Enter Course Code' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="creditHours">Credit Hours</label>
                        <input type="text" onChange={(e)=>setCreditHours(e.target.value)} value={creditHours} className='form-control' placeholder='Enter Course Credit Hours' />
                    </div>
                    <div className="col-md-12 form-group">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const EditCourse = () => {
  return (
        <ContentLayout heading="New Course" content={ <Content/> } />        
  )
}

export default EditCourse;