import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class TeamsService {
    constructor(
        @Inject('BASKET_INTERMEDIA_V2_POOL')
        private readonly basketIntermediaV2Pool: Pool,) { }

    async addTeam(teamName: string, teamDescription: string, teamLogoUrl: string, categoryId: string) {
        await this.basketIntermediaV2Pool.query(`CALL spaddteam('${teamName}', '${teamDescription}', ${categoryId}, '${teamLogoUrl}')`)
    }
}
