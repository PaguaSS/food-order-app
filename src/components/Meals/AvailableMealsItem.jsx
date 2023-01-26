import styles from './AvailableMealsItem.module.css';
import MealItemForm from './MealItemForm';

const AvailableMealsItem = (props) => {
    const defaultData = {
        id: Math.random().toString(),
        name: '-',
        description: '-',
        price: 0.00
    };
    const mealItem = props.meal ?? defaultData; 

    return (
        <li className={styles['meals-item']}>
            <div>
                <h3>{mealItem.name}</h3>
                <p className={styles['meals-item-desc']}>{mealItem.description}</p>
                <span className={styles['meals-item-price']}>${mealItem.price}</span>
            </div>
            <MealItemForm meal={mealItem}/>
        </li>
    );
};

export default AvailableMealsItem;