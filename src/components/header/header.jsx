import { ReactComponent as Logo } from '../../assets/prime.svg'; 
import { auth } from '../../firebase/firebase-util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer,LogoContainer, OptionsContainer, OptionDiv,OptionLink } from './header.styles';


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropDown />
        
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden

});

export default connect(mapStateToProps)(Header);