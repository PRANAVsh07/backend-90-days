import userService from "../services/userService.js";

const createUser = async (req, res, next) => {
    try {
        const result = await userService.createUser(req.body);

        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

export default createUser;