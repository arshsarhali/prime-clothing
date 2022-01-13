import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { SignInContainer } from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component{
    constructor(props) {
    
        super(props);

        this.state = {
            email: '',
            password:''
        }
}

    handleSubmit = async event =>{
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);


    
    
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }
    
    render() { 
        const { googleSignInStart } = this.props;

    return(
<SignInContainer >
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
        <FormInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange } required />
        

                <FormInput name="password" label="Password" type="password" handleChange={this.handleChange } value={this.state.password} required />
        
    
                <CustomButton type="submit">Sign In</CustomButton>
                
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
            </form>
            
</SignInContainer>

    );
}
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email,password }))
})

export default connect(null,mapDispatchToProps)(SignIn);