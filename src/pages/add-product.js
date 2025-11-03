import React, { useState } from 'react'
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

  const [form, setForm] = useState({
    title: '',
    price: '',
    imageUrl: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/create-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      alert(data.message);
      
    } catch (error) {
      console.error(error);
      alert('Falha ao enviar o produto.');
    }

    setForm({
      title: '',
      price: '',
      imageUrl: '',
      description: '',
    });
  };

  return(
    <main>
      <Header />
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <p>Adicione um produto</p>
          <form onSubmit={handleSubmit} method='post'>
            <input name="title" placeholder="Nome do produto" value={form.title} onChange={handleChange} required/>
            <input name="price" placeholder="Preço" value={form.price} onChange={handleChange} required/>
            <input name="imageUrl" placeholder="URL da imagem" value={form.imageUrl} onChange={handleChange} required/>
            <textarea name="description" placeholder="Descrição" value={form.description} onChange={handleChange} required/>
            <button type="submit">Criar Produto</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}