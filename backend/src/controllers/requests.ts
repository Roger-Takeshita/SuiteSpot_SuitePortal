import { RequestHandler } from 'express';
import Request from '../models/request';
import * as type from '../utils/types/types';

const getRequests: RequestHandler = async (req, res) => {
    console.log('get request');
    res.json({ message: 'your requests' });
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

    const newRequest: type.RequestI = new Request(form);
    await newRequest.save();
    res.status(201).json(newRequest);
};

const cancelRequest: RequestHandler = async (req, res) => {
    const requestId = req.params.id;
    console.log(requestId);
    res.json({ message: `Request ${requestId} was closed.` });
};

export default {
    getRequests,
    addRequest,
    cancelRequest,
};
