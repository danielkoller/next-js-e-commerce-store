import TotalAmount from 'app/cart/TotalAmount.tsx';

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <p>
        Pay{' '}
        <b>
          <TotalAmount /> €
        </b>{' '}
        now to get your bike soon and start riding!
      </p>
    </div>
  );
}
