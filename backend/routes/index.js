import { Router } from "express";
import { authRouter } from "./auth.js";

const router = Router();
router.get("/", (req, res) => {
  res.send("server is up");
});
router.use("/auth", authRouter);

export { router };
