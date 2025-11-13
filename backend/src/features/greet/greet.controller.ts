import { Request, Response } from "express";
import { GreetingResponse } from "@fullstackplain/shared";
import { createGreeting } from "./greet.service";

export const getGreeting = (req: Request, res: Response<GreetingResponse>) => {
  const greeting = createGreeting();
  res.json(greeting);
};
