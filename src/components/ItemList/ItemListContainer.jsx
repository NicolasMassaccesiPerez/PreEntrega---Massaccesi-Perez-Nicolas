import Carousel from "../Carousel/Carousel";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { database } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        let consulta;
        const itemCollection = collection(database, "products");

        if (category) {
            const itemsCollectionFiltered = query(itemCollection, where("category", "==", category));
            consulta = itemsCollectionFiltered;
        } else {
            consulta = itemCollection;
        }

        getDocs(consulta)
            .then((res) => {
                const products = res.docs.map((product) => {
                    return {
                        ...product.data(),
                        id: product.id,
                    };
                });

                setItems(products);
            })

            .catch((err) => console.log(err));
    }, [category]);

    return (
        <div>
            <Carousel />

            {items.length === 0 ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircleLoader color="green" size={60} />
                </div>
            ) : (
                <ItemList items={items} />
            )}
        </div>
    );
};
