import UrbanOutfitters from "../../assets/img/UrbanOutfitters.png";
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import "./Navbar.css";
import { database } from "../../firebaseConfig";
import Cartwidget from "../Cartwidget/Cartwidget";
import CartContainer from "../Cart/CartContainer";

export const Navbar = () => {
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

    const handleCartWidgetMouseEnter = () => {
        setIsCartDropdownOpen(true);
    };

    const handleCartWidgetMouseLeave = () => {
        setIsCartDropdownOpen(false);
    };
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesCollection = collection(database, "categories");
        getDocs(categoriesCollection)
            .then((res) => {
                let categoriesResult = res.docs.map((category) => {
                    return {
                        ...category.data(),
                        id: category.id,
                    };
                });
                setCategories(categoriesResult);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="navbar__cartwidget">
            <div className="navbar">
                <Link to="/">
                    {" "}
                    <img src={UrbanOutfitters} className="navbar__logo" alt="" />
                </Link>

                <div className="navbar__links">
                    {categories.map((category) => {
                        return (
                            <Link key={category.id} to={category.path} className="navbar__li">
                                {category.title}
                            </Link>
                        );
                    })}
                </div>

                <Cartwidget onMouseEnter={handleCartWidgetMouseEnter} onMouseLeave={handleCartWidgetMouseLeave} />
            </div>
            {isCartDropdownOpen && (
                <div className="cart-dropdown open">
                    <div style={{ width: `50` }}>
                        <h2
                            style={{
                                color: "white",
                                fontSize: "3em",
                                textAlign: "center",
                                borderBottom: "1px solid white",
                                paddingBottom: "5px",
                            }}
                        >
                            Carrito de Compras
                        </h2>
                        <CartContainer />
                    </div>
                </div>
            )}
            <Outlet />
        </div>
    );
};
