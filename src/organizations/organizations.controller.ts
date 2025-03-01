import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationService: OrganizationsService) {}

  @Get()
  async getOrganizations() {
    try {
      return await this.organizationService.getOrganizations();
    } catch (error) {
      return error.message;
    }
  }

  @Get('/:organizationId')
  async getOrganization(@Param() params: { organizationId: string }) {
    try {
      const { organizationId } = params;
      return await this.organizationService.getOrganization(organizationId);
    } catch (error) {
      return error.message;
    }
  }

  @Get(':organizationId/teams')
  async getTeamsPerOrganization(@Param() params: { organizationId: string }) {
    try {
      const { organizationId } = params;
      return await this.organizationService.getTeamsPerOrganization(
        organizationId,
      );
    } catch (error) {
      return error.message;
    }
  }

  @Get(':organizationId/seasons')
  async getSeasonsPerOrganization(@Param() params: { organizationId: string }) {
    try {
      const { organizationId } = params;

      return await this.organizationService.getSeasonsPerOrganization(
        organizationId,
      );
    } catch (error) {
      return error.message;
    }
  }

  @Get(':organizationId/regularPhase/:regularPhaseId/dates')
  async getDatesPerRegularPhase(@Param() params: { regularPhaseId: string }) {
    try {
      const { regularPhaseId } = params;

      return await this.organizationService.getDatesPerRegularPhase(
        regularPhaseId,
      );
    } catch (error) {
      return error.message;
    }
  }
}
