import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// Mock process.env for import.meta.env (transformed by jest-transformer)
process.env.VITE_API_BASE_URL = "http://localhost:3001";

// Polyfill TextEncoder/TextDecoder for Node.js environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;
