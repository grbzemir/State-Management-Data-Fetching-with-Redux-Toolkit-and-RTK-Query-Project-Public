import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {

    const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation();
    // console.log(res);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    const handleAddProduct = async () => {

        try {

            const newProductData = {
                id: 1,
                title: "Amazing T-Shirt",
                description: "This is an amazing T-Shirt",
            };

            await addNewProduct(newProductData).unwrap();

        } catch (err) {
            console.log("Error adding new product", err);
        }

    }
    return (
        <div>

            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>

            <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
        </div>
    )
}

export default AddNewProduct
