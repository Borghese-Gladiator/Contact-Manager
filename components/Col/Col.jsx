import styles from './Col.module.css'

const Col = ({ children }) => (
  <div className={styles.custom_col}>
    {children}
  </div>
);

export default Col;