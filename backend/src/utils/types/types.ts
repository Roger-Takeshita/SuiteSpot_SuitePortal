import { Document } from 'mongoose';

declare module 'express-serve-static-core' {
    export interface Request {
        user?: UserJWT | LoginForm | SignUpForm;
    }
}

type Callback = (error: string, isMatch: boolean) => void;

export interface UserI extends Document {
    _id: string;
    email: string;
    password: string;
    admin: boolean;
    comparePassword(password: string, callback: Callback): void;
}

export type User = {
    _id?: string;
    email: string;
};

export interface UserJWT {
    _id: string;
    email: string;
    iat: number;
    exp: number;
}

export type LoginForm = {
    email: string;
    password: string;
};

export type SignUpForm = {
    email: string;
    password: string;
};

export type DeleteForm = {
    password: string;
};

export type JWTAccessFn = {
    (user: User): string;
};
