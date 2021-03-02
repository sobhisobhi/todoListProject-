import React, { useState } from "react";
import uuid from "uuid";

import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const initialList = [
    {
        id: uuid(),
        taskName: "Envoyer un email",
        taskDescription: "A toute l'équipe",
        taskCompleted: false,
    },
    {
        id: uuid(),
        taskName: "Faire l'exercice",
        taskDescription: "React only",
        taskCompleted: true,
    },
];

function TodoList() {
    const [todos, setTodos] = useState(initialList);

    const create = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const remove = (id) => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };

    const update = (
        id,
        updtedTaskName,
        updtedTaskDescription,
        updtedTaskCompleted
    ) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    taskName: updtedTaskName,
                    taskDescription: updtedTaskDescription,
                    taskCompleted: updtedTaskCompleted,
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    const todosList = todos.map((todo) => (
        <Todo update={update} remove={remove} key={todo.id} todo={todo} />
    ));

    return (
        <div className="TodoList">
            <h1>Liste des tâches</h1>
            <ul>{todosList}</ul>
            <NewTodoForm createTodo={create} />
        </div>
    );
}

export default TodoList;
