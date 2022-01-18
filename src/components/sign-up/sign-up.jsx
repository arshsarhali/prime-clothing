
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {  useDispatch } from 'react-redux';
import React, { useState} from 'react';
import { SignUpContainer } from './sign-up.styles';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ()=> {

    const dispatch = useDispatch();

    const [inputData, setData] = useState({displayName:'',
    email: '',
    password: '',
    confirmPassword:''})

    const { displayName, email, password, confirmPassword } = inputData;
    const handleSubmit = async event => {
        event.preventDefault();
       

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        dispatch(signUpStart({ email,password,displayName }))

    
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setData({...inputData, [name]: value });
    }



    

   
        return (
            <SignUpContainer>
                <h2 className='title'>I don't have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} handleChange={handleChange} label='Display Name' required />
                    
                    <FormInput type='email' name='email' value={email} handleChange={handleChange} label='Email' required />
                    
                    <FormInput type='password' name='password' value={password} handleChange={handleChange} label='Password' required />
                    
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={handleChange} label ='Confirm Password' required/>
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                
                </form>
            </SignUpContainer> 

        )
    }
        



export default SignUp;