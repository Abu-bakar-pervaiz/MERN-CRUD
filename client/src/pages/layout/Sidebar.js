import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="index.html"> <img alt="image" src="assets/img/logo.png" className="header-logo" /> <span className="logo-name">Otika</span>
                    </a>
                </div>
                <ul className="sidebar-menu">
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown">
                            <i className="fa fa-book"></i><span>Course</span>
                        </a>
                        <ul className="dropdown-menu">
                            {/* <li>
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li> */}
                            <li>
                                <Link className="nav-link" to="/add-course">Add Course</Link>
                                {/* <a className="nav-link" href="/add-course">Add Course</a> */}
                            </li>
                            <li>
                                <Link className="nav-link" to="/all-course">All Course</Link>
                                {/* <a className="nav-link" href="/all-course">All Course</a> */}
                                </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar