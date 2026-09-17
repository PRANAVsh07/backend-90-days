
const errorHandler = (err, req, res, next) => {
    console.log(err);

    const statusCode = err.statusCode || 500;//If the error has a statusCode, use it. Otherwise, fall back to 500.

    res.status(statusCode).json({
        message: err.message || "Internal server error"
    });
};

export default errorHandler;