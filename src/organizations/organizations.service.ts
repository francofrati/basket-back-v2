import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class OrganizationsService {
  constructor(
    @Inject('BASKET_INTERMEDIA_V2_POOL')
    private readonly basketIntermediaV2Pool: Pool,
  ) {}

  async getOrganizations() {
    return (await this.basketIntermediaV2Pool.query(`SELECT * FROM tournament`))
      .rows;
  }

  async getOrganization(organizationId: string) {
    return (
      await this.basketIntermediaV2Pool.query(
        `SELECT * FROM tournament WHERE "id"='${organizationId}'`,
      )
    ).rows[0];
  }

  async getTeamsPerOrganization(organizationId: string) {
    return (
      await this.basketIntermediaV2Pool.query(
        `SELECT * FROM VWteamsComplete WHERE "tournamentId"='${organizationId}'`,
      )
    ).rows;
  }
}
