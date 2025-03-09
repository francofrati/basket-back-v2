import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { formatDate } from 'src/lib/dayjs/dayjs.utils';

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

  @Get(':organizationId/categories')
  async getCategoriesPerSeason(@Param() params: { organizationId: string }) {
    try {

      const { organizationId } = params

      return await this.organizationService.getCategoriesPerOrganization(organizationId)
    } catch (error) {
      return error.message
    }
  }

  @Get(':organizationId/regularPhase/:regularPhaseId/dates')
  async getDatesPerRegularPhase(@Param() params: { regularPhaseId: string }) {
    try {
      const { regularPhaseId } = params;
      return (
        await this.organizationService.getDatesPerRegularPhase(regularPhaseId)
      ).map((date) => {
        return {
          ...date,
          startDate: formatDate(date.startDate, 'DD/MM/YY'),
          endDate: formatDate(date.endDate, 'DD/MM/YY'),
        };
      });
    } catch (error) {
      return error.message;
    }
  }
}
