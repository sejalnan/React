import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import type Product from "./interface/product";

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<Product>({
        id: Number(id),
        name: "",
        price: 0,
        category: "",
        image: "",
    });


    useEffect(() => {
        const existingProducts: Product[] =
            JSON.parse(localStorage.getItem("products") || "[]");

        const foundProduct = existingProducts.find(
            (data) => data.id === Number(id)
        );

        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setProduct({
            ...product,
            [name]: name === "price" ? Number(value) : value,
        });
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const existingProducts: Product[] =
            JSON.parse(localStorage.getItem("products") || "[]");

        const updatedProducts = existingProducts.map((p) =>
            p.id === product.id ? product : p
        );

        localStorage.setItem("products", JSON.stringify(updatedProducts));

    };

    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={handleSubmit} className="form">
                <TextField
                    label="Product Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    label="Product Price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    label="Product Category"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    label="Product Image"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <Button type="submit" variant="contained" fullWidth>
                    Update Product
                </Button>
            </form>
        </div>
    );
};

export default EditProduct;

