"use client"

import { useRef, useState } from 'react';
import styles from './page.module.css';
import ModalText from '@/Assets/Components/ModalText';
import randomChangePosition from '@/Assets/Util/RandomChangePosition';

export default function Home() {

  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const noBtnRef = useRef<HTMLButtonElement>(null);  

  return (
    <section className={styles.section}>
      <span className={`${styles.logo} ${styles.text} ${styles.question}`}>¿🏳️‍🌈?</span>
      <h2 className={`${styles.text} ${styles.question}`}>
        ¿Eres gei?
      </h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => setModalIsDisplayed(true)}>Si 🏳️‍🌈</button>
        <button 
          className={styles.button} 
          onMouseOver={() => randomChangePosition(noBtnRef)} 
          onClick={() => randomChangePosition(noBtnRef)} 
          ref={noBtnRef}
        >
          Ño 🤮
        </button>
      </div>
      {modalIsDisplayed &&
        <ModalText
          content='jajaja re trolx sos. sabido era, bellx'
          buttonContent='Cerrar'
          close={() => setModalIsDisplayed(false)}
        />
      }
    </section>
  )
}
