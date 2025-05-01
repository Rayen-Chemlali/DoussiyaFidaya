import { Module } from '@nestjs/common';
import { GenericService } from './generic.service';

@Module({})
export class CommonModule {
    providers: [GenericService<any>,]
}
