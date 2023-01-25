import React, {Fragment} from 'react';
import CartButton from './CartButton';
import styles from './Header.module.css';
import mealsImg from '../../../assets/img/meals.jpg';

const Header = props => {

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <CartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImg} alt="Please pick up whatever you want"/>
            </div>
        </Fragment>
    );
};

export default Header;