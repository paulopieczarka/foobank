const request = require('supertest');
const app = require("../index");

describe("Rest the /login path", () => {
    test("It should response the GET method", done => {
        request(app).get("/login").then(response =>  {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe("Rest the /register path", () => {
    test("It should response the GET method", done => {
        request(app).get("/register").then(response =>  {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});