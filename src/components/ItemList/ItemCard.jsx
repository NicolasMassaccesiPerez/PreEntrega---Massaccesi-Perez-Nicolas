import React from "react";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <Card
            sx={{
                width: 350,
                height: 380,
                boxShadow: "2px 4px 5px",
                transition: "0.2s",
                "&:hover": { transform: "scale(1.05)", height: "450px" },
            }}
        >
            <CardMedia sx={{ height: 240, backgroundSize: "contain" }} image={item.img} title="producto" />
            <br />
            <CardContent
                sx={{
                    height: 80,
                    backgroundColor: "black",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                    fontFamily={"revert"}
                    fontSize={30}
                    color={"white"}
                >
                    {item.title}
                </Typography>
            </CardContent>
            <br />
            <CardActions style={{ display: "flex", justifyContent: "space-between", marginLeft: "10px", marginTop: "10px" }}>
                <Link to={`/itemDetail/${item.id}`}>
                    <Button variant="outlined" color="success" size="small" sx={{ textTransform: "none" }}>
                        Ver detalle 🡦
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
