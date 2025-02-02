import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class OrganizationsService {

    constructor(@Inject('BASKET_INTERMEDIA_V2_POOL') private readonly basketIntermediaV2Pool: Pool) { }

    async getOrganizations() {
        return (await this.basketIntermediaV2Pool.query(`SELECT * FROM tournament`)).rows
    }
}
