import { cookies } from 'next/headers';
import Image from 'next/image';
import { getBikes } from '../../database/database.js';
import styles from './page.module.scss';

export default async function ThankyouPage() {
  const allBikes = await getBikes();
  const bikesCookie = cookies().get('cart');

  let bikesCookieParsed = [];

  if (bikesCookie) {
    bikesCookieParsed = JSON.parse(bikesCookie.value);
  }

  const bikesInCart = allBikes.map((bike) => {
    const bikeInCart = { ...bike, amount: 0 };

    const bikeInCookie = bikesCookieParsed.find(
      (bikeObject) => bike.id === bikeObject.id,
    );

    if (bikeInCookie) {
      bikeInCart.amount = bikeInCookie.amount;
    }

    return bikeInCart;
  });

  const cartItems = bikesInCart.filter((bike) => bike.amount > 0);

  return (
    <main className={styles.wrapper}>
      <h1>
        Your bike will be with you shortly, have fun with your new best friend
      </h1>
      <div>
        {cartItems.map((bike) => (
          <li key={`user-${bike.id}`} data-test-id={`cart-product-${bike.id}`}>
            <Image src={bike.img} width="200" height="100" alt="roadbike" />
          </li>
        ))}
      </div>
      <h2>While you're here ... </h2>
      <p>
        Cycling together is simply much more fun. Maybe you have people in your
        circle of friends who don't have a proper bike and you want to convince
        them of the most beautiful sport in the world?{' '}
        <b>Recommend us and get -10% off your next order!</b> We look forward to
        welcoming you and your friends back soon.
      </p>
      <div className={styles.recommendSection}>
        <button className={styles.recommendButton}>
          Recommend us and earn your bonus!
        </button>
      </div>
    </main>
  );
}
