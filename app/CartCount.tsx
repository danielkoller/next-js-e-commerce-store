import { cookies } from 'next/headers';

export default function CartCount() {
  const cartCookie = cookies().get('cart');
  let cartItems: { amount: number }[] = [];
  if (cartCookie) {
    cartItems = JSON.parse(cartCookie.value);
  }

  let cartAmount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cartAmount += cartItems[i].amount;
  }
  return <span data-test-id="cart-count">{cartAmount}</span>;
}
