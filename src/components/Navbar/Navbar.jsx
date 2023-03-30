import { Cartwidget } from "../Cartwidget/Cartwidget";
import UrbanOutfitters from "../../assets/img/UrbanOutfitters.png";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={UrbanOutfitters} className="navbar__logo" alt="" />
            <div className="navbar__links">
                <li className="navbar__li">Remeras</li>
                <li className="navbar__li">Buzos</li>
                <li className="navbar__li">Jeans</li>
            </div>
            <div className="navbar__cartwidget">
                <Cartwidget />
            </div>
        </div>
    );
};
