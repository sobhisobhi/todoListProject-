import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { encryptWithAES } from "../utils/encrypt";

async function loginUser(email, password) {
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}

const validate = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = "Veuillez saisir votre mot de passe.";
    }
    if (!values.email) {
        errors.email = "Veuillez saisir un email valide";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Veuillez saisir un email valide";
    }
    return errors;
};

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const INITIAL_STATE = {};

const Login = ({ setToken }) => {
    const classes = useStyles();
    const [error, setError] = useState(INITIAL_STATE);

    const formik = useFormik({
        initialValues: {
            remember: true,
            password: "",
            email: "",
        },
        validate,
        onSubmit: async () => {
            const data = await loginUser(
                formik.values.email,
                formik.values.password
            );
            try {
                if (formik.values.remember && formik.values.email) {
                    localStorage.email = formik.values.email;
                    localStorage.password = encryptWithAES(
                        formik.values.password
                    );
                    localStorage.remember = formik.values.remember;

                    setToken(data);
                    window.location.reload("/home");
                }
            } catch (err) {
                setError(err);
            }
        },
    });
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Se connecter
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Identifiant (adresse e-mail)"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            helperText={
                                formik.touched.email ? formik.errors.email : ""
                            }
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            helperText={
                                formik.touched.password
                                    ? formik.errors.password
                                    : ""
                            }
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="remember"
                                    color="primary"
                                    checked={true}
                                />
                            }
                            label="Rester connecté(e)"
                        />
                        {error && (
                            <Typography color="error">
                                {error.message}
                            </Typography>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Se connecter
                        </Button>
                    </form>
                </div>
            </Container>
        </React.Fragment>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;
