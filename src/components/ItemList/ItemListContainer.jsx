import Carousel from "../Carousel/Carousel";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        const productosFiltered = products.filter((prod) => prod.category === category);

        const tarea = new Promise((resolve, reject) => {
            resolve(category ? productosFiltered : products);
        });

        tarea.then((res) => setItems(res)).catch((error) => console.log(error));
    }, [category]);

    return (
        <div>
            <Carousel />
            <ItemList items={items} />
        </div>
    );
};
