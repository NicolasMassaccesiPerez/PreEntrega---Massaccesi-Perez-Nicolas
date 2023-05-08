import CarritoImg from "../../assets/img/cartwidget.png";
import "./Cartwidget.css";

export const Cartwidget = ({ onMouseEnter, onMouseLeave }) => {
    return (
        <div className="cartwidget" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div>
                <img src={CarritoImg} alt="" />
                <span>1</span>
            </div>
        </div>
    );
};
