import React from 'react'
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href={'/blog?cat=style'} className={`${styles.category} ${styles.style}`}>
          <Image className={styles.img} src={'/style.png'} alt='' width={32} height={32} />
          style
        </Link>
        <Link href={'/blog?cat=fashion'} className={`${styles.category} ${styles.fashion}`}>
          <Image className={styles.img} src={'/fashion.png'} alt='' width={32} height={32} />
          fashion
        </Link>
        <Link href={'/blog?cat=food'} className={`${styles.category} ${styles.food}`}>
          <Image className={styles.img} src={'/food.png'} alt='' width={32} height={32} />
          food
        </Link>
        <Link href={'/blog?cat=travel'} className={`${styles.category} ${styles.travel}`}>
          <Image className={styles.img} src={'/travel.png'} alt='' width={32} height={32} />
          travel
        </Link>
        <Link href={'/blog?cat=culture'} className={`${styles.category} ${styles.culture}`}>
          <Image className={styles.img} src={'/culture.png'} alt='' width={32} height={32} />
          culture
        </Link>
        <Link href={'/blog?cat=coding'} className={`${styles.category} ${styles.coding}`}>
          <Image className={styles.img} src={'/coding.png'} alt='' width={32} height={32} />
          coding
        </Link>
      </div>
    </div>
  )
}

export default CategoryList