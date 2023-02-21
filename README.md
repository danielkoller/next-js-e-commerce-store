# Ride On: A simple webstore created with Next.js

This is a simple bike webstore created with Next.js as part of the UpLeveled bootcamp. It sells used road bikes that have been checked by experts beforehand. The webstore was deployed on fly.io, as you can see in the provided link.

## Tech Stack

- Next.js
- PostgreSQL
- Playwright
- SCSS

### Languages:

- JavaScript
- JSX
- TypeScript
- TSX

## Screenshots

## Setup instructions

1. Clone the project on your local machine (run each line individually):

```bash
git clone <url>
cd <repo name>
yarn
```

2. Connect to default database as admin:

- On Windows

```bash
psql -U postgres
```

- On macOS

```bash
psql postgres
```

- On Linux

```bash
sudo -u postgres psql
```

3. Set up the database:

```bash
CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD <user password>;
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
```

4. After queries are successfully ran, quit `psql` and connect to the database

```bash
\q
```

- On Windows & macOS

```bash
psql -U <user name> <database name>
```

- On Linux

```bash
sudo -u <user name> psql -U <user name> <database name>
```

5. In the repository's directory, run migrations using ley:

```bash
yarn migrate up
```

6. Create a .env file:

- Open the project in your code editor
- Copy the content of the .env.example file into the .env file
- Replace xxxxxxxx with the access information
- add .env file to .gitignore

7. (Optional) Start deployment server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment instructions

1. Sign up on Fly.io: https://fly.io/

2. On the Fly.io Tokens page, generate a new Fly.io access token named `GitHub Actions Deploy Token` and copy it from the text box that appears - it will only be shown once

3. In your GitHub repo under Settings -> Secrets -> Actions, click the <b>New repository secret</b> button at the top right of the page and create a new token with the name `FLY_API_TOKEN` and the token you copied as the secret

4. On the command line, open Fly.io login page in your browser using the following command:

```bash
flyctl auth login
```

Enter your credentials in the browser window that appears and then click on the link <b>Try Fly.io for free</b>. Switch back to the terminal - it should now show a message like `successfully logged in as <your email>`.

5. Create an app, specifying the name using only lowercase letters and dashes:

```bash
flyctl apps create --name <app name>
```

6. Create the Fly.io config files as demonstrated in the lecture (also available in the Next.js example repo)

7. Change your `database/connect.ts` as in the lecture: only run `config()` from `dotenv-safe` if the `FLY_IO` environment variable is not set

8. Change your `next.config.js` as in the lecture: disable linting and type checking on build, since we do this earlier in the GitHub Actions deploy process

9. Add database credentials using Fly.io secrets, randomy generating the database name, username and password:

```bash
flyctl secrets set PGHOST=localhost PGDATABASE=upleveled$(openssl rand -hex 16) PGUSERNAME=upleveled$(openssl rand -hex 16) PGPASSWORD=$(openssl rand -base64 32)
```

10. If your app needs any additional environment variables such as API keys, also add them to the secrets using the following pattern:

```bash
flyctl secrets set <secret name>=<secret value>
```

11. The Next.js documentation mentions exposing variables to the browser using variables prefixed with NEXT*PUBLIC*. Instead of using environment variables for this, we recommend declaring a JavaSrcipt variable in your code because this information is not secret - it will be exposed to the browser. If you absolutely need to set a `NEXT_PUBLIC` environment variable, you can add it to your `.env.production` file.

12. Create a 1GB volume for the PostgreSQL database in the Amsterdam region:

```bash
flyctl volumes create postgres --size 1 --region ams
```

13. Deploy the first version of the app:

```bash
flyctl deploy
```

14. You may receive a `faied to fecth an image or build from source` error during deployment:

```bash
Error failed to fetch an image or build from source: error building: executor failed running [/bin/sh -c yarn build]: exit code: 1
```

Deploys may fail for a number of reasons, to find the real error message you will need to scroll up in the logs and find the first line that looks like an error.
