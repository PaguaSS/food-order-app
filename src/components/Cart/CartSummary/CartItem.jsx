import React from 'react';
import CartItemButton from './CartItemButton';
import styles from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={styles.item}>
      <h3>{props.meal.name}</h3>
      <div className={styles.detail}>
        <span className={styles.price}>${props.meal.price}</span>
        <span className={styles.quantity}>x{props.meal.qty}</span>
        <form className={styles['item-actions']}>
          <CartItemButton>-</CartItemButton>
          <CartItemButton>+</CartItemButton>
        </form>
      </div>
    </li>
  );
};

export default CartItem;