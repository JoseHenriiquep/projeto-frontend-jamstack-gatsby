import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import '../index.css'

export default function Header() {

  const styles = {
    link: {
      textDecoration: 'none',
      color: '#fff'
    }
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(
    <header>
      <p>{data.site.siteMetadata.title}</p>
      <nav>
        <ul>
          <li>
            <Link style={styles.link} to='/products'>Produtos</Link>
          </li>
          <li>
            <Link style={styles.link} to='/add-product'>Adicionar Produto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}