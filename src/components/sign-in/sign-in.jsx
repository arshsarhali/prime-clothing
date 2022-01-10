import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase-util';
import { SignInContainer } from './sign-in.styles';

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

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:''})


        } catch (error) {
            console.error(error);
        }
    
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }
    
    render() { 
    return(
<SignInContainer >
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
        <FormInput name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange } required />
        

                <FormInput name="password" label="Password" type="password" handleChange={this.handleChange } value={this.state.password} required />
        
    
                <CustomButton type="submit">Sign In</CustomButton>
                
            </form>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
</SignInContainer>

    );
}
}

export default SignIn;