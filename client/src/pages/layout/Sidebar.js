import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="/"> <img alt="image" src="assets/img/new-images/icon.png" style={{ width:"70px" }} /> <span className="logo-name">LMS</span>
                    </a>
                </div>
                <ul className="sidebar-menu">
                    
                    <li class="dropdown mt-4">
                        <a href="/dashboard" class="nav-link"><i className="fa fa-chart-line"></i><span>Dashboard</span></a>
                    </li>
                    <li class="dropdown">
                        <Link className="nav-link" to="/profile"><i className="fa fa-user-circle"></i> Profile</Link>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown">
                            <i className="fa fa-book"></i><span>Courses</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="nav-link" to="/add-course">Add Course</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/all-course">All Course</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown">
                            <i className="fa fa-building"></i><span>Categories</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="nav-link" to="/add-category">Add Category</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/all-categories">All Categories</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown">
                            <i className="fa fa-user-graduate"></i><span>Students</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="nav-link" to="/add-student">Add Student</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/all-students">All Students</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown">
                            <i class="fas fa-book-medical"></i><span>Enrollments</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="nav-link" to="/add-enrollment">Add Enrollment</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/all-enrollments">All Enrollments</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar