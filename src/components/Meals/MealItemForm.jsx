import React from 'react';
import Button from '../UI/Button/Button';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
        <label>
            Amount
            <input type="number" min="0" className={styles['amount-input']}/>
        </label>
        <Button type="button">+ Add</Button>
    </form>
  );
};

export default MealItemForm;