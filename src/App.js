import "./App.css";

import React from "react";

import TodoList from "./todo/TodoList";

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    );
}
/*
import { Button, Card, Form } from "react-bootstrap";

function Todo({ todo, index, updateTodo, removeTodo }) {
    return (
        <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
                {todo.text}
            </span>
            <div>
                <Button onClick={() => updateTodo(index)}>Update</Button>{" "}
                <Button onClick={() => removeTodo(index)}>Supprimer</Button>
            </div>
        </div>
    );
}

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>
                    <b>Add Todo</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    className="input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Add new todo"
                />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function App() {
    const [todos, setTodos] = React.useState([
        {
            text: "This is a sampe todo",
            isDone: false,
        },
    ]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const updateTodo = (id, updtedTask) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updtedTask };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div className="App">
            <div className="container">
                <h1 className="text-center mb-4">Todo List</h1>
                <FormTodo addTodo={addTodo} />
                <div>
                    {todos.map((todo, index) => (
                        <Card key={todo.id}>
                            <Card.Body>
                                <Todo
                                    index={index}
                                    toggleComplete={toggleComplete}
                                    todo={todo}
                                    updateTodo={updateTodo}
                                    removeTodo={removeTodo}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}*/

export default App;
