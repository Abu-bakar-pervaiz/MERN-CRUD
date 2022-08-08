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
                            <li><a className="nav-link" href="/home">Home</a></li>
                            <li><a className="nav-link" href="/dashboard">Dashboard</a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar