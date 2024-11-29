## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
 You also need a postgres database to run, I recommend to use [Prisma Postgres](https://www.prisma.io/postgres)

 
 Create a `.env` file in the root of the project and fill the necessary data:
 ```
 DATABASE_URL= $INSERT YOUR DB CONNECTION STRING HERE

API_URL="http://localhost:3000/api/"
 ```

 After everything is done you need to run the migrations:

```bash
npm run prisma migrate deploy
# or
yarn prisma migrate deploy
# or
pnpm prisma migrate deploy
# or
bun prisma migrate deploy
```

It will create the columns and also seed the database.


## Preview

You can check a preview here:

**[Demo](https://zealthy-test.vercel.app/)**