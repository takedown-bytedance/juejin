import React from 'react'
import ArticleList from './articleList'
import styles from './index.module.scss'
export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <nav className={styles.nav} />
        <div className={styles.content}>
          <ArticleList />
          <aside className={styles.aside} />
        </div>
      </div>
    </div>
  )
}
