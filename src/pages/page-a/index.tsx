import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

function PageA() {
  return (
    <div className={styles.pageA}>
      <div className="title">PageA</div>
      <Link to="/page-b">PageB</Link>
    </div>
  )
}

export default PageA