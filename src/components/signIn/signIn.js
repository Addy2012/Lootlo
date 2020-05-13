import React, { Component } from 'react';
import './signIn.css';
import FormInput from '../formInput/form-Input';
import CustomButton from '../custom-button/custom-button';
import { auth,signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({ email:"",password:""})
        } catch (error) {
            console.log(error)
        }
        // await auth.signInWithEmailAndPassword(email,password)
        // .then(function(userSingInned){
        //     alert("signup successful")
        // })
        // .catch(function(error){
        //     alert("there is an error")
        // })


    }
    handleChange= event =>{
        const { name , value} = event.target
        this.setState({
            [name] : value
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
                        <CustomButton type="submit">SIGN IN</CustomButton>  
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