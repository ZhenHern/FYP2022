# Final year project (Bakery e-commerce website)

## Prerequisite
Download the following:

1. Node.js https://nodejs.org/en
2. MySQL https://dev.mysql.com/downloads/mysql/

## Project setup (Installing dependencies)

### Client

Make sure you are in the 'client' directory
```
npm install
```

### Server

Make sure you are in the 'server' directory
```
npm install
```

## Running the system in dev environment

### Client

Command to start localhost website
```
npm run serve
```

### Server
1. Create a database in MySQL (Name it as bakeryshop)
2. Configure the database in the `dbConfig.js` file

Command to start the server
```
npm start
```
## Run written tests

### Unit testing

Run vitest unit test in headless mode
```
npm run test
```

Run vitest unit test with UI
```
npm run test:ui
```
### E2E test

Run cypress E2E test with UI
```
npx cypress run
```
Run cypress E2E test in headless mode
```
npx cypress run --headless
```

## Running the hosted system in production environment

https://zhenhern.github.io/FYP2022/

