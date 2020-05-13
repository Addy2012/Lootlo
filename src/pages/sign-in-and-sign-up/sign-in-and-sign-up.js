import React from 'react';
import './sign-in-and-sign-up.css';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';


const SignInAndSignUpPage=()=>(
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage