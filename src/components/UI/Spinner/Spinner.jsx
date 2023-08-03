import styles from './Spinner.module.css';

const Spinner = props => {
  const additionalClasses = props.className ?? '';
  return (
    <div className={`${styles.container} ${additionalClasses}`}> 
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner; 