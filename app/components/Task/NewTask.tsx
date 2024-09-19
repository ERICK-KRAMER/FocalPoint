"use client";

import { useRef } from 'react';
import styles from './NewTask.module.scss';
import { useTodo } from '@/app/context/todoContext';

type NewTaskProps = {
    setIsOpen: (isOpen: boolean) => void;
};

const NewTask = ({ setIsOpen }: NewTaskProps) => {
    const { addTodo } = useTodo();
    const todoRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todoRef.current != null) {
            addTodo(todoRef.current.value);
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.modal_container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.title}>Nova tarefa</h2>
                <label htmlFor="title" className={styles.label}>
                    Título
                </label>
                <input
                    type="text"
                    id="title"
                    className={styles.input}
                    placeholder="Digite"
                    ref={todoRef}

                />
                <div className={styles.buttons}>
                    <button type="button" className={styles.cancel} onClick={() => setIsOpen(false)}>
                        Cancelar
                    </button>
                    <button type="submit" className={styles.add}>
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    );
};

export { NewTask };
