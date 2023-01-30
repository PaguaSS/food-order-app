import React from 'react';
import styles from './CartItemButton.module.css';

const CartItemButton = (props) => {
  return (
    <button 
        type={props.type ?? "button"}
        onClick={props.onClick}
        className={`${styles.button} ${props.className ?? ""}`}
    >
        {props.children}
    </button>
  );
};

export default CartItemButton;