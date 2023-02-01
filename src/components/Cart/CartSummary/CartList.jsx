import React, { useContext, Fragment } from 'react'
import CartSummaryContext from '../../Providers/cart-summary-context';
import CartItem from './CartItem';
import styles from './CartList.module.css';

const CartList = () => {
  const cartSummaryCtx = useContext(CartSummaryContext);

  return (
    <Fragment>
      {cartSummaryCtx.order.meals.length === 0 && <p>No meals added yet ...</p>}
      <ul className={styles.list}>
        {cartSummaryCtx.order.meals.map(meal => <CartItem key={meal.id} meal={meal} />)}
      </ul>
    </Fragment>
  );
};

export default CartList;