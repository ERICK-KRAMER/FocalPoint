"use client";

import React, { useRef } from 'react';
import { useTodo } from '@/app/context/todoContext';
import { Modal } from '../Modal/modal';

type NewTaskProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const NewTask: React.FC<NewTaskProps> = ({ isOpen, setIsOpen }) => {
    const { addTodo } = useTodo();
    const todoRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todoRef.current && todoRef.current.value.trim() !== "") {
            addTodo(todoRef.current.value);
            setIsOpen(false);
        }
    };

    return (
        <Modal.Root isOpen={isOpen} >
            <form onSubmit={handleSubmit}>
                <Modal.Header title="Nova tarefa" />
                <Modal.Body>
                    <Modal.Input label='Text' ref={todoRef} placeholder='' />
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Button variant="secondary" onClick={() => setIsOpen(false)}>
                        Cancelar
                    </Modal.Button>
                    <Modal.Button variant="primary" onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent)}>
                        Adicionar
                    </Modal.Button>
                </Modal.Footer>
            </form>
        </Modal.Root>
    );
};

export { NewTask };