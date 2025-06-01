import express from 'express';
import PingController from './ping.controller.js';

const router = express.Router();

router.get('/', (req, res, next) => PingController.ping(req, res, next));

export default router;