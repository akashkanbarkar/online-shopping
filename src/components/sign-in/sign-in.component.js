import React, { Component } from 'react';
import FormInput from '../input-element/input-element.component'
import CustomButton from '../custome-button/custome-button.component'
import {auth, signInWithGoogle } from '../../firebase/firebase.util'
import './sign-in.styles.scss'

class SignInComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            user: ""
        }

    }

    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit = async(e) => {

        e.preventDefault()
        const {email, password}=this.state

        try {
           await auth.signInWithEmailAndPassword(email,password)
           this.setState({ email: "", password: "" })
        } catch (error) {
            console.log(error)
        }
       
        

    }


    render() {
        return (
            <div className="sign-in">
                <h2>I have allrdy account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput type="email" name="email" value={this.state.email} handlechange={this.handleChange} label="email" />

                    <FormInput type="password" name="password" value={this.state.password} handlechange={this.handleChange} label="password" />
                    <div className="button">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButton>
                    </div>
                    
                </form>

            </div>
        );
    }
}



export default SignInComponent;