import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validationRules = [
    // Validate existence, non-emptiness, and string type for location field
    check('location')
    .exists()
        .withMessage('Location is required')
    .notEmpty()
        .withMessage('Location cannot be empty')
    .isString()
        .withMessage('Location must be a string'),
];

export const validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Promise?.all(validationRules?.map((rule) => rule?.run(req)));
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        next();
    } catch (err) {
        console.error('Exception occured in "validate" method of "weatherByLoc" validator!', err);
    }
};
