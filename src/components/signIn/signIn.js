import React, { Component } from 'react';
import './signIn.css';
import FormInput from '../formInput/form-Input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"abc@gmail.com",
            password:"Addy@123"
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
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>  
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>                    
                    </div>
    
                </form>
            </div>
        );
    }
}

export default SignIn;