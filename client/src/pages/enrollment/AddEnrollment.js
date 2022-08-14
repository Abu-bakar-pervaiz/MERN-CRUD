import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { add } from '../../reducers/EnrollmentSlice';

import Select from 'react-select'
const Content = () => {
      
    const options = [
        { value: 'Abu Bakar', label: 'Abu Bakar' },
        { value: 'Tahreem', label: 'Tahreem' },
        { value: 'Hamza', label: 'Hamza' }
      ]
    const addEnrollment = useDispatch()
    const [students, setStudents] = useState([])
    const [course, setCourse] = useState("")
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(students);
        return;
        const enrollment = {
            students,course
        };
        addEnrollment( add(enrollment) )
    }
    const handleChange = (options) =>{
        const selectedOptions = options.map( option => {
            return (option.value)
        });
        setStudents(selectedOptions)
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label htmlFor="Course">Course</label>
                        <select  onChange={(e)=>setCourse(e.target.value)} className='form-control'>
                            <option value="">Select Course</option>
                        </select>
                    </div>
                    <div className="col-md-12 form-group">
                        <label htmlFor="Students">Students</label>
                        <Select options={options} isMulti onChange={handleChange} />
                        {/* <input type="text" onChange={(e)=>setStudents(e.target.value)} className='form-control' placeholder='Enter Enrollment Students' /> */}
                    </div>
                    <div className="col-md-12 form-group">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const AddEnrollment = () => {
  return (
        <ContentLayout heading="New Enrollment" content={ <Content/> } />        
  )
}

export default AddEnrollment;