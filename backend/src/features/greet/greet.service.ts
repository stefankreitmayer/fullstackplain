import { GreetingResponse } from "@fullstackplain/shared";

export const createGreeting = (): GreetingResponse => {
  return { greeting: "Hello." };
};
