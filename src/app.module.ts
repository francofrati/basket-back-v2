import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { OrganizationsController } from './organizations/organizations.controller';
import { OrganizationsService } from './organizations/organizations.service';
import { TeamsController } from './teams/teams.controller';
import { TeamsService } from './teams/teams.service';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController, OrganizationsController, TeamsController],
  providers: [AppService, OrganizationsService, TeamsService],
})
export class AppModule { }
