import User from "../models/User.js";
import bcrypt from "bcrypt";
import AppError from "../utils/AppError.js";
const createUser = async (data) => {
  try{
    const { password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    data.password = hashedPassword;

    const user = await User.create(data);

    return user;
  }
  catch{
 if (err.code === 11000) {
            throw new AppError("Email already exists", 409);
        }

        throw err;
  }
};

export default {
    createUser
};