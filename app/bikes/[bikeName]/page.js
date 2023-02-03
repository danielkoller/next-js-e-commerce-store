import Image from 'next/image';
import { bikes } from '../../../database/database.js';

export const dynamic = 'force-dynamic';

export default function ProductPage(props) {
  const singleBike = bikes.find((bike) => {
    return bike.name.toLowerCase() === props.params.bikeName;
  });

  return (
    <>
      <h1>{singleBike.name}</h1>
      <main>
        <div>
          <Image src={singleBike.img} width="380" height="320" />
          {singleBike.longerDescription}
          {singleBike.price}
        </div>
      </main>
    </>
  );
}
