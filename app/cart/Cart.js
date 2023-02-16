'use client';
import { setStringifiedCookie } from '/utils/cookies';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function CartDelete(props) {
  const router = useRouter();
  function handleClick() {
    const cookie = props.parsedData;
    const currentBike = cookie.filter(
      (product) => product.id !== props.currentBike.id,
    );
    setStringifiedCookie('cart', currentBike);
    router.refresh();
  }
  return (
    <button className={styles.removeButton} onClick={handleClick}>
      Remove
    </button>
  );
}
