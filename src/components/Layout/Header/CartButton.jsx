import React, { useContext } from 'react';
import CartIcon from '../../Cart/CartIcon';
import ModalContext from '../../Providers/cart-summary-context';
import styles from './CartButton.module.css';

const CartButton = props => {
  const modalCtx = useContext(ModalContext);

  return (
    <button className={styles.button} onClick={() => { modalCtx.show() }}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default CartButton;