import express from "express";
import cors from "cors";
import { API_VERSION } from "@fullstackplain/shared";
import greetRoutes from "./features/greet/greet.routes";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(`/api/${API_VERSION}/greet`, greetRoutes);

  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return app;
}
