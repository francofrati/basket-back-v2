import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class OrganizationsService {
  constructor(
    @Inject('BASKET_INTERMEDIA_V2_POOL')
    private readonly basketIntermediaV2Pool: Pool,
  ) { }

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
        `SELECT "id", "categoryId", "name", "description", "logoUrl", "created_at", "categoryName" FROM VWteamsComplete WHERE "tournamentId"='${organizationId}'`,
      )
    ).rows;
  }

  async getSeasonsPerOrganization(organizationId: string) {
    return (
      await this.basketIntermediaV2Pool.query(
        `SELECT * FROM VWseasons where "tournamentId"='${organizationId}'`,
      )
    ).rows;
  }

  async getDatesPerRegularPhase(regularPhaseId: string) {
    return (
      await this.basketIntermediaV2Pool.query(
        `SELECT d.id as "dateId", d."name" as "dateName", d."startDate", d."endDate", d."index" FROM "regularPhaseDate" rpd LEFT JOIN date d ON d.id=rpd."dateId" WHERE "regularPhaseId"=${regularPhaseId}`,
      )
    ).rows;
  }
}
