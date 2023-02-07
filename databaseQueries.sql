-- Creating a table
CREATE TABLE bike (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  longer_description varchar(500) NOT NULL,
  img varchar(50),
  price integer NOT NULL,
);

-- Insert product
INSERT INTO
  bike (
    name,
    description,
    longer_Description,
    img,
    price
  )
VALUES
  (
    'Canyon',
    'A road bike to rule them all',
    'The fifth generation of the Canyon Ultimate is here, which can look back on almost 20 years of innovation. Since its presentation at Eurobike 2004, this legendary road bike has consistently demonstrated top performance in terms of road performance.',
    '/images/Canyon.png',
    2000,
  ) (
    'Trek',
    'A road bike for longer rides',
    'The Domane SL 5 is versatile, fast and has a smooth ride. The lightweight OCLV carbon frame comes with both front and rear IsoSpeed to effectively smooth out bumps on the road and thus prevent your fatigue, so you can pedal longer more powerful on long adventures. It is equipped with a reliable Shimano 105 drive, scores with all-weather disc brakes and allows the storage of necessary utensils in the integrated, easily accessible storage compartment.',
    '/images/Trek.png',
    3000,
  ) (
    'Specialized',
    'A road bike for speed maniacs',
    'The new Tarmac is designed to go fast, there are no ifs and buts - but it represents so much more than aerodynamic prowess. With a lightweight Rider First Engineered™ frame, it offers the best possible ride characteristics for any rider, regardless of size. No matter what you have planned for your new Tarmac, it is ready to help you achieve your goals - PRs, KOMs or podiums. Your bike to leave them all behind.',
    '/images/Specialized.png',
    1500,
  ) (
    'Giant',
    'A road bike for bumpy roads',
    'Maximize your watts during sprints, breakaways and solo attacks. This aero road machine is reengineered to give you a real advantage against the wind. Because small gains lead to big wins.',
    '/images/Giant.png',
    2500,
  ) (
    'Cannondale',
    'A road bike everyone can afford',
    'Ready for wherever the journey takes you, Topstone Alloy distills the spirit of Topstone Carbon into a rugged, ever-ready aluminum frame. Whether you are exploring routes less travelled or accelerating your commute, go beyond with the durable, dependable Topstone Alloy.',
    '/images/Cannondale.png',
    1000,
  ) (
    'Cervelo',
    'A road bike when money is no object ',
    'The R5 has only one task: to get to the top quickly. Even though glory and plenty of fans await at a mountain finish, that is usually not the only climb of the day. And while most races are not won on the descents, they can certainly be lost there. A mountain climb that can not handle a switchback feels like a cup of decaf. The R5 is now in its fourth iteration. While weight and stiffness have changed over the years, handling, balance and unmatched downhill prowess have remained the same since day one.',
    '/images/Cervelo.png',
    4000,
  ) -- Get all products
SELECT
  *
FROM
  bike;
