import React, { useState } from 'react';

const CartSummaryContext = React.createContext({
    isVisible: false,
    order: {
        meals: [],
        total: 0.00
    },
    close: () => {},
    show: () => {},
    addMeals: () => {}
});

export const CartSummaryProvider = props => {
    const [visible, setVisible] = useState(props.visible ?? false);

    const onCloseHandler = () => setVisible(false);

    const onShowHandler = () => setVisible(true);

    const onAddMeals = (items) => {
    };

    const dummyData = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
            qty: 1
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
            qty: 3
        }
    ];

    return (
        <CartSummaryContext.Provider 
            value={{
                isVisible: visible, 
                order: {meals:dummyData, total: 0.00}, 
                close: onCloseHandler, 
                show: onShowHandler, 
                addMeals: onAddMeals
            }}
            >
            {props.children}
        </CartSummaryContext.Provider>
    );
}; 

export default CartSummaryContext;