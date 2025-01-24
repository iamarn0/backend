//promises method

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));  
    }
};

export { asyncHandler }




//const asyncHandler = () => {};
//const asyncHandler = (func) => {() => {}};
//const asyncHandler = (func) => async() => {}; Higher order function(can take function as arguments)


/*
try-catch method


const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        });
    }
}
*/