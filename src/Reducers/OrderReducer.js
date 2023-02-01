import CartingService from "../Services/CartingService";

const orderReducer = (state, action) => {
    let existingMeals = state.meals;

    if (action.meal && CartingService.isValidCartItem(action.meal)) {
        if (action.type === "ADD_ITEM") {
            const exists = existingMeals.some(mealItem => mealItem.id === action.meal.id);

            if (!exists) {
                existingMeals = [action.meal,...existingMeals];
            } else {
                existingMeals = existingMeals.map(mealItem => {
                    return (mealItem.id === action.meal.id) ? {...action.meal, qty: (parseInt(action.meal.qty) + parseInt(mealItem.qty)) } : mealItem; 
                });
            }

            return {
                meals: existingMeals, 
                total: CartingService.getOrderTotal(existingMeals), 
                mealsCounter: CartingService.getItemsNumber(existingMeals)
            };
        } else if (action.type === "UPDATE_ITEM") { 
            existingMeals = existingMeals.map(mealItem => {
                return (mealItem.id === action.meal.id) ? action.meal : mealItem; 
            });

            return {
                meals: existingMeals, 
                total: CartingService.getOrderTotal(existingMeals), 
                mealsCounter: CartingService.getItemsNumber(existingMeals)
            };
        } else if (action.type === "REMOVE_ITEM") {
            const cleanedMeals = existingMeals.filter(mealItem => mealItem.id !== action.meal.id);
            return {
                meals: cleanedMeals, 
                total: CartingService.getOrderTotal(cleanedMeals), 
                mealsCounter: CartingService.getItemsNumber(cleanedMeals)
            };
        }
    }

    return {meals: [], total: 0, mealsCounter: 0};
};

export default orderReducer;