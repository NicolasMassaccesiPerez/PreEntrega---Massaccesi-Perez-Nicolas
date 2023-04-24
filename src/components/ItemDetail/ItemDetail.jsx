import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
    return (
        <div className="itemDetail">
            <img src={product.img} className="imgDetail" alt="" />
            <h2 className="titulos">{product.title}</h2>
            <h2 className="titulos">{product.description}</h2>
            <h2 className="titulos">${product.price}.-</h2>
            <Link to="/">
                <Button variant="outlined">Volver al home</Button>
            </Link>
        </div>
    );
};
