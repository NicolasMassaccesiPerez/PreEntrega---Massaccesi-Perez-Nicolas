import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const handleFieldChange = (event) => {
        handleChange(event);
        validarCamposCompletos();
    };

    const validarCamposCompletos = () => {
        const { nombre, email, phone } = values;
        if (nombre && email && phone) {
            setShowSubmitButton(true);
        } else {
            setShowSubmitButton(false);
        }
    };

    return (
        <div style={{ paddingTop: "100px" }}>
            <h2 style={{ color: "black", marginBottom: "30px" }}>Completa el formulario de compra con tus datos:</h2>
            <form action="" onSubmit={handleSubmit}>
                <Grid container spacing={2} flex justifyContent={"center"}>
                    <Grid item xs={11} sm={7}>
                        <TextField
                            id="outlined-basic"
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            name="nombre"
                            onChange={handleFieldChange}
                            error={errors.nombre ? true : false}
                            helperText={errors.nombre}
                        />
                    </Grid>
                    <Grid item xs={11} sm={7}>
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            onChange={handleFieldChange}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={11} sm={7}>
                        <TextField
                            id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            onChange={handleFieldChange}
                            error={errors.phone ? true : false}
                            helperText={errors.phone}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        {showSubmitButton && (
                            <Button type="submit" variant="contained" sx={{ marginTop: 2, marginBottom: 24 }}>
                                Enviar Datos
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FormCheckout;
