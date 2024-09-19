import styles from "./Modal.module.scss";

type ModalBodyProps = {
    children: React.ReactNode;
};

const ModalBody = ({ children }: ModalBodyProps) => (
    <div className={styles.modalBody}>{children}</div>
);

export { ModalBody }