import styles from "./Modal.module.scss";

type ModalFooterProps = {
    children: React.ReactNode;
};

const ModalFooter = ({ children }: ModalFooterProps) => (
    <div className={styles.modalFooter}>{children}</div>
);

export { ModalFooter }