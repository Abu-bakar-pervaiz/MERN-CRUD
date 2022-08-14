import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { edit } from '../../reducers/ProfileSlice';
const Content = () => {
    const dispatch = useDispatch()
    const studentData = useSelector( (state)=>state.profile )

    const [student, setStudent] = useState({name:"",fatherName:"",contact:"",cnic:"",rollNo:"",batch:"",department:"",address:"",image:""})
    useEffect( ()=>{
        setStudent(studentData)
    },[])
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        dispatch( edit(student) )
    }
    
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <img src="assets/img/user.png" className='w-100' alt="" />
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="Name">Name</label>
                                        <input type="text" onChange={(e)=>setStudent({...student,name:e.target.value})} value={studentData.name} className='form-control' placeholder='Enter Name' />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="fatherName">Father Name</label>
                                        <input type="text" onChange={(e)=>setStudent({...student,fatherName:e.target.value})} value={studentData.fatherName} className='form-control' placeholder='Enter Father Name' />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="contact">Contact</label>
                                        <input type="text" onChange={(e)=>setStudent({...student,contact:e.target.value})} value={studentData.contact} className='form-control' placeholder='Enter Contact' />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="cnic">CNIC</label>
                                        <input type="text" onChange={(e)=>setStudent({...student,cnic:e.target.value})} value={studentData.cnic} className='form-control' placeholder='Enter CNIC.' />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="password">New Password</label>
                                        <input type="text" onChange={(e)=>setStudent({...student,password:e.target.value})} value={studentData.password} className='form-control' placeholder='Enter New Password' />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="text" onChange={(e)=>setStudent({...student,confirmPassword:e.target.value})} value={studentData.confirmPassword} className='form-control' placeholder='Enter Confirm Password' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="rollNo">Roll No.</label>
                        <input type="text" onChange={(e)=>setStudent({...student,rollNo:e.target.value})} value={studentData.rollNo} className='form-control' placeholder='Enter Roll No.' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="department">Department</label>
                        <select  onChange={(e)=>setStudent({...student,department:e.target.value})} value={studentData.departmentt} className='form-control'>
                            <option value="">Select Department</option>
                        </select>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="batch">Batch</label>
                        <input type="text" onChange={(e)=>setStudent({...student,batch:e.target.value})} value={studentData.batch} className='form-control' placeholder='Enter Batch' />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="profileImage">Image</label>
                        <input type="file" onChange={(e)=>setStudent({...student,profileImage:e.target.value})} value={studentData.profileImage} className='form-control' placeholder='Enter Batch' />
                    </div>
                    <div className="col-md-12 form-group">
                        <label htmlFor="address">Address</label>
                        <textarea  onChange={(e)=>setStudent({...student,address:e.target.value})} value={studentData.address} className='form-control' placeholder='Enter Address' cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-md-12 form-group">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const Profile = () => {
  return (
        <ContentLayout heading="Profile" content={ <Content/> } />        
  )
}

export default Profile;