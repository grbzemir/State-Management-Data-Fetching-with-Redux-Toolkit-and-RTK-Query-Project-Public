import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = () => {

    const [updatedProduct, { data, error, isLoading }] = useUpdateProductMutation();
    // console.log(res);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    const handleUpdateProduct = async () => {

        try {

            const updatedProductData = {
                id: 1,
                title: "Amazing T-Shirt",
                description: "This is an amazing T-Shirt",
            };

            await updatedProduct(updatedProductData).unwrap();

        } catch (err) {
            console.log("Error adding new product", err);
        }

    }
    return (


        <div>
            UpdateProduct
        </div>
    )
}

export default UpdateProduct
