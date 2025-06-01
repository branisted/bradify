import PingService from './ping.service.js';

class PingController {
    async ping(req, res, next) {
        try {
            // Instead of 'const res = ...', use a different variable name
            const result = await PingService.ping();
            if (!result) return res.status(404).json({ message: 'Ping not found.' });
            // Send a pong message
            return res.send("pong");
        } catch (error) {
            next(error);
        }
    }
}

export default new PingController();