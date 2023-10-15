import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={'/p1.jpeg'} alt='' fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>10.10.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={'/'}>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nam cumque odio consequuntur iste deleniti ab placeat soluta minima? Eum exercitationem qui pariatur accusamus reprehenderit nostrum mollitia nesciunt quod accusantium.</p>
        <Link className={styles.link} href={'/'}>Read More</Link>
      </div>
    </div>
  )
}

export default Card