import React from 'react'
import ContentLayout from '../layout/ContentLayout'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux/es/exports';
import { fetchCategories } from '../../reducers/CategorySlice';
import { Link } from 'react-router-dom';
const Content = () => {
    const categories = useSelector( (state)=>state.categories)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( fetchCategories() );
    },[])
    
    return (
        <div>
            {
                !categories.loading && categories.error ? <div>Error : {categories.error}</div> : ""
            }
            {
                categories.loading ? (
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
                        categories.data.map( (category,i)=>(   
                            <tr>
                                <td>{i+1}</td>
                                <td>{category.name}</td>
                                <td>
                                    <Link to={'/edit-category/'+category.id} className="btn btn-warning fa fa-edit"></Link>
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

const Categories = () => {
    return (
        <ContentLayout heading="All Category" content={ <Content/> } />
    )
  }
  
export default Categories