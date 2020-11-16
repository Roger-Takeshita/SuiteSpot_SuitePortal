import { RequestHandler } from 'express';

const getRequests: RequestHandler = async (req, res) => {
    console.log('get request');
    res.json({ message: 'your requests' });
};

const addRequest: RequestHandler = async (req, res) => {
    console.log(req.body);
    res.json({ message: req.body });
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
