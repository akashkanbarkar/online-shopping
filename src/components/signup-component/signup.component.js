import React, { Component } from 'react';

import FormInput from '../input-element/input-element.component'
import CustomButton from '../custome-button/custome-button.component'
import { auth ,createUserProfileDocument} from '../../firebase/firebase.util'
import './signup.styles.scss'

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handlechange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }

    handlesumbit=async(event)=>{
        event.preventDefault()
        const {displayName,email,password,confirmPassword}=this.state
     if(password!==confirmPassword){
         alert("Password Does Not Match")

         try {
             const {user}= await auth.createUserWithEmailAndPassword(email,password)

            await createUserProfileDocument({user},displayName)
            this.setState({
                displayName:"",
            email:"",
            password:"",
            confirmPassword:""
            })
         } catch (error) {
             console.log(error)
         }
     }
    }
    
    render() {
        return (
            <div className='signup'>
                <h2 className="title">I dont have account</h2>
                <span>Sign up with your email and password</span>
                <form className="signup-form" onSubmit={this.handlesumbit}>
                    <FormInput type="text" name="displayName" label="display Name" value= {this.state.displayName} onChange={this.handlechange}/>
                    <FormInput type="text" name="email" label="email" value= {this.state.email} onChange={this.handlechange}/>
                    <FormInput type="text" name="password" label="Password" value= {this.state.password} onChange={this.handlechange}/>
                    <FormInput type="text" name= "confirmPassword" label="confirm Password" value= {this.state.confirmPassword} onChange={this.handlechange}/>
                    <CustomButton type="submit"> Sign Up</CustomButton>
                </form>
                
                
            </div>
        );
    }
}

export default Signup;