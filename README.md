# GraphQL Calculator
## Math equations GraphQL mutations (sum,subtract, multiply, divide)

## Beginning of work
1. Clone the repository to any folder on your computer
2. `npm install` to install dependencies and work with project locally or to run the tests in future.
3. `npm run dev` starts the server using ts-node-dev(similar to nodemon)
4. `npm run build` removes ./dist using rimraf if it exists and transpiles ts into js to ./dist folder

### In order to run the project in development mode using docker:
- docker-compose -f docker-compose.dev.yml up

### In order to run the project in production mode using docker:
- docker-compose up

By default, the Docker will expose port 4000

### How to run tests
`npm run test`, this will run tests using Jest. 

### Mutations

```graphql
mutation Mutation(
  $addNumbers: CalculationInput!
  $divideNumbers: CalculationInput!
  $multiplyNumbers: CalculationInput!
  $subtractNumbers: CalculationInput!
) {
  addNumbers(numbers: $addNumbers)
  divideNumbers(numbers: $divideNumbers)
  multiplyNumbers(numbers: $multiplyNumbers)
  subtractNumbers(numbers: $subtractNumbers)
}
```

sample variables
```
{
  "addNumbers": {
    "a": 1000,
    "b": 500
  },
   "subtractNumbers": {
    "a": 1000,
    "b": 500
  },
  "divideNumbers": {
    "a": 1000,
    "b": 500
  },
  "multiplyNumbers": {
    "a": 1000,
    "b": 500
  },
}
```