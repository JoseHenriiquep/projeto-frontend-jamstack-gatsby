import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'

export default function ProductList() {

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      height: '100%',
    }
  }

  const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
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
        <div key={node.id}>
          <h3>
            <Link to={`/products/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
            </h3>
        </div>
      ))}
    </div>
  )
}