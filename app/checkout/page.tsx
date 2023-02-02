import styles from './page.module.scss';

export default function CheckoutPage() {
  return (
    <main>
      <h1 className={styles.title}>Checkout</h1>
      <form className={styles.form}>
        <section>
          <label htmlFor="firstName">First name</label>
          <input
            data-test-id="checkout-first-name"
            id="firstName"
            name="firstName"
            placeholder="Enter first name here"
            required
          />
        </section>
        <section>
          <label htmlFor="lastName">Last name</label>
          <input
            data-test-id="checkout-last-name"
            id="lastName"
            name="lastName"
            placeholder="Enter last name here"
            required
          />
        </section>
        <section>
          <label htmlFor="email">E-Mail</label>
          <input
            data-test-id="checkout-email"
            id="email"
            name="email"
            placeholder="Enter your email here"
            required
          />
        </section>
        <section>
          <label htmlFor="adress">Adress</label>
          <input
            data-test-id="checkout-address"
            id="adress"
            name="adress"
            placeholder="Enter your adress here"
            required
          />
        </section>
        <section>
          <label htmlFor="city">City</label>
          <input
            data-test-id="checkout-city"
            id="city"
            name="city"
            placeholder="Enter your city here"
            required
          />
        </section>
        <section>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            data-test-id="checkout-postal-code"
            id="postalCode"
            name="postalCode"
            placeholder="Enter your postal code here"
            required
          />
        </section>
        <section>
          <label htmlFor="country">Country</label>
          <input
            data-test-id="checkout-country"
            id="country"
            name="country"
            placeholder="Enter your country here"
            required
          />
        </section>
        <section>
          <label htmlFor="creditCard">Credit Card</label>
          <input
            data-test-id="checkout-credit-card"
            id="creditCard"
            name="creditCard"
            placeholder="Enter your credit card details here"
            required
          />
        </section>
        <section>
          <label htmlFor="expirationDate">
            Expiration Date of the Credit Card
          </label>
          <input
            data-test-id="checkout-expiration-date"
            id="expirationDate"
            name="expirationDate"
            placeholder="Enter the expiration date of your credit card here"
            required
          />
        </section>
        <section>
          <label htmlFor="expirationDate">
            Security Code of your Credit Card
          </label>
          <input
            data-test-id="checkout-security-code"
            id="securityCode"
            name="securityCode"
            placeholder="Enter the security code of your credit card here"
            required
          />
        </section>
        <button data-test-id="checkout-confirm-order">Submit!</button>
      </form>
    </main>
  );
}
