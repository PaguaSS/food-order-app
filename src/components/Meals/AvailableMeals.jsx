import { useEffect, useState } from "react";
import axios from "axios";
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import Spinner from "../UI/Spinner/Spinner";
import AvailableMealsItem from './AvailableMealsItem';

const mealsURL = "https://reactcourse-dcdec-default-rtdb.firebaseio.com/meals.json";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(mealsURL).then((response) => {
            const mealsList = response.data.filter(meal => {
                return meal && 'name' in meal && 'description' in meal
            });
            setMeals(mealsList);
            setIsLoading(false);
        });
    }, []);

    const list = meals.map(meal => {
        return <AvailableMealsItem key={meal.id} meal={meal}/>
    });

    return (
        <section className={styles.meals}>
            <Card>
                {isLoading && <Spinner />}
                {!isLoading && 
                    <ul>
                        {list}
                    </ul>
                }
            </Card>
        </section>
    );
};

export default AvailableMeals;