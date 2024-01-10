"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import ModalText from '@/Assets/Components/ModalText';
import randomChangePosition from '@/Assets/Util/RandomChangePosition';

export default function Home() {

  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Verifies and re set button position after window's resize
      if (noBtnRef.current) {
        randomChangePosition(noBtnRef);
      }
    };

    if (flag) {
      window.addEventListener('resize', handleResize);
    }
    
    // event listener clean
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [flag]);

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
          onMouseOver={(e) => {
            randomChangePosition(noBtnRef, e);
            setFlag(1);
          }}
          onClick={(e) => {
            randomChangePosition(noBtnRef, e);
            setFlag(1);
          }}
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
