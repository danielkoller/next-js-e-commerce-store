import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <nav>
            <Link href="/">Home</Link>
            <Link data-test-id="products-link" href="/bikes">
              Bikes
            </Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          A lot of sweat, anger and frustration from Daniel Koller went into
          this project.
        </footer>
      </body>
    </html>
  );
}
