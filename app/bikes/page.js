import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/database.js';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default async function BikesPage() {
  const bikes = await getBikes();
  return (
    <>
      <h1 className={styles.h1}>Find all the bikes here</h1>
      <main className={styles.container}>
        {bikes.map((bike) => {
          return (
            <div className={styles.bikes} key={`user-${bike.id}`}>
              <Link href={`/bikes/${bike.id}`}>
                <h2>{bike.name}</h2>
              </Link>
              <p>{bike.description}</p>
              <Link href={`/bikes/${bike.id}`}>
                <Image src={bike.img} alt="Bikes" width="280" height="220" />
              </Link>
              <h3>{bike.price} € </h3>
            </div>
          );
        })}
      </main>
    </>
  );
}
