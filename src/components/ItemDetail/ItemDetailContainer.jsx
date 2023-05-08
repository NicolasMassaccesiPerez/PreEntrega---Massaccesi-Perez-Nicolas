import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { database } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const itemCollection = collection(database, "products");
        const refDoc = doc(itemCollection, id);
        getDoc(refDoc)
            .then((res) =>
                setProduct({
                    ...res.data(),
                    id: res.id,
                })
            )
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};
