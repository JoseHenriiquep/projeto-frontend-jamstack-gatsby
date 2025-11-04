import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function ProductList() {

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      height: '100%',
      padding: '20px'
    },
    card: {
      border: '1px solid #000',
      borderRadius: '10px',
      backgroundColor: '#a843a8',
      padding: '10px'
    },
    image: {

    },
    h3: {
      textAlign: 'center',
      color: '#fff',
      textDecoration: 'none',
    }
  }

  const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              image {
                childImageSharp {
                  gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
                }
              }
            }
            id
            excerpt
          }
        }
      }
    `)

  return(
    <div style={styles.container}>
      {data.allMdx.nodes.map((node) => (
        <div style={styles.card} key={node.id}>
          <Link to={`/products/${node.frontmatter.slug}`}>
            <GatsbyImage style={styles.image} image={getImage(node.frontmatter.image)}/>
            <h3 style={styles.h3}>{node.frontmatter.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}