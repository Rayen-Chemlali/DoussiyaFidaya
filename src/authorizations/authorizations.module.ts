import { Module } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsResolver } from './authorizations.resolver';

@Module({
  providers: [AuthorizationsResolver, AuthorizationsService],
})
export class AuthorizationsModule {}
