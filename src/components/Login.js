import React, {Component} from 'react'
import UserService from "../services/UserService";
import {Link, Redirect} from "react-router-dom";

class Login extends Component{
    constructor(props) {
        super(props);
        this.userService = new UserService();
        this.state = {
            username:'',
            password:'',
            loggedin:false,
            alert:false,
        }
    }

    componentDidMount() {
        this.profile()
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

    somebodyLoggedIn = (event) => {
      this.userService.loggedin()
          .then(response => {
              console.log(response);
          })
    };

    login = (event) => {
        event.preventDefault();
        let user = {};
        user.username = this.state.username;
        user.password = this.state.password;
        this.userService.login(user)
            .then(user=>{
                if(user){
                    this.setState({
                        loggedInUser:user,
                        redirect:true,
                        alert:false
                    })
                }else{this.setState({
                    alert:true,
                })
                }
                });

    };

    profile = () => {
        this.userService.profile()
            .then(user => {
                if(user){
                    this.setState({
                        loggedin:true,
                    })
                }

            });
    };

    render() {
        if(this.state.redirect){
            return (<Redirect to={"/whiteboard"}/>);
        }

        if(this.state.loggedin){
            return(<Redirect to={"/whiteboard"}/>)
        }

        return(
            <div className="container">
                <div className="headline">
                    <center>

                        <h1 className="header">Sign In</h1>
                    </center>
                    {this.state.alert? <div className="alert alert-danger">
                        Username or Password incorrect
                    </div>:''}
                </div>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username: </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="alice"
                                   onChange={this.setUsername}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password: </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-password-fld"
                                   id="password" placeholder="rabbit"
                                   onChange={this.setPassword}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary"
                               onClick={this.login}> Sign in</button>
                            <button className="btn btn-danger"><Link to="/" className="link">Cancel</Link></button>
                            <button className="btn btn-warning"> <Link to="/register" className="link">Register</Link></button>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <div className="col-6">

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default Login;