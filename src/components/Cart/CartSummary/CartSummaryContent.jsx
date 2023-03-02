import { Fragment } from 'react'
import Button from '../../UI/Button/Button';
import CartList from './CartList';
import styles from './CartSummary.module.css';

const CartSummaryContent = (props) => {
  return (
    <Fragment>
      <CartList />
      <div className={styles['total-container']}>
        <span>Total amount</span>
        <span className={styles['total-amount']}>${props.total}</span>
      </div>
      <div className={styles.footer}>
        <Button btnStyle="light" onClick={props.onClose}>Close</Button>
        {props.mealsCounter > 0 && <Button className={styles['order-button']} onClick={props.onCheckout}>Order</Button>}
      </div>
    </Fragment>
  );
};

export default CartSummaryContent;