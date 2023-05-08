import Carousel from "../Carousel/Carousel";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { database } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {
        let consulta;
        const itemCollection = collection(database, "products");

        if (categoryName) {
            const itemsCollectionFiltered = query(itemCollection, where("category", "==", categoryName));
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
    }, [categoryName]);

    return (
        <div>
            <Carousel />
            <ItemList items={items} />
        </div>
    );
};
