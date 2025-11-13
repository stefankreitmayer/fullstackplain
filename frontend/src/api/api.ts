import { API_VERSION } from "@fullstackplain/shared";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export const getApiUrl = (endpoint: string): string => {
  // Ignore duplicate slashes
  return `${API_BASE_URL}/api/${API_VERSION}/${endpoint.replace(/^\/+/, "")}`;
};
