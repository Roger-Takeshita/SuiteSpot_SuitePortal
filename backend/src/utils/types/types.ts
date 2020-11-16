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

export type UserJWT = User & {
    iat: number;
    exp: number;
};

export type LoginForm = {
    email: string;
    password: string;
};

export type SignUpForm = LoginForm & {
    confirmPassword: string;
};

export type JWTAccessFn = {
    (user: User): string;
};
