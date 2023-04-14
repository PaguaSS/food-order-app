import { useEffect, useState } from "react";
import axios from "axios";
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import Spinner from "../UI/Spinner/Spinner";
import AvailableMealsItem from './AvailableMealsItem';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${process.env.REACT_APP_BASE_API_URL}/${process.env.REACT_APP_API_MEALS}`)
        .then((response) => {
            const mealsList = response.data.filter(meal => {
                return meal && 'name' in meal && 'description' in meal
            });
            setMeals(mealsList);
            setIsLoading(false);
        })
        .catch((error) => {
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
                {!isLoading && list.length === 0 && <p>Something went wrong, try again later.</p>}
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