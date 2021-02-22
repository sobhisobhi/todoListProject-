import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import uuid from "uuid";

function NewTodoForm({ createTodo }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };
    const handleChangeDescription = (evt) => {
        setDescription(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = {
            id: uuid(),
            taskName: name,
            taskDescription: description,
            completed: false,
        };
        createTodo(newTodo);
        setName("");
        setDescription("");
    };

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <h1>Créer une nouvelle tâche </h1>
            <div>
                <TextField
                    id="task"
                    label="Nom de la tâche"
                    value={name}
                    onChange={handleChangeName}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8, width: "25%" }}
                />
                <TextField
                    id="task"
                    label="Description de la tâche en une ligne"
                    value={description}
                    onChange={handleChangeDescription}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8, width: "40%" }}
                />
                <Button
                    style={{ margin: 16 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Ajouter la tâche
                </Button>
            </div>
            {/*<input
                value={userInput.task}
                onChange={handleChange}
                id="task"
                type="text"
                name="task"
                placeholder="New Todo"
            />*/}
        </form>
    );
}

export default NewTodoForm;
