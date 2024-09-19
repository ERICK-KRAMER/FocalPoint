import styles from "./Modal.module.scss";

type ModalHeaderProps = {
    title: string;
};

const ModalHeader = ({ title }: ModalHeaderProps) => (
    <h2 className={styles.modalTitle}>{title}</h2>
);

export { ModalHeader };