import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../index.css'
import ProductList from "../components/ProductList"

export default function Products() {

  return (
    <main>
      <Header/>
      <ProductList />
      <Footer/>
    </main>
  )
}
