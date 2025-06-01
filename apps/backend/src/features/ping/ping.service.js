import PingRepository from './ping.repository.js';

class PingService {
    async ping() {
        return PingRepository.ping();
    }
}

export default new PingService();