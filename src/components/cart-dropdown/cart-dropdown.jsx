import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item'></div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

export default CartDropDown;