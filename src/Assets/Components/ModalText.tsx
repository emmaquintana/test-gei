import styles from './Styles/ModalText.module.css'
import animations from './Animations/Animations.module.css';


type ModalTextProps = {
    content?: string;
    buttonContent?: string;
    close?: () => void;
    className?: string;
    modalStyles?: React.CSSProperties;
    btnStyles?: React.CSSProperties;
}

export default function ModalText({
    content,
    buttonContent = 'Cerrar',
    close,
    className
}: ModalTextProps) {

    return (
        <div className={`${styles.overlay} ${animations.fadeOutToIn}`}>
            <section className={`${styles.container} ${animations.fadeOutToInFromBottom} ${className}`}>
                <main className={`${styles.textContainer}`}>
                    {content}
                </main>
                <button onClick={close} className={styles.btn}>
                    {buttonContent}
                </button>
            </section>
        </div>
    );
}