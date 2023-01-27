import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import CartSummary from "../Cart/CartSummary/CartSummary";

const Meals = () => {
    return (
        <Fragment>
            <main>
                <MealsSummary/>
                <AvailableMeals/>
                <CartSummary/>
            </main>
        </Fragment>
    );
};

export default Meals;