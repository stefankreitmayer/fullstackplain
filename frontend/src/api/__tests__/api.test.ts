import { describe, it, expect } from "@jest/globals";
import { getApiUrl } from "../api";

describe("getApiUrl", () => {
  it("should construct URL with endpoint", () => {
    const url = getApiUrl("greet");
    expect(url).toBe("http://localhost:3001/api/v1/greet");
  });

  it("should handle endpoint with leading slash gracefully", () => {
    const url = getApiUrl("/greet");
    expect(url).toBe("http://localhost:3001/api/v1/greet");
  });

  it("should handle endpoint without leading slash", () => {
    const url = getApiUrl("greet");
    expect(url).toBe("http://localhost:3001/api/v1/greet");
  });

  it("should handle nested endpoints", () => {
    const url = getApiUrl("users/profile");
    expect(url).toBe("http://localhost:3001/api/v1/users/profile");
  });

  it("should handle nested endpoints with leading slash", () => {
    const url = getApiUrl("/users/profile");
    expect(url).toBe("http://localhost:3001/api/v1/users/profile");
  });

  it("should use default API_BASE_URL when env var is not set", () => {
    const url = getApiUrl("greet");
    // Should default to localhost:3001
    expect(url).toContain("localhost:3001");
    expect(url).toContain("/api/v1/greet");
  });

  // Note: Testing environment variable changes is not feasible here because
  // `import.meta.env.VITE_API_BASE_URL` is evaluated at module load time.
  // Changing `process.env` after the module is imported won't affect the
  // already-evaluated constant. Environment variable behavior should be tested
  // at integration/E2E level or by using module mocking with jest.resetModules().
});
