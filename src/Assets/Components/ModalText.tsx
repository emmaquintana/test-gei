import styles from './Styles/ModalText.module.css'


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
        <div className={styles.overlay}>
            <section className={`${styles.container} ${className}`}>
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