import app from '../app';
import Request from '../models/request';
import request from 'supertest';
import * as type from '../utils/types/types';
import { setupDatabase } from './database/database';

const URL_REQ = '/api/maintenance-requests';

beforeEach(setupDatabase);

describe("Tenant's API", () => {
    it('Should add new request', async () => {
        const form: type.MaintenanceRequest = {
            name: 'Roger',
            email: 'your_email_3@test.com',
            unitNumber: '#408',
            serviceType: 'general',
            summary: 'broken window',
            details: '',
        };

        await request(app).post(`${URL_REQ}`).send(form).expect(201);
        const req: type.RequestI = await Request.findOne().sort({
            created_at: -1,
        });
        expect(req).toMatchObject(form);
    });

    it('Should not add new request - invalid form', async () => {
        const form: type.MaintenanceRequest = {
            name: '',
            email: 'your_email_3@test.com',
            unitNumber: '#408',
            serviceType: 'general',
            summary: 'broken window',
            details: '',
        };

        const response = await request(app)
            .post(`${URL_REQ}`)
            .send(form)
            .expect(400);
        expect(response.body).toMatchObject({
            message: 'Invalid form',
        });
    });
});
