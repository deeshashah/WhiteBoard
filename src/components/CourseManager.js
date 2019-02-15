import React from 'react'
import {Link} from "react-router-dom";

const CourseManager = () =>
    <div className="container">
        <center><h2>Course Manager</h2></center>
        <br></br>
        <br></br>
        <center>
            <button className="btn btn-secondary">
                <Link to="/login" className="link">Login</Link>
            </button>
            <button className="btn btn-warning">
                <Link to="/register" className="link">Register</Link>
            </button>
        </center>
    </div>

export default CourseManager;