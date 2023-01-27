import React, { useContext } from 'react'
import CartSummaryContext from '../../Providers/cart-summary-context';
import CartSummaryListItem from './CartSummaryListItem';

const CartSummaryList = (props) => {
  const cartSummaryCtx = useContext(CartSummaryContext);

  return (
    <ul>
      {cartSummaryCtx.order.meals.map(meal => <CartSummaryListItem key={meal.id} meal={meal}/>)}
    </ul>
  );
};

export default CartSummaryList;