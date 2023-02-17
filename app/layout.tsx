import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import CartCount from './CartCount';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CookieBanner />
        <header className={styles.header}>
          <nav>
            <Image
              src="/images/Logo without Subtext.png"
              width="100"
              height="100"
              alt="Bike Shop Logo"
            />
            <Link href="/">Home</Link>
            <Link data-test-id="products-link" href="/bikes">
              Bikes
            </Link>
            <Link className={styles.cart} data-test-id="cart-link" href="/cart">
              🛒 (<CartCount />)
            </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          Treat yourself to premium bikes at a bargain price
        </footer>
      </body>
    </html>
  );
}
