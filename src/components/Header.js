import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'


export default function Header() {

  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#a843a8',
      height: '50px',
      padding: '10px',
      color: '#fff'
    },
    ul: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      listStyle: 'none'
    },
    p: {
      fontSize: '1.5rem'
    },
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
    <header style={styles.header}>
      <p style={styles.p}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul style={styles.ul}>
          <li>
            <Link style={styles.link} to='/'>Produtos</Link>
          </li>
          <li>
            <Link style={styles.link} to='/add-product'>Adicionar Produto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}