import app from '../app';
import User from '../models/user';
import request from 'supertest';
import * as type from '../utils/types/types';
import { user1, setupDatabase } from './database/database';

const URL = '/api/users';
const URL_REQ = '/api/maintenance-requests';

beforeEach(setupDatabase);

describe("User's API", () => {
    it('Should sign up - new user', async () => {
        const form: type.SignUpForm = {
            email: 'your_email_3@test.com',
            password: '123456',
            confirmPassword: '123456',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/signup`)
            .send(form)
            .expect(201);
        const user: type.UserI = await User.findOne({ email: form.email });
        expect(user).not.toBeNull();
        expect(typeof response.body).toEqual('string');
    });

    it('Should not sign up - existing user/email', async () => {
        const form: type.SignUpForm = {
            email: user1.email,
            password: 'test123',
            confirmPassword: 'test123',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/signup`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'ERROR: Email already in use.',
        });
    });

    it('Should not sign up - empty email', async () => {
        const form: type.SignUpForm = {
            email: '',
            password: 'test123',
            confirmPassword: 'test123',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/signup`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Bad form request',
        });
    });

    it('Should not sign up - empty password', async () => {
        const form: type.SignUpForm = {
            email: 'your_email_3@test.com',
            password: '',
            confirmPassword: 'test123',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/signup`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Bad form request',
        });
    });

    it('Should not sign up - empty confirm password', async () => {
        const form: type.SignUpForm = {
            email: 'your_email_3@test.com',
            password: 'test123',
            confirmPassword: '',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/signup`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Bad form request',
        });
    });

    it('Should not sign up - wrong confirm password', async () => {
        const form: type.SignUpForm = {
            email: 'your_email_3@test.com',
            password: 'test123',
            confirmPassword: 'test123wrong',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/signup`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Bad form request',
        });
    });

    it('Should not sign up - empty form', async () => {
        const form: type.SignUpForm = {
            email: '',
            password: '',
            confirmPassword: '',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/signup`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Bad form request',
        });
    });

    it('Should login - verified email', async () => {
        const form: type.LoginForm = {
            email: user1.email,
            password: user1.password,
        };

        const response: LoginResponse = await request(app)
            .post(`${URL}/login`)
            .send(form)
            .expect(200);
        expect(typeof response.body).toEqual('string');
    });

    it('Should not login - wrong password', async () => {
        const form: type.LoginForm = {
            email: user1.email,
            password: user1.password + 'wrong_password',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/login`)
            .send(form)
            .expect(403);
        expect(response.body).toMatchObject({
            message: 'ERROR: Wrong credentials.',
        });
    });

    it('Should not login - empty password', async () => {
        const form: type.LoginForm = {
            email: user1.email,
            password: '',
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/login`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Bad form request',
        });
    });

    it('Should not login - empty email', async () => {
        const form: type.LoginForm = {
            email: '',
            password: user1.password,
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/login`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Bad form request',
        });
    });

    it('Should not login - email not found', async () => {
        const form: type.LoginForm = {
            email: 'user1@notfound.com',
            password: user1.password,
        };

        const response: ResponseMSG = await request(app)
            .post(`${URL}/login`)
            .send(form)
            .expect(404);
        expect(response.body).toMatchObject({
            message: 'ERROR: User not found.',
        });
    });

    it('Should not authorize - invalid token', async () => {
        const invalidToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDM0NzQwMDIsImV4cCI6MTYwNDA3ODgwMn0.sDZ06WC2MhtswMgE_4UX7VL_cLD10CMUkjo72ArYfaI';
        const profile: UserProfile = await request(app)
            .get(`${URL_REQ}`)
            .set('Authorization', `Bearer ${invalidToken}`)
            .expect(401);
        expect(profile.body).toMatchObject({
            message: 'Not authorized, invalid token.',
        });
    });

    it('Should not fetch requests - invalid token', async () => {
        const invalidToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        const profile: UserProfile = await request(app)
            .get(`${URL_REQ}`)
            .set('Authorization', `Bearer ${invalidToken}`)
            .expect(401);
        expect(profile.body).toMatchObject({
            message: 'Not authorized, invalid token.',
        });
    });
});
