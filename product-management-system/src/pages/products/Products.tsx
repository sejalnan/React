import { Link } from "react-router-dom";
import type Product from "./interface/product";
import { Button, Card, CardContent, CardMedia, Box } from "@mui/material";
import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState<Product[]>(
        JSON.parse(localStorage.getItem("products") || "[]")
    );

    const deleteProduct = (id: number) => {
        const updatedProducts = products.filter(p => p.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    return (
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {products.map((product) => (
                <Card key={product.id} sx={{ width: 250, p: 1 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.name}
                    />

                    <CardContent>
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <p>Category: {product.category}</p>
                    </CardContent>

                    <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
                        <Button
                            component={Link}
                            to={`/edit-product/${product.id}`}
                            variant="outlined"
                            size="small"
                        >
                            Edit
                        </Button>

                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => deleteProduct(product.id)}
                        >
                            Delete
                        </Button>
                    </Box>
                </Card>
            ))}
        </div>
    );
};

export default Products;
