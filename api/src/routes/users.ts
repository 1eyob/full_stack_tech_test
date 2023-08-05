import express from "express";
const router = express.Router();
import { createUser, getAllUSers, GetUser } from "../controller/userController";

router.route("/").post(createUser).get(getAllUSers);
router.route("/:id").get(GetUser);

export default router;
