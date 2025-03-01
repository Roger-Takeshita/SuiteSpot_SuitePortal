import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import * as type from '../utils/types/types';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_SECRET_EXPIRES_IN = process.env.JWT_SECRET_EXPIRES_IN;

const auth: RequestHandler = (req, res, next) => {
    let token: string =
        req.get('Authorization') || req.query.token || req.body.token;

    try {
        if (token) {
            token = token.replace('Bearer ', '');
            const user = <type.UserJWT>jwt.verify(token, JWT_SECRET_KEY);
            req.user = user;
            next();
        } else {
            res.status(401).json({ message: 'Token not found.' });
        }
    } catch (error) {
        return res
            .status(401)
            .json({ message: 'Not authorized, invalid token.' });
    }
};

const createAccessToken: type.JWTAccessFn = (user: type.User) => {
    return jwt.sign({ _id: user._id, email: user.email }, JWT_SECRET_KEY, {
        expiresIn: JWT_SECRET_EXPIRES_IN,
    });
};

export { auth, createAccessToken };
