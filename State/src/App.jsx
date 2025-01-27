import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import AllProducts from './components/AllProducts'
import SpecificProduct from './components/SpecificProduct'
import AddNewProduct from './components/AddNewProduct'
import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProduct'


function App() {


  return (
    <>
      {/* <Counter /> */}
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={5} /> */}
      <DeleteProduct productId={5} />
    </>
  )
}

export default App
