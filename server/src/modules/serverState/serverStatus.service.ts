import type { ILogger } from '../../shared/interfaces/logger.interface.js';

export class ServerStatusService {
    constructor(private readonly logger: ILogger) {}

    public getHealthStatus() {
        this.logger.info('Server health service executed.');

        return true;
    }
}