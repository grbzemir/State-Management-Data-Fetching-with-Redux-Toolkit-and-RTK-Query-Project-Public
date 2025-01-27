import React from 'react'
import PropTypes from 'prop-types';
import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = ({ productId }) => {

    const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation();
    console.log(data);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    const handleUpdateProduct = async () => {

        try {

            const updatedProductData = {

                title: "Title Updated",

            };

            await updateProduct(
                {
                    id: productId,
                    updatedProduct: updatedProductData,
                });

        } catch (err) {
            console.log("Error adding new product", err);
        }

    }
    return (

        <div>

            <h1>{data?.title}</h1>
            <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
        </div>
    )
}
UpdateProduct.propTypes = {
    productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};


export default UpdateProduct

