import React, { Component } from 'react';
import './signIn.css';
import FormInput from '../formInput/form-Input';
import CustomButtom from '../custom-button/custom-button';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({
            email:"",
            password:""
        })
    }
    handleChange=event=>{
        const { name , value} = event.target
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                    name="email" 
                    value={this.state.email}
                    label="email" 
                    handleChange={this.handleChange}
                    required/>
                    <FormInput type="password" 
                    name="password"
                    value={this.state.password}
                    label="password"
                    handleChange={this.handleChange} 
                    required />
                    <CustomButtom type="submit" value="submit">Sign In</CustomButtom>    
                </form>
            </div>
        );
    }
}

export default SignIn;