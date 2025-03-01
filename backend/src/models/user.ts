import { NextFunction } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import * as type from '../utils/types/types';

const Schema = mongoose.Schema;
const SALT_ROUNDS: number = 6;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            require: true,
            minlength: process.env.PASSWORD_LEN,
            trim: true,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre<type.UserI>('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }

    next();
});

userSchema.methods.comparePassword = async function (
    tryPassword: string,
    callback: NextFunction
) {
    await bcrypt.compare(tryPassword, this.password, callback);
};

userSchema.set('toJSON', {
    transform: function (_, ret) {
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.admin;
        delete ret.__v;
        return ret;
    },
});

export default mongoose.model<type.UserI>('User', userSchema);
