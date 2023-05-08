import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                minHeight: "50vh",
                padding: "40px",
                gap: "30px",
                backgroundImage: `url("https://res.cloudinary.com/dwavbmsb2/image/upload/v1682694573/1354a12c7175b5ce5dfd8b729005ab2d_lo0ke5.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {items.map((item) => {
                return <ItemCard item={item} key={item.id} />;
            })}
        </div>
    );
};

export default ItemList;
