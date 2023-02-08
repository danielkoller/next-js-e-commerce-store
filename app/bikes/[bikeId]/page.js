import { getBike } from '../../../database/database.js';
import Bike from './Bike.js';

export default async function BikePage({ params }) {
  const singleBike = await getBike(params.bikeId);
  return <Bike bike={singleBike} />;
}
