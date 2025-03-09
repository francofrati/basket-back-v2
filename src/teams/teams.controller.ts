import { Body, Controller, Post } from '@nestjs/common';
import { DTOAddTeam } from './teams.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) { }
    @Post('add')
    async addTeamController(@Body() body: DTOAddTeam) {

        try {

            const { categoryId, teamDescription, teamLogoUrl, teamName } = body

            await this.teamsService.addTeam(teamName, teamDescription, teamLogoUrl, categoryId)

            return 'ok'
        } catch (error) {
            return error.message

        }
    }
}
