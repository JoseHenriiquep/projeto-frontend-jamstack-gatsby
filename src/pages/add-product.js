import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../index.css'

export default function AddProduct() {

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100%'
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      border: '1px solid #000',
      borderRadius: '10px',
      height: '400px',
      width: '400px',
      backgroundColor: '#a843a8'
    },
  }


  return(
    <main>
      <Header />
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <p>Adicione um produto</p>
          <form method="post" data-netlify="true" name="add-product">
            <input type="hidden" name="form-name" value="add-product"/>
            <input name="title" placeholder="Nome do produto" required minLength="3"/>
            <input type="number" name="price" placeholder="Preço" required min="1.00" step="0.01"/>
            <input name="image" placeholder="URL da imagem" required type="url"/>
            <textarea name="description" placeholder="Descrição" required minLength="10"/>
            <button type="submit">Criar Produto</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export const Head = () => (
  <>
    <title>Adicionar Produto</title>
    <meta name="title" content="Adicionar Produtos" />
    <meta name="description" content="Adicionar novos produtos." />
  </>
)