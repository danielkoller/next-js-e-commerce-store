import { cookies } from 'next/headers';
import Link from 'next/link';
import { getBikes } from '../../database/database.js';
import CartDelete from './Cart';
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
      <ul>
        {cartItems.map((bike) => (
          <li key={bike.id} data-test-id={`cart-product-${bike.id}`}>
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
      <p data-test-id="cart-total">
        Total: <TotalAmount /> €
      </p>
      <button data-test-id="cart-checkout">
        <Link href="/checkout">Checkout</Link>
      </button>
    </div>
  );
}
