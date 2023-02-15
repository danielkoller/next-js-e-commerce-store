'use client';
import { setStringifiedCookie } from '/utils/cookies';
import { useRouter } from 'next/navigation';

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
  return <button onClick={handleClick}>Remove Bike from Cart</button>;
}
