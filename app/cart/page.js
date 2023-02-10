import { cookies } from 'next/headers';
import { getBikes } from '../../database/database.js';

export default async function Cart({ bikes }) {
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
      <ul>
        {cartItems.map((bike) => (
          <li key={bike.id} data-test-id={`cart-product-${bike.id}`}>
            <b>{bike.name}</b> {bike.price} €
            <div data-test-id={`cart-product-quantity-${bike.id}`}>
              [{bike.amount} Bike(s)]
            </div>
          </li>
        ))}
      </ul>
      <p>Total: {total} €</p>
    </div>
  );
}
