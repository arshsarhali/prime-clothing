import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';


import { clearCart, selectCartFromFirebase } from './cart.actions';
import { CartActionTypes } from './cart.types';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart-selectors';

import { getUserCart, updateCartItem } from '../../firebase/firebase-util';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* getCartFromFirebase({ payload: user }) {
    const cartSnap = yield getUserCart(user.id)
    console.log(cartSnap.get('cartItem'))
    yield put(selectCartFromFirebase( cartSnap.get('cartItem') ))
   
}
export function* updateFirebaseCart() {
    const user = yield select(selectCurrentUser);
    if (user) {
        const cartItem = yield select(selectCartItems);
        yield updateCartItem(user.id, cartItem)
    }

}
export function* onCartChange() {
    yield takeLatest([
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_ITEM_FROM_CART

    ], updateFirebaseCart)
}

export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getCartFromFirebase)
}
export function* cartSaga() {
    yield all([
        call(onSignOutSuccess),
        call(onUserSignIn),
        call(onCartChange)

    ])
}