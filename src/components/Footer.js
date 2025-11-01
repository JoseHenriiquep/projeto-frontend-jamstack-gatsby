import React from 'react'

export default function Footer() {

  const styles = {
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#a843a8',
      height: '30px',
      padding: '10px',
    },
    p: {
      color: '#fff',
      fontSize: '1rem'
    }
  }

  return(
    <footer style={styles.footer}>
      <p style={styles.p}>&copy; 2025 JoseHenriiquep</p>
    </footer>
  )
}