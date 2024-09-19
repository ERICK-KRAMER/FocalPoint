import styles from './Modal.module.scss';

type ModalProps = {
    isOpen: boolean;
    children: React.ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    );
};

export { Modal }