import React, { useState } from "react";
import uuid from "uuid";

import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: uuid(),
            taskName: "task 10",
            taskDescription: "description 10",
            taskCompleted: false,
        },
        {
            id: uuid(),
            taskName: "task 2",
            taskDescription: "description 2",
            taskCompleted: true,
        },
    ]);

    const create = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const remove = (id) => {
        const newTodos = [...todos];
        newTodos.splice(id, 1);
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
