// import TotalAmount from 'app/TotalAmount.tsx';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { getBikes } from '../../database/database.js';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default async function CheckoutPage() {
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
      <div className={styles.wrapper}>
        <h1>Checkout</h1>
        <h2>You will be riding this machine very soon</h2>
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
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h4>Total Sum: {total} € (Shipping Included)</h4>
        <h3>🛒 Shipping Details</h3>
        <form className={styles.checkoutForm} action="/thankyou">
          <label htmlFor="firstName">First Name</label>
          <input
            data-test-id="checkout-first-name"
            id="firstName"
            name="firstName"
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            data-test-id="checkout-last-name"
            id="lastName"
            name="lastName"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            data-test-id="checkout-email"
            id="email"
            name="email"
            type="email"
            required
          />

          <label htmlFor="address">Address</label>
          <input
            data-test-id="checkout-address"
            id="address"
            name="address"
            required
          />

          <label htmlFor="city">City</label>
          <input data-test-id="checkout-city" id="city" name="city" required />

          <label htmlFor="postalCode">Postal Code</label>
          <input
            data-test-id="checkout-postal-code"
            id="postalCode"
            name="postalCode"
            required
          />

          <label htmlFor="country">Country</label>
          <input
            data-test-id="checkout-country"
            id="country"
            name="country"
            required
          />

          <h3>💳 Payment Details</h3>
          <label htmlFor="country">Credit Card Number</label>
          <input
            data-test-id="checkout-credit-card"
            id="country"
            name="country"
            required
          />

          <label htmlFor="creditCardExpirationDate">Expiration Date</label>
          <input
            data-test-id="checkout-expiration-date"
            id="creditCardExpirationDate"
            name="creditCardExpirationDate"
            required
          />

          <label htmlFor="creditCardSecurityCode">Security Code</label>
          <input
            data-test-id="checkout-security-code"
            id="creditCardSecurityCode"
            name="creditCardSecurityCode"
            required
          />
          <button
            className={styles.buyButton}
            data-test-id="checkout-confirm-order"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
