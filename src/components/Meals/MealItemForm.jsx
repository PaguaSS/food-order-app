import React, { useState, useContext } from 'react';
import CartSummaryContext from '../Providers/cart-summary-context';
import Button from '../UI/Button/Button';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const cartSummaryCtx = useContext(CartSummaryContext);
  const [amount, setAmount] = useState(0);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const addMealHandler = () => {
    const amountValue = amount;
    if (parseInt(amountValue) > 0) {
      const meal = {...props.meal, qty: amountValue};
      cartSummaryCtx.addMeal(meal);
      setAmount("0");
    }
  };

  return (
    <form className={styles.form}>
        <label>
            Amount
            <input type="number" min="0" value={amount} className={styles['amount-input']} onChange={amountChangeHandler}/>
        </label>
        <Button type="button" onClick={addMealHandler}>+ Add</Button>
    </form>
  );
};

export default MealItemForm;