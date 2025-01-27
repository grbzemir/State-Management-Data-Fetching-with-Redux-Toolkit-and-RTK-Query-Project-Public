import React from 'react'
import PropTypes from 'prop-types';
import { useDeleteProductMutation } from '../app/service/dummyData'

const DeleteProduct = ({ productId }) => {

    const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation();
    // console.log(res);

    if (isLoading) {

        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error</h1>
    }

    const handleDeleteProduct = async () => {

        try {

            await deleteProduct(productId);

        } catch (err) {
            console.error("Error deleting product", err);
        }

    }


    return (

        <div>
            <h1>{data?.title ? `${data.title} successfully deleted` : ''}</h1>
            <div>
                <button onClick={handleDeleteProduct}>Delete Product</button>
            </div>
        </div>
    )
}

DeleteProduct.propTypes = {
    productId: PropTypes.number.isRequired,
};

export default DeleteProduct
