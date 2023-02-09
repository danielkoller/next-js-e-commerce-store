import { getBikes } from '../../database/database.js';
import { Cart } from './Cart';

export default async function CartPage() {
  const bikes = await getBikes();
  return (
    <main>
      <h1>Cart</h1>
      <Cart bikes={bikes} />
    </main>
  );
}
