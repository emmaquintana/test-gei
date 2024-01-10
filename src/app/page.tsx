"use client"

import { useState } from 'react';
import styles from './page.module.css';
import ModalText from '@/Assets/Components/ModalText';

export default function Home() {    
  
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);    

  return (    
    <section className={styles.section}>
      <span className={`${styles.logo} ${styles.text} ${styles.question}`}>¿🏳️‍🌈?</span>
      <h2 className={`${styles.text} ${styles.question}`}>
        ¿Eres gei?
      </h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => setModalIsDisplayed(!modalIsDisplayed)}>Si 🏳️‍🌈</button>
        <button className={styles.button}>Ño 🤮</button>
      </div>      
      {modalIsDisplayed && 
        <ModalText 
          content='jajaja re trolx sos. sabido era'
          close={() => setModalIsDisplayed(false)}
        />
      }
    </section>
  )
}
