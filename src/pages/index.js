import React from "react"
import { graphql, Link } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../index.css'

export default function index() {

  return (
    <main>
      <Header/>
      <Footer/>
    </main>
  )
}
