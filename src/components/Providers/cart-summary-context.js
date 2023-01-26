import React, { useState } from 'react';

const CartSummaryContext = React.createContext({
    isVisible: false,
    meals: [],
    close: () => {},
    show: () => {},
    addMeals: () => {}
});

export const CartSummaryProvider = props => {
    const [visible, setVisible] = useState(props.visible ?? false);
    const [meals, setMeals] = useState([]);

    const onCloseHandler = () => setVisible(false);

    const onShowHandler = () => setVisible(true);

    const onAddMeals = (items) => {
        setMeals((prevMeals) => {
            return [items, ...prevMeals];
        });
    };

    return (
        <CartSummaryContext.Provider value={{isVisible: visible, meals: meals, close: onCloseHandler, show: onShowHandler, addMeals: onAddMeals}}>
            {props.children}
        </CartSummaryContext.Provider>
    );
}; 

export default CartSummaryContext;