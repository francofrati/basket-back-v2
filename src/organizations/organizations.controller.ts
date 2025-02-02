import { Controller, Get } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
    constructor(private readonly organizationService: OrganizationsService) { }


    @Get()
    async getOrganizations() {
        try {
            return await this.organizationService.getOrganizations()
        } catch (error) {
            return error.message
        }
    }
}
