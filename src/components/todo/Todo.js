import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import React, { useState } from "react";

const tasks = [
    {
        value: false,
        label: "Non Complétée",
    },
    {
        value: true,
        label: "Complétée",
    },
];

function Todo({ todo, remove, update }) {
    const [isEditing, setIsEditing] = useState(false);
    const [taskName, setTaskName] = useState(todo.taskName);
    const [taskDescription, setTaskDescription] = useState(
        todo.taskDescription
    );
    const [taskCompleted, setTaskCompleted] = useState(todo.taskCompleted);
    const handleRemove = (evt) => {
        remove(evt.target.id);
    };
    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };
    const handleUpdate = (evt) => {
        evt.preventDefault();
        update(todo.id, taskName, taskDescription, taskCompleted);
        toggleFrom();
    };
    const handleChangeName = (evt) => {
        setTaskName(evt.target.value);
    };
    const handleChangeDescription = (evt) => {
        setTaskDescription(evt.target.value);
    };
    const handleChangeCompleted = () => {
        setTaskCompleted(!taskCompleted);
    };

    let result;
    if (isEditing) {
        result = (
            <div>
                <form onSubmit={handleUpdate}>
                    <div>
                        <TextField
                            id="task"
                            label="Nom de la tâche"
                            value={taskName}
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
                            value={taskDescription}
                            onChange={handleChangeDescription}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{ margin: 8, width: "40%" }}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select"
                            value={
                                taskCompleted ? "Complétée" : "Non Complétée"
                            }
                            onChange={handleChangeCompleted}
                            helperText="modifier l'Etat de tâche"
                            variant="outlined"
                            style={{ margin: 8 }}
                        >
                            {tasks.map((option) => (
                                <MenuItem
                                    key={option.label}
                                    value={
                                        taskCompleted === option.value &&
                                        option.label
                                    }
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            style={{ margin: 16 }}
                            variant="contained"
                            color="primary"
                            type="submit"
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        );
    } else {
        result = (
            <div>
                <tr
                    style={{
                        margin: "30px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <td style={{ fontWeight: "bold", width: "20%" }}>
                        {todo.taskName} :
                    </td>
                    <td style={{ width: "40%" }}>{todo.taskDescription}</td>
                    <td style={{ width: "20%" }}>
                        <Button
                            variant="contained"
                            color={todo.taskCompleted ? "green" : "secondary"}
                        >
                            {todo.taskCompleted ? "Complétée" : "Non Complétée"}
                        </Button>
                    </td>
                    <td style={{ width: "10%" }}>
                        <Button
                            id={todo.id}
                            color="secondary"
                            value="delete"
                            onClick={handleRemove}
                        >
                            Supprimer
                        </Button>
                    </td>
                    <td style={{ width: "10%" }}>
                        <Button
                            color="primary"
                            value="update"
                            onClick={toggleFrom}
                        >
                            Update
                        </Button>
                    </td>
                </tr>
            </div>
        );
    }
    return result;
}

export default Todo;
