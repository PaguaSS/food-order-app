import React, { useContext } from 'react'
import CartSummaryContext from '../../Providers/cart-summary-context';
import CartItem from './CartItem';
import styles from './CartList.module.css';

const CartList = () => {
  const cartSummaryCtx = useContext(CartSummaryContext);

  return (
    <ul className={styles.list}>
      {cartSummaryCtx.order.meals.map(meal => <CartItem key={meal.id} meal={meal}/>)}
    </ul>
  );
};

export default CartList;