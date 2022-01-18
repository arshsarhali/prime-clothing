import { ReactComponent as Logo } from '../../assets/prime.svg'; 
import {  useSelector, useDispatch } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer,LogoContainer, OptionsContainer, OptionDiv,OptionLink } from './header.styles';


const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);

    const dispatch = useDispatch();
    return (
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
                        <OptionDiv onClick={()=> dispatch (signOutStart())}>SIGN OUT</OptionDiv>
                        :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null :
                    <CartDropDown />
        
            }
        </HeaderContainer>
    );
}

export default Header;