import Image from 'next/image';
import { getBike } from '../../../database/database.js';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const singleBike = await getBike(params.bikeId);

  // // When the singleBike-Page is not found, we throw an error message.
  // if (!singleBike) {
  //   notFound();
  // }

  return (
    <>
      <h1 className={styles.title}>{singleBike.name}</h1>
      <main>
        <div className={styles.container}>
          <Image
            className={styles.image}
            src={singleBike.img}
            alt={singleBike.name}
            width="600"
            height="420"
          />
          <div className={styles.description}>
            <p>{singleBike.longerDescription}</p>
          </div>
        </div>
        <div className={styles.price}>Only {singleBike.price} €</div>
        <div className={styles.buyDiv}>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      </main>
    </>
  );
}
