import { Module } from '@nestjs/common';
import { GenericService } from './generic.service';

@Module({
})
export class CommonModule {
    providers: [GenericService<any, any, any>,]
    exports: [GenericService<any, any, any>,] // export the service so it can be used in other modules
}
