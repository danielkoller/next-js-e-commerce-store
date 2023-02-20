// import TotalAmount from 'app/TotalAmount.tsx';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getBikes } from '../../database/database.js';
import CartDelete from './Cart';
import styles from './page.module.scss';

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

  let total = 0;
  bikesInCart.forEach((bike) => {
    total += bike.price * bike.amount;
  });

  const cartItems = bikesInCart.filter((bike) => bike.amount > 0);

  return (
    <div>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cartContainer}>
        <ul>
          {cartItems.map((bike) => (
            <li
              key={`user-${bike.id}`}
              data-test-id={`cart-product-${bike.id}`}
            >
              <Image src={bike.img} width="200" height="100" alt="bike" />
              <p>
                <b>{bike.name}</b> <br />
                {bike.price} €
              </p>
              <div data-test-id={`cart-product-quantity-${bike.id}`}>
                <p>[{bike.amount} Bike]</p>
                <CartDelete
                  data-test-id={`cart-product-remove-${bike.id}`}
                  parsedData={bikesCookieParsed}
                  currentBike={bike}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buySection}>
        <p data-test-id="cart-total">
          <b> Total:</b> {total} €
        </p>
        <Link className={styles.Link} href="/checkout">
          <button className={styles.buyButton} data-test-id="cart-checkout">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
