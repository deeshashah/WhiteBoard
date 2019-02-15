import React, {Component} from 'react';
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class Profile extends Component {
    constructor(props){
        super(props);
        this.userService = new UserService();
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        this.profile();
    }

    profile = () => {
        this.userService.profile()
            .then(user => {
                if(user){
                    this.setState({
                        user:user,
                    })
                }

            });
    };

    render(){
        return(
            <div class="container container-fluid">
                <div class="row">
                    <div class="col-md-2">
                        <h1>Profile</h1>
                    </div>
                    <div class="col-md-1">
                        <Link to="\" className="link">Home</Link>
                    </div>
                </div>
                <div class="alert alert-success">
                    Profile successfully saved.
                </div>
                <form>
                    <div class="form-group row">
                        <label for="username" class="col-sm-2 col-form-label">
                            Username </label>
                        <div class="col-sm-10">
                            <input class="form-control"
                                   id="username"
                                   placeholder="Deesha"
                                   value={this.state.user.username} readonly/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Phone </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"
                                   id="phone" placeholder="9738328695"
                                    value={this.state.user.phone}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Email </label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control"
                                   id="email"
                                   value={this.state.user.email}
                                   placeholder="deesha@husky.neu.edu"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Role </label>
                        <div class="col-sm-10">
                            <select class="custom-select" id="role">
                                <option selected="">{this.state.user.role}</option>
                                <option value="Student">Student</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Date of Birth </label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control"
                                   id="dob"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-10">
                            <button class="btn btn-success profile-buttons"><Link to="\" className="link">Update</Link></button>
                            <button class="btn btn-primary profile-buttons"><Link to="/whiteboard" className="link">Cancel</Link></button>
            </div>
    </div>
    </form>
    </div>
        )
    }

}
export default Profile
