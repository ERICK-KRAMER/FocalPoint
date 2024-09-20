import React from 'react';
import { useTodo } from '@/app/context/todoContext';
import { Modal } from '../Modal/modal';

type RemoveTaskProps = {
    isOpen: boolean;
    setRemoveIsOpen: (isOpen: boolean) => void;
    selectedTaskId: number | null;
};

const RemoveTask: React.FC<RemoveTaskProps> = ({ isOpen, setRemoveIsOpen, selectedTaskId }) => {
    const { removeTodo } = useTodo();

    const handleDelete = () => {
        if (selectedTaskId !== null) {
            removeTodo(selectedTaskId);
            setRemoveIsOpen(false);
        }
    };

    return (
        <Modal.Root isOpen={isOpen}>
            <Modal.Header title="Deletar tarefa" />
            <Modal.Body>
                <p style={{
                    color: "#0000008A"
                }}>Tem certeza que você deseja deletar essa tarefa?</p>
            </Modal.Body>
            <Modal.Footer>
                <Modal.Button variant="secondary" onClick={() => setRemoveIsOpen(false)}>
                    Cancelar
                </Modal.Button>
                <Modal.Button variant="danger" onClick={handleDelete}>
                    Deletar
                </Modal.Button>
            </Modal.Footer>
        </Modal.Root>
    );
};

export { RemoveTask };