import styles from './Styles/ModalText.module.css'
import animations from './Animations/Animations.module.css';


type ModalTextProps = {
    content?: string;
    buttonContent?: string;
    close?: () => void;
    className?: string;
    modalStyles?: React.CSSProperties;
    btnStyles?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNode[]
}

export default function ModalText({
    content,
    buttonContent = 'Cerrar',
    close,
    className,
    children
}: ModalTextProps) {

    return (
        <div className={`${styles.overlay} ${animations.fadeOutToIn}`}>
            <section className={`${styles.container} ${animations.fadeOutToInFromBottom} ${className}`}>
                <main className={`${styles.textContainer}`}>
                    {children ?? content}
                </main>
                <button onClick={close} className={styles.btn}>
                    {buttonContent}
                </button>
            </section>
        </div>
    );
}