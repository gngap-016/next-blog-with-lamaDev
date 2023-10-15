import React from 'react'
import styles from './menuCategories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link className={`${styles.categoryItem} ${styles.style}`} href={'/blog?cat=style'}>Style</Link>
      <Link className={`${styles.categoryItem} ${styles.fashion}`} href={'/blog?cat=fashion'}>Fashion</Link>
      <Link className={`${styles.categoryItem} ${styles.food}`} href={'/blog?cat=food'}>Food</Link>
      <Link className={`${styles.categoryItem} ${styles.travel}`} href={'/blog?cat=travel'}>Travel</Link>
      <Link className={`${styles.categoryItem} ${styles.culture}`} href={'/blog?cat=culture'}>Culture</Link>
      <Link className={`${styles.categoryItem} ${styles.coding}`} href={'/blog?cat=coding'}>Coding</Link>
    </div>
  )
}

export default MenuCategories