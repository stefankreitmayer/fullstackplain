import { describe, it, expect, beforeEach } from "@jest/globals";
import request from "supertest";
import { API_VERSION } from "@fullstackplain/shared";
import { createApp } from "../app";

describe("Express API Routes", () => {
  let app: ReturnType<typeof createApp>;

  beforeEach(() => {
    app = createApp();
  });

  describe(`GET /api/${API_VERSION}/greet`, () => {
    it("should return greeting", async () => {
      const response = await request(app).get(`/api/${API_VERSION}/greet`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ greeting: "Hello." });
    });
  });

  describe("GET /health", () => {
    it("should return health status", async () => {
      const response = await request(app).get("/health");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ status: "ok" });
    });
  });
});
