import React from 'react';

const CartSummaryContext = React.createContext({
    isVisible: false,
    order: {
        meals: [],
        total: 0,
        mealsCounter: 0
    },
    close: () => {},
    show: () => {},
    addMeal: () => {},
    updateMeal: () => {},
    removeMeal: () => {}
});

export default CartSummaryContext;