import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
    return (
        <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
            <Button variant="outlined" color="success" onClick={sumar}>
                +
            </Button>
            <h2 style={{ color: "black" }}>{counter}</h2>
            <Button variant="outlined" color="success" onClick={restar}>
                -
            </Button>
            <Button variant="contained" color="success" onClick={() => onAdd(counter)}>
                Add to cart
            </Button>
        </div>
    );
};

export default CounterPresentation;
