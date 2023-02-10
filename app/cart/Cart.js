import { cookies } from 'next/headers';

export function Cart({ bikes }) {
  const bikesCookie = cookies().get('cart');

  let bikesCookieParsed = [];

  if (bikesCookie) {
    bikesCookieParsed = JSON.parse(bikesCookie.value);
  }

  let bikesInCart = [];

  bikesInCart = bikes.map((bike) => {
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

  return (
    <div>
      <ul>
        {bikesInCart
          .filter((bike) => bike.amount > 0)
          .map((bike) => (
            <li key={bike.id}>
              {bike.name} ({bike.amount})
            </li>
          ))}
      </ul>
      <p>Total: {total} €</p>
    </div>
  );
}
