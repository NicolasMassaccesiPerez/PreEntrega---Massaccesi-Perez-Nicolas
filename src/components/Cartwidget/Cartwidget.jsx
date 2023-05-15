import "./Cartwidget.css";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cartwidget = ({ onMouseEnter, onMouseLeave }) => {
    const { getTotalQuantity } = useContext(CartContext);

    let total = getTotalQuantity();
    return (
        <Link to="/cart">
            <div className="container-cart" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <BsFillBagFill
                    style={{
                        fontSize: "2rem",
                        color: "beige",
                    }}
                />
                <div className="bubble-counter">
                    <span>{total}</span>
                </div>
            </div>
        </Link>
    );
};

export default Cartwidget;
