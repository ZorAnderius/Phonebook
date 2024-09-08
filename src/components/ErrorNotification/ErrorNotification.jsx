import styles from './ErrorNotification.module.css';

const ErrorNotification = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorText}>
        <p data-name="Ooops!!!">Ooops!!!</p>
        <p data-name="Something went wrong. Please try again later.">
          Something went wrong. Please try again later.
        </p>
      </div>
      <div className={styles.frameError}></div>
    </div>
  );
};

export default ErrorNotification;
