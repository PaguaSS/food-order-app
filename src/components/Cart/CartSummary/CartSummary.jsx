import React, { useContext, useState } from 'react'
import Checkout from '../../forms/Checkout';
import CartSummaryContent from './CartSummaryContent';
import CartSummaryContext from '../../Providers/cart-summary-context';
import GlobalLoaderContext from '../../Providers/global-loader-context';
import FirebaseService from '../../../Services/FirebaseService';
import Modal from '../../UI/Modal/Modal';

const CartSummary = () => {
  let modalContent = null;
  const cartSummaryCtx = useContext(CartSummaryContext);
  const globalLoaderCtx = useContext(GlobalLoaderContext);
  const [checkoutFormVisible, setCheckoutFormVisible] = useState(false);

  const onCloseHandler = () => {
    cartSummaryCtx.close();
    setCheckoutFormVisible(false);
  };

  const displayCheckoutFormHandler = () => {
    setCheckoutFormVisible(true);
  };

  const onSaveCart = async (deliveryData) => {
    const creationResponse = await FirebaseService.createOrder({
      ...deliveryData,
      items: cartSummaryCtx.order.meals,
      total: cartSummaryCtx.order.total
    });
    console.log(creationResponse);
    //globalLoaderCtx.show();
  };

  if (checkoutFormVisible) {
    modalContent = <Checkout onSave={onSaveCart}/>;
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