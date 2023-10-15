import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const singlePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <div className={styles.user}>
            <div className={styles.userImgContainer}>
              <Image className={styles.avatar} src={'/p1.jpeg'} alt='' fill />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>13 November 2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'/p1.jpeg'} alt='' fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt commodi asperiores, eligendi beatae consequuntur iste nihil non vero facere? Quae quas debitis architecto deleniti odit laborum mollitia nostrum modi possimus!</p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt commodi asperiores, eligendi beatae consequuntur iste nihil non vero facere? Quae quas debitis architecto deleniti odit laborum mollitia nostrum modi possimus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt commodi asperiores, eligendi beatae consequuntur iste nihil non vero facere? Quae quas debitis architecto deleniti odit laborum mollitia nostrum modi possimus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt commodi asperiores, eligendi beatae consequuntur iste nihil non vero facere? Quae quas debitis architecto deleniti odit laborum mollitia nostrum modi possimus!</p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default singlePage