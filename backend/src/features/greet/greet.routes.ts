import { Router } from "express";
import { getGreeting } from "./greet.controller";

const router = Router();

router.get("/", getGreeting);

export default router;
