import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { add } from '../../reducers/StudentSlice';
const Content = () => {
    const addStudent = useDispatch()
    const [student, setStudent] = useState({name:"",fatherName:"",contact:"",cnic:"",rollNo:"",batch:"",department:"",address:"",image:""})
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        addStudent( add(student) )
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-4 form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" onChange={(e)=>setStudent({...student,name:e.target.value})} className='form-control' placeholder='Enter Student Name' />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="fatherName">Father Name</label>
                        <input type="text" onChange={(e)=>setStudent({...student,fatherName:e.target.value})} className='form-control' placeholder='Enter Student Father Name' />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="contact">Contact</label>
                        <input type="text" onChange={(e)=>setStudent({...student,contact:e.target.value})} className='form-control' placeholder='Enter Student Contact' />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="cnic">CNIC</label>
                        <input type="text" onChange={(e)=>setStudent({...student,cnic:e.target.value})} className='form-control' placeholder='Enter Student CNIC.' />
                    </div>
                    <div className="col-md-4 form-group">
                        <label htmlFor="rollNo">Roll No.</label>
                        <input type="text" onChange={(e)=>setStudent({...student,rollNo:e.target.value})} className='form-control' placeholder='Enter Student Roll No.' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="department">Department</label>
                        <select  onChange={(e)=>setStudent({...student,department:e.target.value})} className='form-control'>
                            <option value="">Select Department</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="batch">Batch</label>
                        <input type="text" onChange={(e)=>setStudent({...student,batch:e.target.value})} className='form-control' placeholder='Enter Student Batch' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="image">Image</label>
                        <input type="file" onChange={(e)=>setStudent({...student,image:e.target.value})} className='form-control' />
                    </div>
                    <div className="col-md-12 form-group">
                        <label htmlFor="address">Address</label>
                        <textarea  onChange={(e)=>setStudent({...student,address:e.target.value})} className='form-control' placeholder='Enter Student Address' cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-md-12 form-group">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const AddStudent = () => {
  return (
        <ContentLayout heading="New Student" content={ <Content/> } />        
  )
}

export default AddStudent;