import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/prime.svg'; 
import { auth } from '../../firebase/firebase-util';
import { connect } from 'react-redux';


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logocontainer' to="/">
            <Logo />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
currentUser:state.user.currentUser

});

export default connect(mapStateToProps)(Header);