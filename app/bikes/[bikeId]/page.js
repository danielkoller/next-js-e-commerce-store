import { getBike } from '../../../database/database.js';
import Bike from './Bike.js';

export const dynamic = 'force dynamic';

export default async function BikePage({ params }) {
  const bikeId = parseInt(params.bikeId);
  const singleBike = await getBike(bikeId);
  return <Bike bike={singleBike} />;
}
