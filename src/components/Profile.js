import React, {Component} from 'react';
import UserService from "../services/UserService";
import {Link} from "react-router-dom";

class Profile extends Component {
    constructor(props){
        super(props);
        this.userService = new UserService();
        this.state = {
            user: {},
            phone:'',
            didMount:false,
            alert:false
        }
    }

    componentDidMount() {
        if (this.state.didMount===false){
            this.profile();}
    }

    profile = () => {
        console.log("here");
        this.userService.profile()
            .then(user => {
                if(user){
                    console.log("user"+user);
                    this.setState({
                        user:user,
                        didMount:true,
                        role:user.role,
                    })
                }

            });
    };

    setPhone = (event) => {
        console.log(event.target.value);
        this.setState({
            phone:event.target.value,
            didMount:true,
        });
    };

    setEmail = (event) => {
        this.setState({
            email:event.target.value,
            didMount:true,
        })
    };

    setRole = (event) => {
        this.setState({
            role:event.target.value,
            didMount:true,
        })
    };

    update = (event) => {
        event.preventDefault();
        let newuser = this.state.user;
        newuser.phone=this.state.phone;
        newuser.email=this.state.email;
        newuser.role=this.state.role;
        this.userService.update(newuser)
            .then(user =>{
                console.log(user);
                this.setState({
                    user:user,
                    didMount:true,
                    alert:true,
                })})

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
                {this.state.alert? <div class="alert alert-success">
                    Profile successfully saved.
                </div>:''}
                <form>
                    <div class="form-group row">
                        <label for="username" class="col-sm-2 col-form-label">
                            Username </label>
                        <div class="col-sm-10">
                            <input class="form-control"
                                   id="username"
                                   placeholder="Deesha"
                                   value={this.state.user.username} readOnly/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Phone </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"
                                   id="phone"
                                   type="tel"
                                    placeholder={this.state.user.phone}
                                    onChange={this.setPhone}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-sm-2 col-form-label">
                            Email </label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control"
                                   id="email"
                                   placeholder={this.state.user.email}
                                   onChange={this.setEmail}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Role </label>
                        <div class="col-sm-10">
                            <select class="custom-select" id="role" onChange={this.setRole}>
                                <option selected="" value="Faculty">{this.state.user.role}</option>
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
                            <button class="btn btn-success profile-buttons" onClick={this.update}>Update</button>
                            <button class="btn btn-primary profile-buttons"><Link to="/whiteboard" className="link">Cancel</Link></button>
            </div>
    </div>
    </form>
    </div>
        )
    }

}
export default Profile
