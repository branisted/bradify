import PingService from './ping.service.js';

class PingController {
    async ping(req, res, next) {
        try {
            const res = await PingService.ping();
            if (!res) return res.status(404).json({ message: 'Ping not found.' });
        } catch (error) {
            next(error);
        }
    }
}

export default new PingController();