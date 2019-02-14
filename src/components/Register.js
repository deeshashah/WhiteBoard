import React, {Component} from 'react';
import UserService from "../services/UserService";
import {Redirect} from "react-router-dom";

class Register extends Component{
    constructor(props){
        super(props);
        this.userService = new UserService();
        this.state = {
            username:'',
            password:'',
            verifyPassword:'',
            showalert:false,
            registered_user:'',
            redirect:false,

        }
    }

    setUsername = (event) => {
        this.setState({
            username:event.target.value
        })
    };

    setPassword = (event) => {
        this.setState({
            password:event.target.value
        })
    };

    setVerifyPassword = (event) => {
        this.setState({
            verifyPassword: event.target.value
        })
    };

    register = (event) =>{
        event.preventDefault();
        console.log(this.state.password);
        console.log(this.state.verifyPassword);
        if (this.state.password!==this.state.verifyPassword){
            console.log("here");
            this.setState({
                showalert:true
            })
        }else {
            this.setState({
                showalert: false
            });

            let user = {};
            user.username = this.state.username;
            user.password = this.state.password;
            this.userService.register(user)
                .then(user => this.setState({
                    registered_user: user,
                    redirect:true,
                }))
        }
    };

    render(){
        if(this.state.redirect){
            return (<Redirect to={"/whiteboard"}/>);
        }
        return(
            <div className="container">
                <div className="headline">
                    <center>
                        <h1 className="header">Sign Up</h1>
                        {/*<a className="btn btn-primary home-button" href="../index.html" className="sign">Home</a>*/}
                    </center>
                </div>
                <form>
                    {this.state.showalert? <div className="alert alert-danger">
                        Passwords don't match
                    </div>:''}

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Deesha"
                                   onChange={this.setUsername}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-password-fld"
                                   id="password" placeholder="deesha123"
                                   onChange={this.setPassword}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-password-fld"
                                   id="verify-password" placeholder="deesha123"
                                    onChange={this.setVerifyPassword}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block" type="submit" onClick={this.register}>Sign
                                up</button>
                            <button className="btn btn-danger btn-block">Cancel</button>
                            <div className="row">
                                {/* Implement Routing here*/}
                                {/*<div className="col-6">*/}
                                    {/*<a href="../login/login.template.client.html">Login</a>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;