import express from "express";
import createUser from "../controllers/userController.js";
import validate from "../middleware/validate.js";
import userSchema from "../validators/userValidators.js";

const router = express.Router();

router.post("/", validate(userSchema), createUser);

export default router;