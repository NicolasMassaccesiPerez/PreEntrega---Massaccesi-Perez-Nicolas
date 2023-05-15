import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

const Cart = ({ cart, clearCartWithAlert, deleteProductById, total, navigate }) => {
    return (
        <div>
            <div className="cart-container">
                <div className="container-items">
                    {cart.map((item) => {
                        return (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt="" />
                                <div className="cart-item-info">
                                    <h2>{item.name}</h2>
                                    <h2>${item.price}.-</h2>
                                    <h2>Unidades: {item.quantity}</h2>
                                </div>
                                <BsFillTrashFill color="grey" onClick={() => deleteProductById(item.id)} />
                            </div>
                        );
                    })}
                </div>
                <div className="cart-info">
                    <hr />
                    <h3>Precio total: {total}</h3>
                    <hr />
                    {cart.length > 0 ? (
                        <div className="btn-cart">
                            <Button variant="contained" color="success" onClick={() => navigate("/checkout")}>
                                Comprar
                            </Button>
                            <Button color="error" onClick={clearCartWithAlert} variant="text">
                                Vaciar carrito
                            </Button>
                        </div>
                    ) : (
                        <Link to="/">
                            <Button variant="contained">Agrega productos</Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
