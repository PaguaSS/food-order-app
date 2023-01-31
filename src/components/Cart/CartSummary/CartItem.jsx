import React, { useContext, useState } from 'react';
import CartSummaryContext from '../../Providers/cart-summary-context';
import CartItemButton from './CartItemButton';
import styles from './CartItem.module.css';

const CartItem = (props) => {
  const cartSummaryCtx = useContext(CartSummaryContext);
  const [quantity, setQuantity] = useState(parseInt(props.meal.qty ?? "0"));

  const increaseQuantityHandler = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      const meal = {...props.meal, qty: newQuantity};
      cartSummaryCtx.updateMeal(meal);

      return newQuantity;
    });
  };

  const decreaseQuantityHandler = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity - 1;
      const meal = {...props.meal, qty: newQuantity};

      if (newQuantity === 0) {
        cartSummaryCtx.removeMeal(meal);
      } else {
        cartSummaryCtx.updateMeal(meal);
      }

      return newQuantity;
    });
  };

  return (
    <li className={styles.item}>
      <h3>{props.meal.name}</h3>
      <div className={styles.detail}>
        <span className={styles.price}>${props.meal.price}</span>
        <span className={styles.quantity}>x{quantity}</span>
        <form className={styles['item-actions']}>
          <CartItemButton onClick={decreaseQuantityHandler}>-</CartItemButton>
          <CartItemButton onClick={increaseQuantityHandler}>+</CartItemButton>
        </form>
      </div>
    </li>
  );
};

export default CartItem;