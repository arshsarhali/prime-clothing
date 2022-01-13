
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import React from 'react';
import { SignUpContainer } from './sign-up.styles';

import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        const { signUpStart } = this.props;
        signUpStart(email, password, displayName);

    
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }



    

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <h2 className='title'>I don't have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required />
                    
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email' required />
                    
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password' required />
                    
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={ this.handleChange} label ='Confirm Password' required/>
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                
                </form>
            </SignUpContainer> 

        )
    }
        
}

export const mapDispatchToProps = dispatch => ({
    signUpStart: (email,password,displayName) => dispatch(signUpStart({ email,password,displayName })) 
})

export default connect(null,mapDispatchToProps)(SignUp);