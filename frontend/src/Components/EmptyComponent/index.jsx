import styles from "./EmptyComponent.module.css";

const EmptyComponent = ({ message = "Cannot find any data :(" }) => {
  return (
    <div className={styles.emptyComponentContainer}>
      <div className={styles.emptyContent}>
        <div className={styles.iconWrapper}>
          <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className={styles.emptyMessage}>{message}</h2>
        <p className={styles.emptyHint}>Try adjusting your filters or add new items</p>
      </div>
    </div>
  );
};

export default EmptyComponent;