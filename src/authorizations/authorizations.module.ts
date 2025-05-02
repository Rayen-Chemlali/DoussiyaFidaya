import { Module } from '@nestjs/common';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsResolver } from './authorizations.resolver';
import { CommonModule } from 'src/common/common.module';
import { Authorization } from './entities/authorization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CommonModule,
    TypeOrmModule.forFeature([Authorization])
  ],
  providers: [AuthorizationsResolver, AuthorizationsService ],
})
export class AuthorizationsModule {}
