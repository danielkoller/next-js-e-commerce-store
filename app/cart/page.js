import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/database.js';
import CartDelete from './Cart';
import styles from './page.module.scss';
import TotalAmount from './TotalAmount.tsx';

export default async function CartPage() {
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
    <div>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cartContainer}>
        <ul>
          {cartItems.map((bike) => (
            <li key={bike.id} data-test-id={`cart-product-${bike.id}`}>
              <Image src={bike.img} width="200" height="100" alt="roadbike" />
              <b>{bike.name}</b> {bike.price} €
              <div data-test-id={`cart-product-quantity-${bike.id}`}>
                [{bike.amount} Bike(s)]
                <CartDelete
                  data-test-id={`cart-product-remove-${bike.id}`}
                  parsedData={bikesCookieParsed}
                  currentBike={bike}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.totalSection}>
          <p data-test-id="cart-total">
            <b> Total:</b> <TotalAmount /> €
          </p>
        </div>
      </div>
      <div className={styles.buySection}>
        <button className={styles.buyButton} data-test-id="cart-checkout">
          <Link className={styles.Link} href="/checkout">
            Checkout
          </Link>
        </button>
      </div>
    </div>
  );
}
