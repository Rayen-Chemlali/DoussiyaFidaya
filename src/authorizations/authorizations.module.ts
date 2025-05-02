import { Module } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsResolver } from './authorizations.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Authorization } from './entities/authorization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Authorization])],
  providers: [AuthorizationsResolver, AuthorizationsService],
})
export class AuthorizationsModule {}
