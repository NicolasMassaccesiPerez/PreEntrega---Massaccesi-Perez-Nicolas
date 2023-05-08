import { Cartwidget } from "../Cartwidget/Cartwidget";
import UrbanOutfitters from "../../assets/img/UrbanOutfitters.png";
import { Outlet, Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
    const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

    const handleCartWidgetMouseEnter = () => {
        setIsCartDropdownOpen(true);
    };

    const handleCartWidgetMouseLeave = () => {
        setIsCartDropdownOpen(false);
    };
    return (
        <div className="navbar__cartwidget">
            <div>
                <div className="navbar">
                    <Link to="/">
                        {" "}
                        <img src={UrbanOutfitters} className="navbar__logo" alt="" />
                    </Link>
                    <ul className="navbar__links">
                        <NavLink to="/" className="navbar__li">
                            Todos
                        </NavLink>
                        <NavLink to="/category/buzos" className="navbar__li">
                            Buzos
                        </NavLink>
                        <NavLink to="/category/remeras" className="navbar__li">
                            Remeras
                        </NavLink>
                        <NavLink to="/category/pantalones" className="navbar__li">
                            Pantalones
                        </NavLink>
                    </ul>
                    <Cartwidget onMouseEnter={handleCartWidgetMouseEnter} onMouseLeave={handleCartWidgetMouseLeave} />
                </div>
                {isCartDropdownOpen && <div className="cart-dropdown open">{/* Contenido del menú desplegable */}</div>}
                <Outlet />
            </div>
        </div>
    );
};
