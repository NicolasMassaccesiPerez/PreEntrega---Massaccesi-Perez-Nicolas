import React from "react";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <Card sx={{ width: 350, height: 440, boxShadow: "2px 4px 5px", transition: "0.2s", "&:hover": { transform: "scale(1.05)" } }}>
            <CardMedia sx={{ height: 240, backgroundSize: "contain" }} image={item.img} title="producto" />
            <hr />
            <CardContent
                sx={{
                    height: 120,
                    backgroundColor: "withe",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography gutterBottom variant="h5" component="div" textAlign={"center"} fontFamily={"revert"} fontSize={30}>
                    {item.title}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px" }}>
                <Link to={`/itemDetail/${item.id}`}>
                    <Button variant="contained" style={{ backgroundColor: "green" }} size="small" sx={{ textTransform: "none" }}>
                        Agregar al carrito{" "}
                    </Button>
                    <Button color="success" size="small" sx={{ textTransform: "none" }}>
                        Ver detalle
                    </Button>
                </Link>
                <Typography variant="subtitle1" textAlign={"center"}>
                    <b>${item.price}.-</b>
                </Typography>
            </CardActions>
        </Card>
    );
};

export default ItemCard;
