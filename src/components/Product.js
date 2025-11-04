import { graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Product = ({ data }) => {

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
      gap: '20px',
      height: '100%',
      padding: '20px',
      textAlign: 'center'
    },
    p: {
      color: '#000'
    }
  }

  return (
    <main>
      <Header />
      <div style={styles.container}>
        <h1>{data.mdx.frontmatter.title}</h1>
        {data.mdx.frontmatter.image && (
          <GatsbyImage image={getImage(data.mdx.frontmatter.image)} alt={data.mdx.frontmatter.title} style={styles.img} />
        )}
        <p style={styles.p}><b>Preço:</b> R$ {data.mdx.frontmatter.price}</p>
        <p style={styles.p}><b>Descrição:</b> {data.mdx.body}</p>
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
        image {
          childImageSharp {
            gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`;

export const Head = () => (
  <>
    <title>Produto</title>
    <meta name="title" content="Produto" />
    <meta name="description" content="Informações do produto" />
  </>
)

export default Product;