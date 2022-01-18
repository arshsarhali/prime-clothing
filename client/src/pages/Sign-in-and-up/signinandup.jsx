
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { SigninAndSignupContainer } from './signinandup.styles';

const Signin = () => (

    <SigninAndSignupContainer>
        <SignIn />
        <SignUp/>
    </SigninAndSignupContainer>

)

export default Signin;