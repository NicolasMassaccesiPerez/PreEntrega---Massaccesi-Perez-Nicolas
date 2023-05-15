import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
    return (
        <div className="itemDetail">
            <div>
                <img src={product.img} className="imgDetail" alt="" />
            </div>
            <div className="info-titulos">
                <h2 className="titulos">Producto: {product.title}</h2>
                <h3 className="titulos">Descripción: {product.description}</h3>
                <h4 className="titulos">Precio: ${product.price}.-</h4>
                {product.stock > 0 ? (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                        <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} />
                    </div>
                ) : (
                    <h4 style={{ color: "red", marginTop: "20px" }}>No hay stock</h4>
                )}

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/">
                        <Button variant="contained" color="error" style={{ marginTop: "20px" }}>
                            Back
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
