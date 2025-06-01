import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';  // Correct

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule {}
