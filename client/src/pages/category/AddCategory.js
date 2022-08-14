import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { add } from '../../reducers/CategorySlice';
const Content = () => {
    const addCategory = useDispatch()
    const [name, setName] = useState("")
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const category = {
            name
        };
        addCategory( add(category) )
        setName("")
    }
    
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Enter Category Name' />
                    </div>
                    <div className="col-md-12 form-group">
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const AddCategory = () => {
  return (
        <ContentLayout heading="New Category" content={ <Content/> } />        
  )
}

export default AddCategory;