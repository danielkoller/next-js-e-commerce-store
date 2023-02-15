export async function up(sql) {
  await sql`
  CREATE TABLE bikes (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  longer_Description varchar(1000) NOT NULL,
  img varchar(50) NOT NULL,
  price integer NOT NULL
)
`;
}

export async function down(sql) {
  await sql`
  DROP TABLE bikes`;
}
