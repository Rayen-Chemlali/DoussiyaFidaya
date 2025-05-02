import { Module } from '@nestjs/common';

@Module({
})
export class CommonModule {
    providers: [GenericService<any>,]
    exports: [GenericService<any>,] // export the service so it can be used in other modules
}
