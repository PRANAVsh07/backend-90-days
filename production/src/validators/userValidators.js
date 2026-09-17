import { z } from "zod";

const userSchema = z.object({
    name: z.string(),
    age: z.number(),
    email: z.email(),
    password: z.string()
});

export default userSchema;