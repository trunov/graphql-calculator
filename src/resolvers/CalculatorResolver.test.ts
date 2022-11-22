import supertest from "supertest";
import { setupServer } from "../index";

let app;

beforeAll(async () => {
  app = supertest(await setupServer());
});

describe("addNumbers", () => {
  it("should add 2 positive numbers", async () => {
    const mutation = `
        mutation {
          addNumbers(numbers: {
            a: 2,
            b: 3
          }) 
        }
        `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ addNumbers: 5 });
  });
  it("should add 2 negative numbers", async () => {
    const mutation = `
        mutation {
          addNumbers(numbers: {
            a: -2,
            b: -3
          }) 
        }
        `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ addNumbers: -5 });
  });
});

describe("subtractNumbers", () => {
  it("should subtract 2 positive numbers", async () => {
    const mutation = `
          mutation {
            subtractNumbers(numbers: {
              a: 2,
              b: 3
            }) 
          }
          `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ subtractNumbers: -1 });
  });
  it("should subtract 2 negative numbers", async () => {
    const mutation = `
          mutation {
            subtractNumbers(numbers: {
              a: -2,
              b: -3
            }) 
          }
          `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ subtractNumbers: 1 });
  });
});

describe("multiplyNumbers", () => {
  it("should multiply 2 positive numbers", async () => {
    const mutation = `
          mutation {
            multiplyNumbers(numbers: {
              a: 2,
              b: 3
            }) 
          }
          `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ multiplyNumbers: 6 });
  });
  it("should multiply 2 negative numbers", async () => {
    const mutation = `
          mutation {
            multiplyNumbers(numbers: {
              a: -2,
              b: -3
            }) 
          }
          `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ multiplyNumbers: 6 });
  });
});

describe("divideNumbers", () => {
  it("should divide 2 positive numbers", async () => {
    const mutation = `
          mutation {
            divideNumbers(numbers: {
              a: 10,
              b: 2
            }) 
          }
          `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ divideNumbers: 5 });
  });
  it("should divide 2 negative numbers", async () => {
    const mutation = `
          mutation {
            divideNumbers(numbers: {
              a: -21,
              b: -3
            }) 
          }
          `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual({ divideNumbers: 7 });
  });
  it("should return null when divide by 0", async () => {
    const mutation = `
          mutation {
            divideNumbers(numbers: {
              a: -21,
              b: 0
            }) 
          }
          `;

    const response = await app.post("/graphql").send({
      queryName: "",
      variable: {},
      query: mutation,
    });

    expect(response.body.data).toEqual(null);
  });
});
