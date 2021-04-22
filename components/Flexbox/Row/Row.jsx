import styles from './Row.module.css'

const Row = ({ children }) => (
  <div className={styles.custom_row}>
    {children}
  </div>
);

export default Row;