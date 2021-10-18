import { useState } from 'react'
import Header from "./Header"
import Product from './Product'
import './App.css'

function App() {
  const [cartProducts, setCartProducts] = useState([])
  return (
    <>
      <Header cartProducts={cartProducts} setCartProducts={setCartProducts}></Header>
      <Product cartProducts={cartProducts} setCartProducts={setCartProducts}></Product>
    </>
  )
}

export default App
