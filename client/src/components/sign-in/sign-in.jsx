import React, {useState } from 'react';
import { useDispatch} from 'react-redux';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { SignInContainer } from './sign-in.styles';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ()=>{

    const dispatch = useDispatch();

    const [userCredentials, setCredentials] = useState({ email:'', password:''})
    const { email, password } = userCredentials;
    const handleSubmit = async event =>{
        event.preventDefault();

        
        dispatch(emailSignInStart({ email, password }));


    
    
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }
    

    return(
<SignInContainer >
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" label="Email" value={email} handleChange={handleChange } required />
        

                <FormInput name="password" label="Password" type="password" handleChange={handleChange } value={password} required />
        
    
                <CustomButton type="submit">Sign In</CustomButton>
                
                <CustomButton type='button' onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>Sign In with Google</CustomButton>
            </form>
            
</SignInContainer>

    );
}




export default SignIn;