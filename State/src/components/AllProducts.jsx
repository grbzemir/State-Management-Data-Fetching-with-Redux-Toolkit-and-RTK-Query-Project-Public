import React from 'react'
import { useGetAllProductQuery } from '../app/service/dummyData'

const AllProducts = () => {

    const { data, isError, isLoading } = useGetAllProductQuery();
    console.log(data);

    if (isError) {
        return <h1>OOhNoooo we got an error</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }



    return (
        <div>
            {data?.products.map((product) => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>
                </div>
            ))}
        </div>
    )
}

export default AllProducts
