'use client';
import Image from 'next/image';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './page.module.scss';

export default function Bike(props) {
  const [count, setCount] = useState(1);
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
          <input readOnly value={count} />
          <button
            onClick={() => {
              if (count <= 1) {
                setCount(1);
              } else {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>

          <button
            className={styles.buyButton}
            data-test-id="product-add-to-cart"
            onClick={() => {
              // Get Cookie
              const productInCookies = getParsedCookie('cart');
              // Cookie does not exist, we initialize it with our useState-value
              if (!productInCookies) {
                setStringifiedCookie('cart', [
                  { id: props.bike.id, amount: count },
                  console.log(props.bike.id),
                ]);

                return;
              }

              const foundBike = productInCookies.find((bikeInCookies) => {
                return bikeInCookies.id === props.bike.id;
              });
              // Bike is inside the Cookies
              if (foundBike) {
                foundBike.amount = count;
                console.log(foundBike);
                // If it is not inside the Cookie, we push it in the Cookies
              } else {
                productInCookies.push({
                  id: props.bike.id,
                  amount: count,
                });
              }

              // Update the Cookies with the new values
              setStringifiedCookie('cart', productInCookies);
              setCount(1);
            }}
          >
            Add to cart
          </button>
        </div>
      </main>
    </>
  );
}
