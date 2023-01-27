import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const colorsStyle = props.btnStyle === "light" ? "light" : "filled";
    return (
        <button 
            className={`${styles.button} ${props.className ?? ''} ${styles[colorsStyle]}`}
            type={props.type ?? "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;