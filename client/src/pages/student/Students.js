import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { fetchStudents } from '../../reducers/StudentSlice';
import { Link } from 'react-router-dom';
const Content = () => {
    const students = useSelector( (state)=>state.students)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( fetchStudents() );
    },[])
    
    return (
        <div>
            {
                !students.loading && students.error ? <div>Error : {students.error}</div> : ""
            }
            {
                students.loading ? (
                    <h1>Loading.....</h1>
                )
                :(
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Contact</th>
                            <th>Batch</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        students.data.map( (student,i)=>(   
                            <tr>
                                <td>{i+1}</td>
                                
                                <td>{student.name}</td>
                                <td>{student.fatherName}</td>
                                <td>{student.contact}</td>
                                <td>{student.batch}</td>
                                <td>{student.department}</td>                                
                                <td>
                                    <Link to={'/view-student/'+student.id} className="btn btn-info fa fa-eye"></Link>
                                    <Link to={'/edit-student/'+student.id} className="btn btn-warning fa fa-edit"></Link>
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

const Students = () => {
    return (
        <ContentLayout heading="All Students" content={ <Content/> } />
    )
  }
  
export default Students