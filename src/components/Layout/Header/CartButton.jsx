import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import ModalContext from '../../Providers/cart-summary-context';
import CartSummaryContext from '../../Providers/cart-summary-context';
import styles from './CartButton.module.css';

const CartButton = () => {
  const modalCtx = useContext(ModalContext);
  const cartSummaryContx = useContext(CartSummaryContext);
  const [onItemAddedClass, setOnItemAddedClass] = useState('');
  const {mealsCounter: counter} = cartSummaryContx.order;

  useEffect(() => {
    if (counter === 0) {
      return;
    }
    
    setTimeout(() => {
      setOnItemAddedClass(styles.bump);
    }, 50);

    return () => {
      setOnItemAddedClass('');
    };
  }, [counter]);

  return (
    <button className={`${styles.button} ${onItemAddedClass}`} onClick={() => { modalCtx.show() }}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;