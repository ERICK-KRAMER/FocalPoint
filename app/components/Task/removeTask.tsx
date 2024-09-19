"use client";

import { useTodo } from '@/app/context/todoContext';
import styles from './removeTask.module.scss';

type RemoveTaskProps = {
    setRemoveIsOpen: (isOpen: boolean) => void;
    selectedTaskId: number | null;
};

const RemoveTask = ({ setRemoveIsOpen, selectedTaskId }: RemoveTaskProps) => {

    const { removeTodo } = useTodo();

    const handleCancel = () => {
        setRemoveIsOpen(false);
    };

    const handleDelete = () => {
        if (selectedTaskId !== null) {
            removeTodo(selectedTaskId);
        }
        setRemoveIsOpen(false);
    };

    return (
        <div className={styles.deleteTaskModal}>
            <div className={styles.modalContent}>
                <h2>Deletar tarefa</h2>
                <p>Tem certeza que você deseja deletar essa tarefa?</p>
                <div className={styles.buttons}>
                    <button className={styles.cancelButton} onClick={handleCancel}>
                        Cancelar
                    </button>
                    <button className={styles.deleteButton} onClick={handleDelete}>
                        Deletar
                    </button>
                </div>
            </div>
        </div>
    );
};

export { RemoveTask };
