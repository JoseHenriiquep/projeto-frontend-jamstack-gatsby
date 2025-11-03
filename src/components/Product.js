import { graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import React from 'react';

const Product = ({ data }) => {

  return (
    
    <main>
      <Header />
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>Preço: R$ {data.mdx.frontmatter.price}</p>
        {data.mdx.frontmatter.image && (
          <img src={data.mdx.frontmatter.image} alt={data.mdx.frontmatter.title} style={{ maxWidth: "300px" }} />
        )}
        <div>
          <p>{data.mdx.body}</p>
        </div>
      <Footer />
    </main>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        price
        image
      }
      body
    }
  }
`;

export default Product;