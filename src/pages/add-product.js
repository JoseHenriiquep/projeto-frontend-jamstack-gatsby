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
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (form.title.length < 3) return 'O nome do produto deve conter mais de 3 caracteres.';
    if (isNaN(form.price)) return 'Informe um preço válido.';
    if (!form.image.startsWith('http'))
      return 'Informe uma URL de imagem válida.';
    if (form.description.length < 10)
      return 'A descrição deve ter pelo menos 10 caracteres.';
    return null; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     const error = validateForm();
      if (error) {
        alert(error);
        return;
      }

    alert('Formulário enviado')

    setForm({
      title: '',
      price: '',
      image: '',
      description: '',
    });
  };

  return(
    <main>
      <Header />
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <p>Adicione um produto</p>
          <form onSubmit={handleSubmit} method='POST' data-netlify="true" data-netlify-honeypot='bot-field'>
            <input type="hidden" name="form-name" value="add-product" />
            <input name="title" placeholder="Nome do produto" value={form.title} onChange={handleChange} required/>
            <input name="price" placeholder="Preço" value={form.price} onChange={handleChange} required/>
            <input name="image" placeholder="URL da imagem" value={form.image} onChange={handleChange} required/>
            <textarea name="description" placeholder="Descrição" value={form.description} onChange={handleChange} required/>
            <button type="submit">Criar Produto</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}