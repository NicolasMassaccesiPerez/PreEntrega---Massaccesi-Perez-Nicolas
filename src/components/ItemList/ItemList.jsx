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
                gap: "10px",
                backgroundImage: `url("https://res.cloudinary.com/dwavbmsb2/image/upload/v1682457379/Urban_landscape_fence_sv3fan.webp")`,
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
