import { describe, it, expect } from "vitest";
import { app } from "../index";
import request from "supertest";

describe("Checking the sum functionality", () => {
  it("should add 1 and 2 = 3 ", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 25,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ answer: 3, id: expect.any(Number) });
  });
});
