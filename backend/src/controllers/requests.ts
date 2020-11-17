import { RequestHandler } from 'express';
import Request from '../models/request';
import * as type from '../utils/types/types';

const getRequests: RequestHandler = async (req, res) => {
    try {
        const docs: type.RequestI[] = await Request.find({});
        res.json(docs);
    } catch (error) {
        res.status(500).json({ message: 'ERROR: Something went wrong.' });
    }
};

const addRequest: RequestHandler = async (req, res) => {
    const form: type.MaintenanceRequest = req.body;

    if (
        form.name.trim() === '' ||
        form.email.trim() === '' ||
        form.unitNumber.trim() === '' ||
        form.serviceType.trim() === '' ||
        form.summary.trim() === ''
    ) {
        res.status(400).json({ message: 'Invalid form' });
    }

    try {
        const newRequest: type.RequestI = new Request(form);
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: 'ERROR: Something went wrong.' });
    }
};

const closeRequest: RequestHandler = async (req, res) => {
    try {
        const requestId = req.params.id;
        const request: type.RequestI = await Request.findById(requestId);
        request.close = !request.close;
        await request.save();
        res.json(request);
    } catch (error) {
        res.status(500).json({ message: 'ERROR: Something went wrong.' });
    }
};

export default {
    getRequests,
    addRequest,
    closeRequest,
};
