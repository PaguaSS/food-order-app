import React, { useState, useReducer } from 'react';
import orderReducer from '../../Reducers/OrderReducer';
import CartSummaryContext from './cart-summary-context';

const CartSummaryProvider = props => {
    const [visible, setVisible] = useState(props.visible ?? false);
    const [orderState, dispatchOrder] = useReducer(orderReducer, {
        meals: [],
        total: 0,
        mealsCounter: 0
    });

    const onCloseHandler = () => setVisible(false);

    const onShowHandler = () => setVisible(true);

    const onAddMeal = (mealItem) => {
        dispatchOrder({
            type: "ADD_ITEM",
            meal: mealItem
        });
    };

    const onRemoveMeal = (mealItem) => {
        dispatchOrder({
            type: "REMOVE_ITEM",
            meal: mealItem
        });
    };

    const onUpdateMeal = (mealItem) => {
        dispatchOrder({
            type: "UPDATE_ITEM",
            meal: mealItem
        });
    };

    return (
        <CartSummaryContext.Provider 
            value={{
                isVisible: visible, 
                order: orderState, 
                close: onCloseHandler, 
                show: onShowHandler, 
                addMeal: onAddMeal,
                updateMeal: onUpdateMeal,
                removeMeal: onRemoveMeal
            }}
            >
            {props.children}
        </CartSummaryContext.Provider>
    );
}; 

export default CartSummaryProvider;