import React, { useContext } from 'react'
import CartSummaryContext from '../../Providers/cart-summary-context';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import CartList from './CartList';
import styles from './CartSummary.module.css';

const CartSummary = () => {
  const cartSummaryCtx = useContext(CartSummaryContext);

  return (
    <Modal visible={cartSummaryCtx.isVisible} onClose={cartSummaryCtx.close}>
      <CartList />
      <div className={styles['total-container']}>
        <span>Total amount</span>
        <span className={styles['total-amount']}>${cartSummaryCtx.order.total}</span>
      </div>
      <div className={styles.footer}>
        <Button btnStyle="light" onClick={() => { cartSummaryCtx.close() }}>Close</Button>
        <Button>Order</Button>
      </div>
    </Modal>
  );
};

export default CartSummary;