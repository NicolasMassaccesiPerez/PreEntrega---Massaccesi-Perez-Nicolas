import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import FormCheckout from "./FormCheckout";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";

export const FormCheckoutContainer = () => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    const checkoutFn = (data) => {
        let total = getTotalPrice();

        let dataOrder = {
            buyer: data,
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(database, "orders");
        addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

        cart.map((product) =>
            updateDoc(doc(database, "products", product.id), {
                stock: product.stock - product.quantity,
            })
        );

        clearCart();
    };

    const { handleSubmit, handleChange, errors, values } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            phone: null,
        },
        onSubmit: checkoutFn,
        validationSchema: Yup.object().shape({
            nombre: Yup.string()
                .required("este campo es obligatorio")
                .min(3, "el nombre debe tener al menos 3 caracteres")
                .max(10, "el nombre no puede superar los 10 caracteres"),
            email: Yup.string().email("El campo debe ser un email").required("este campo es obligatorio"),
            phone: Yup.number().required("este campo es obligatorio"),
        }),
        validateOnChange: false,
    });

    return (
        <div
            style={{
                backgroundColor: "white",
                height: "600px",
                margin: "auto auto",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <img
                src="https://res.cloudinary.com/dwavbmsb2/image/upload/v1684184380/GRACIAS_POR_TU_COMPRA-removebg-preview_z3ns7m.png"
                alt=""
            />
            {orderId ? (
                <h2 style={{ color: "black", padding: "150px" }}>
                    Gracias por tu compra! <br /> a continuacion te vamos a dar el codigo de orden, guardalo bien ! <br /> <br /> Codigo:{" "}
                    {orderId}{" "}
                </h2>
            ) : (
                <FormCheckout errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} values={values} />
            )}
        </div>
    );
};
