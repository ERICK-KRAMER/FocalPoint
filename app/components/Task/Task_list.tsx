"use client";

import { useState } from 'react';
import styles from './TaskList.module.scss';
import { Trash2 } from 'lucide-react';
import { NewTask } from './NewTask';
import { useTodo } from '@/app/context/todoContext';
import { RemoveTask } from './removeTask';

const TaskList = () => {
    const [addIsOpen, setAddIsOpen] = useState(false);
    const [removeIsOpen, setRemoveIsOpen] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
    const { todos, toggleTodo } = useTodo();

    const activeTasks = todos.filter(task => !task.completed);
    const completedTasks = todos.filter(task => task.completed);

    const handleToggleTask = (id: number) => {
        toggleTodo(id);
    };

    return (
        <div className={styles.taskList_container}>
            <div className={styles.taskList} style={todos.length <= 0 ? { display: "none" } : undefined}>
                {activeTasks.length > 0 && (
                    <>
                        <h2 className={styles.subtitle}>Suas tarefas de hoje</h2>
                        <ul className={styles.list}>
                            {activeTasks.map(task => (
                                <li key={task.id} className={styles.task}>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleToggleTask(task.id)}
                                    />
                                    <span>{task.text}</span>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => {
                                            setSelectedTaskId(task.id);
                                            setRemoveIsOpen(true);
                                        }}
                                    >
                                        <Trash2 />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {completedTasks.length > 0 && (
                    <>
                        <h3 className={styles.subtitle}>Tarefas finalizadas</h3>
                        <ul className={styles.list}>
                            {completedTasks.map(task => (
                                <li key={task.id} className={`${styles.task} ${styles.completed}`}>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleToggleTask(task.id)}
                                    />
                                    <span>{task.text}</span>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => {
                                            setSelectedTaskId(task.id);
                                            setRemoveIsOpen(true);
                                        }}
                                    >
                                        <Trash2 />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>

            <button className={styles.addButton} onClick={() => setAddIsOpen(true)}>
                Adicionar nova tarefa
            </button>

            {addIsOpen && <NewTask setIsOpen={setAddIsOpen} isOpen={addIsOpen} />}
            {removeIsOpen && <RemoveTask setRemoveIsOpen={setRemoveIsOpen} selectedTaskId={selectedTaskId} isOpen={removeIsOpen} />}
        </div>
    );
};

export { TaskList };
