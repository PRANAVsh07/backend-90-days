const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const errors = result.error.issues.reduce((acc, error) => {
                acc[error.path[0]] = error.message;
                return acc;
            }, {});

            return res.status(400).json({
                message: "Invalid input",
                errors
            });
        }

        next();
    };
};

export default validate;