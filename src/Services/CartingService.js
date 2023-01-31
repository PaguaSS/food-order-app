const CartingService = {
    isValidCartItem: mealItem => {
        let isValid = true;
        const keys  = ['id', 'name', 'price', 'qty'];

        keys.forEach((key) => {
            if (!(key in mealItem)) {
                isValid = false;
                return; 
            }
        });

        if (isValid && (mealItem.price <= 0 || mealItem.qty < 0)) {
            isValid = false;
        }

        return isValid;
    },
    roundValue: (num, precision) => Number(Math.round(num + "e+" + precision) + "e-" + precision),
    getOrderTotal: (selectedMeals) => {
        if (selectedMeals && selectedMeals.length > 0) {
            const total = selectedMeals.reduce((prevTotal, orderItem) => prevTotal + (orderItem.price * orderItem.qty), 0);
            return CartingService.roundValue(total, 2);
        } 
    
        return 0;
    }
};

export default CartingService;