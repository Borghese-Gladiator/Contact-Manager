import styles from './Card.module.css';

function Card({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_body}>
        {children}
      </div>
    </div>
  )
}

export default Card;