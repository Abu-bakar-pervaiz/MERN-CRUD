import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { add } from '../../reducers/CourseSlice';
const Content = () => {
    const courses = useSelector( (state)=>state.course.data)
    const addCoure = useDispatch()
    const [title, setTitle] = useState("")
    const [code, setCode] = useState("")
    const [creditHours, setCreditHours] = useState("")
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const course = {
            title,code,creditHours
        };
        addCoure( add(course) )
        setTitle("")
        setCode("")
        setCreditHours("")
    }
    
    return (
        <div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Title</th>
                        <th>Credit Hours</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map( (course,i)=>(   
                    <tr>
                        <td>{i+1}</td>
                        <td>{course.title}</td>
                        <td>{course.creditHours}</td>
                        <td>{course.code}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} className='form-control' placeholder='Enter Course Title' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="code">Code</label>
                        <input type="text" onChange={(e)=>setCode(e.target.value)} className='form-control' placeholder='Enter Course Code' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="creditHours">Credit Hours</label>
                        <input type="text" onChange={(e)=>setCreditHours(e.target.value)} className='form-control' placeholder='Enter Course Credit Hours' />
                    </div>
                    <div className="col-md-12 form-group">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const AddCourse = () => {
  return (
        <ContentLayout heading="New Course" content={ <Content/> } />        
  )
}

export default AddCourse;