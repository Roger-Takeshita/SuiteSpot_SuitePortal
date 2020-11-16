import express from 'express';
import requestCtrl from '../controllers/requests';
import { auth } from '../middlewares/auth';

const router = express.Router();

//! Public
router.post('/', requestCtrl.addRequest);

//! Private
router.get('/', auth, requestCtrl.getRequests);
router.put('/:id/close', auth, requestCtrl.cancelRequest);

export default router;
