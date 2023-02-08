'use client';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Bike(props) {
  return (
    <>
      <h1 className={styles.title}>{props.bike.name}</h1>
      <main>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src={props.bike.img}
            alt={props.bike.name}
            width="600"
            height="420"
          />
          <div className={styles.description}>
            <p>{props.bike.longerDescription}</p>
          </div>
        </div>
        <div className={styles.price}>Only {props.bike.price} €</div>
        <div className={styles.buyDiv}>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      </main>
    </>
  );
}
