const { validationResult } = require("express-validator");

const validateRequest = (req, res , next) => {
    const errorsOcurred = validationResult(req);
    if (!errorsOcurred.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errorsOcurred.array() 
        });
    } else {
        next();
    }
}

module.exports = validateRequest;