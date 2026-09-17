import dotenv from "dotenv";
import { Mongoose } from "mongoose";

dotenv.config();

const env = {
    PORT:  Number(process.env.PORT),
    MONGO_URL:process.env.MONGO_URL
};
if(!env.PORT||env.PORT<=0){
    throw new Error("invalid PORT configuration")
}
export default env;