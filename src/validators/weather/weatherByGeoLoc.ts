import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validationRules = [
    // Validate existence, non-emptiness, and string type for lat field
    check('lat')
    .exists()
        .withMessage('Latitude is required')
    .notEmpty()
        .withMessage('Latitude cannot be empty')
    .isFloat()
        .withMessage('Latitude must be a float'),

    // Validate existence, non-emptiness, and string type for long field
    check('long')
        .exists()
            .withMessage('Longitude is required')
        .notEmpty()
            .withMessage('Longitude cannot be empty')
        .isFloat()
            .withMessage('Longitude must be a float'),
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
        console.error('Exception occured in "validate" method of "weatherByGeoLoc" validator!', err);
    }
};
