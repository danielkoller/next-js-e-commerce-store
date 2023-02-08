import { cache } from 'react';
import { sql } from './connect';

// export const bikes = [
//   {
//     id: 1,
//     name: 'Canyon',
//     description: 'A road bike to rule them all',
//     longerDescription:
//       'The fifth generation of the Canyon Ultimate is here, which can look back on almost 20 years of innovation. Since its presentation at Eurobike 2004, this legendary road bike has consistently demonstrated top performance in terms of road performance.',
//     img: '/images/Canyon.png',
//     price: 2000,
//   },
//   {
//     id: 2,
//     name: 'Trek',
//     description: 'A road bike for longer rides',
//     longerDescription:
//       'The Domane SL 5 is versatile, fast and has a smooth ride. The lightweight OCLV carbon frame comes with both front and rear IsoSpeed to effectively smooth out bumps on the road and thus prevent your fatigue, so you can pedal longer more powerful on long adventures. It is equipped with a reliable Shimano 105 drive, scores with all-weather disc brakes and allows the storage of necessary utensils in the integrated, easily accessible storage compartment.',
//     img: '/images/Trek.png',
//     price: 3000,
//   },
//   {
//     id: 3,
//     name: 'Specialized',
//     description: 'A road bike for speed maniacs',
//     longerDescription:
//       'The new Tarmac is designed to go fast, there are no ifs and buts - but it represents so much more than aerodynamic prowess. With a lightweight Rider First Engineered™ frame, it offers the best possible ride characteristics for any rider, regardless of size. No matter what you have planned for your new Tarmac, it is ready to help you achieve your goals - PRs, KOMs or podiums. Your bike to leave them all behind.',
//     img: '/images/Specialized.png',
//     price: 1500,
//   },
//   {
//     id: 4,
//     name: 'Giant',
//     description: 'A road bike for bumpy roads',
//     longerDescription:
//       'Maximize your watts during sprints, breakaways and solo attacks. This aero road machine is reengineered to give you a real advantage against the wind. Because small gains lead to big wins.',
//     img: '/images/Giant.png',
//     price: 2500,
//   },
//   {
//     id: 5,
//     name: 'Cannondale',
//     description: 'A road bike everyone can afford',
//     longerDescription:
//       'Ready for wherever the journey takes you, Topstone Alloy distills the spirit of Topstone Carbon into a rugged, ever-ready aluminum frame. Whether you are exploring routes less travelled or accelerating your commute, go beyond with the durable, dependable Topstone Alloy.',
//     img: '/images/Cannondale.png',
//     price: 1000,
//   },
//   {
//     id: 6,
//     name: 'Cervelo',
//     description: 'A road bike when money is no object ',
//     longerDescription:
//       'The R5 has only one task: to get to the top quickly. Even though glory and plenty of fans await at a mountain finish, that is usually not the only climb of the day. And while most races are not won on the descents, they can certainly be lost there. A mountain climb that can not handle a switchback feels like a cup of decaf. The R5 is now in its fourth iteration. While weight and stiffness have changed over the years, handling, balance and unmatched downhill prowess have remained the same since day one.',
//     img: '/images/Cervelo.png',
//     price: 4000,
//   },
// ];

// Get all the bikes

export const getBikes = cache(async () => {
  const bikes = await sql`
  SELECT * FROM bikes`;

  return bikes;
});

// Get a single bike

export const getBike = cache(async (id) => {
  const bike = await sql`
  SELECT * FROM bikes WHERE id = ${id}
  `;
  return bike[0];
});
