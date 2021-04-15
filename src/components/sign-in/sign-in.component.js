import React, { Component } from 'react';
import FormInput from '../input-element/input-element.component'
import CustomButton from '../custome-button/custome-button.component'
import './sign-in.styles.scss'

class SignInComponent extends Component {
    constructor(props) {
        super(props);

        this.state={
            email:"",
            password:""
        }

    }

    handleChange=(e)=>{
        
        this.setState({[e.target.name]:e.target.value})

    }

    handleSubmit=(e)=>{

        e.preventDefault()
        this.setState({email:"",password:""})

    }
   

    render() {
        return (
            <div className="sign-in">
                <h2>I have allrdy account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput type="email" name="email" value={this.state.email} handlechange={this.handleChange} label="email"/>
                    
                    <FormInput type="password" name="password" value={this.state.password} handlechange={this.handleChange} label="password"/>
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>

            </div>
        );
    }
}



export default SignInComponent;