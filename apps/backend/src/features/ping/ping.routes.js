import express from 'express';
import PingController from './ping.controller.js';

const router = express.Router();

router.post('/ping', (req, res, next) => PingController.ping(req, res, next));

export default router;