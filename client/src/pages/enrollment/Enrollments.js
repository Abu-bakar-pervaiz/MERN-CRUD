import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { fetchEnrollments } from '../../reducers/EnrollmentSlice';
import { Link } from 'react-router-dom';
const Content = () => {
    const enrollments = useSelector( (state)=>state.enrollments)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( fetchEnrollments() );
    },[])
    
    return (
        <div>
            {
                !enrollments.loading && enrollments.error ? <div>Error : {enrollments.error}</div> : ""
            }
            {
                enrollments.loading ? (
                    <h1>Loading.....</h1>
                )
                :(
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        enrollments.data.map( (enrollment,i)=>(   
                            <tr>
                                <td>{i+1}</td>
                                <td>{enrollment.name}</td>
                                <td>
                                    <Link to={'/edit-enrollment/'+enrollment.id} className="btn btn-warning fa fa-edit"></Link>
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

const Enrollments = () => {
    return (
        <ContentLayout heading="All Enrollment" content={ <Content/> } />
    )
  }
  
export default Enrollments