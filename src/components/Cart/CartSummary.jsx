import React, {useContext} from 'react'
import CartSummaryContext from '../Providers/cart-summary-context';
import Modal from '../UI/Modal/Modal';

const CartSummary = () => {
    const cartSummaryCtx = useContext(CartSummaryContext);
  return (
    <Modal visible={cartSummaryCtx.isVisible} onClose={cartSummaryCtx.close}>Hi</Modal>
  );
};

export default CartSummary;