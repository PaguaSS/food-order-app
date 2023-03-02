import React, { useContext, useState } from 'react'
import Checkout from '../../forms/Checkout';
import CartSummaryContent from './CartSummaryContent';
import CartSummaryContext from '../../Providers/cart-summary-context';
import Modal from '../../UI/Modal/Modal';

const CartSummary = () => {
  let modalContent = null;
  const cartSummaryCtx = useContext(CartSummaryContext);
  const [checkoutFormVisible, setCheckoutFormVisible] = useState(false);

  const onCloseHandler = () => {
    cartSummaryCtx.close();
    setCheckoutFormVisible(false);
  };

  const displayCheckoutFormHandler = () => {
    setCheckoutFormVisible(true);
  };

  if (checkoutFormVisible) {
    modalContent = <Checkout />;
  } else {
    modalContent = <CartSummaryContent 
      total={cartSummaryCtx.order.total}
      mealsCounter={cartSummaryCtx.order.mealsCounter}
      onClose={onCloseHandler}
      onCheckout={displayCheckoutFormHandler}
    />;
  } 

  return (
    <Modal visible={cartSummaryCtx.isVisible} onClose={onCloseHandler}>
      {modalContent}
    </Modal>
  );
};

export default CartSummary;