import React, { useState, useReducer } from 'react';

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

const orderReducer = (state, action) => {

    if (action.type === "ADD_ITEM") {
        let newMeals = state.meals;

        if (action.meal) {
            newMeals = [...newMeals, action.meal];
        }

        return {meals: newMeals, total: getOrderTotal(newMeals)};
    }

    return {meals: [], total: 0};
};

const getOrderTotal = (selectedMeals) => {
    if (selectedMeals && selectedMeals.length > 0) {
        return selectedMeals.reduce((prevTotal, orderItem) => prevTotal + (orderItem.price * orderItem.qty), 0);
    } 

    return 0;
};

export const CartSummaryProvider = props => {
    const [visible, setVisible] = useState(props.visible ?? false);
    const [orderState, dispatchOrder] = useReducer(orderReducer, {type: null, meals: [], total: 0});

    const onCloseHandler = () => setVisible(false);

    const onShowHandler = () => setVisible(true);

    const onAddMeals = (mealItem) => {
        dispatchOrder({
            type: "ADD_ITEM",
            meal: mealItem
        });
    };

    return (
        <CartSummaryContext.Provider 
            value={{
                isVisible: visible, 
                order: {meals: orderState.meals, total: orderState.total}, 
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