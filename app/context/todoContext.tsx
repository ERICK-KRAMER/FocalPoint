"use client";

import { createContext, useContext, useEffect, useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
}

const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Date.now(), text, completed: false }
        ]);
    };

    const removeTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContextProvider, useTodo };