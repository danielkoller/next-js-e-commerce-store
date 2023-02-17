import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1>Discover premium bikes for a bargain price</h1>
      <p>
        We're passionate about cycling and believe that everyone should have
        access to great bikes at affordable prices. That's why we source our
        bikes directly from reputable sellers and check each bike thoroughly for
        any damages or issues, so you can be sure you're getting a great deal on
        a bike that's in excellent condition.
      </p>
      <div className={styles.imgButton}>
        <Image src="/images/Logo.png" width="500" height="500" />
        <Link href="/bikes">
          <button className={styles.findButton}>
            <h2>Find all our premium bikes here!</h2>
          </button>
        </Link>
      </div>
      <p>
        Our selection includes high-quality road bikes that are thoroughly
        checked for damages or issues. Order online and start riding your
        new-to-you bike in no time!
      </p>
    </main>
  );
}
