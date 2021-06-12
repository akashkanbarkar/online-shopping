import React from 'react';
import SignInComponent from '../../components/sign-in/sign-in.component'
import SignUpComponent from '../../components/signup-component/signup.component'
import './sign-in.styles.scss'

const SignIn = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignInComponent/>
            <SignUpComponent/>
        </div>
    );
};

export default SignIn;