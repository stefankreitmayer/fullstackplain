import { describe, it, expect } from "@jest/globals";
import { createGreeting } from "../greet.service";

describe("greet.service", () => {
  describe("createGreeting", () => {
    it("returns a greeting response", () => {
      const result = createGreeting();

      expect(result).toEqual({ greeting: "Hello." });
    });
  });
});
