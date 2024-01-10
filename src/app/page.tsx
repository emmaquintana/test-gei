import styles from './page.module.css';

export default function Home() {    
  
  return (    
    <section className={styles.section}>
      <span className={`${styles.logo} ${styles.text} ${styles.question}`}>¿🏳️‍🌈?</span>
      <h2 className={`${styles.text} ${styles.question}`}>
        ¿Eres gei?
      </h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Si 🏳️‍🌈</button>
        <button className={styles.button}>Ño 🤮</button>
      </div>      
    </section>
  )
}
