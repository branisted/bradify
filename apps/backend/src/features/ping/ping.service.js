import PingRepository from './ping.repository.js';

class PingService {
    async ping() {
        PingRepository.ping();
    }
}

export default new PingService();