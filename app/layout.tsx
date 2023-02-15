import './global.scss';
import Link from 'next/link';
import CartCount from './CartCount';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

type RootLayoutProps = {
  children: React.ReactNode,
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
            <Link href="/">Home</Link>
            <Link data-test-id="products-link" href="/bikes">
              Bikes
            </Link>
            <Link data-test-id="cart-link" href="/cart">
              Cart (<CartCount />)
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
