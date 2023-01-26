import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const light = props.btnStyle === "light" ? "bordered" : "";
    return (
        <button 
            className={`${styles.button} ${props.className} ${light}`}
            type={props.type ?? "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;