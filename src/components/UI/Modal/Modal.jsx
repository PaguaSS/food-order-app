import React from 'react';
import ReactDOM  from 'react-dom';
import styles from './Modal.module.css';

const Modal = props => {
    const onCloseHandler = () => { 
        if(props.onClose){
            props.onClose();
        }
    };

    const ModalGrapper = props => 
        <div className={`${styles.modal} ${!props.visible && styles.hidden} ${props.className ?? ''} `} onClick={onCloseHandler}>
            <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
                <div className={styles['modal-body']}>{props.children}</div>
            </div>
        </div>;

    return ReactDOM.createPortal(
        <ModalGrapper 
            visible={props.visible ?? false} 
            header={props.header} 
            className={props.className}
        >
        {props.children}
        </ModalGrapper>,
        document.getElementById("global-elements")
    );
};

export default Modal;