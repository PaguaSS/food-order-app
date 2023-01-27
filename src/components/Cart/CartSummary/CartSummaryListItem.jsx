import React from 'react';
import Button from '../../UI/Button/Button';

const CartSummaryListItem = (props) => {
  return (
    <li>
      <h3>{props.meal.name}</h3>
      <div className='summary'>
        <span className='price'>${props.meal.price}</span>
        <form>
          <span>x{props.meal.qty}</span>
          <Button btnStyle="light">-</Button>
          <Button btnStyle="light">+</Button>
        </form>
      </div>
    </li>
  );
};

export default CartSummaryListItem;