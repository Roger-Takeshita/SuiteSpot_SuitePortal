import { RequestHandler } from 'express';
import User from '../models/user';
import * as auth from '../middlewares/auth';
import * as type from '../utils/types/types';

const signUpUser: RequestHandler = async (req, res) => {
    const form: type.SignUpForm = req.body;

    try {
        const user: type.UserI = await User.findOne({ email: form.email });
        if (user) {
            return res
                .status(400)
                .json({ message: 'ERROR: Email already in use.' });
        }

        console.log(form);
        const newUser: type.UserI = new User(form);
        await newUser.save();
        const token = auth.createAccessToken(newUser);
        return res.json(token);
    } catch (error) {
        res.status(500).json({
            message:
                'ERROR: Something went wrong while trying to sign up. Please try again later or contact our support.',
        });
    }
};

const loginUser: RequestHandler = async (req, res) => {
    const form: type.LoginForm = req.body;

    try {
        const user: type.UserI = await User.findOne({ email: form.email });
        if (!user) {
            return res.status(404).json({ message: 'ERROR: User not found.' });
        }

        user.comparePassword(form.password, (_error, isMatch) => {
            if (isMatch) {
                const token = auth.createAccessToken(user);
                return res.json(token);
            }

            res.status(403).json({ message: 'ERROR: Wrong credentials.' });
        });
    } catch (error) {
        res.status(500).json({
            message:
                'ERROR: Something went wrong while trying to login. Please try again later or contact our support.',
        });
    }
};

export default {
    signUpUser,
    loginUser,
};
