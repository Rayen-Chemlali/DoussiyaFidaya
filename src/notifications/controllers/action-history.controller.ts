import { Controller, Get, Query, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../auth/roles.guards';
import { Roles } from '../../auth/roles.decorator';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from '../../prisma/prisma.service';

@ApiTags('Action History')
@Controller('action-history')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ActionHistoryController {
  constructor(private prisma: PrismaService) {}

  @Get()
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiResponse({ status: HttpStatus.OK, type: [Object] })
  @ApiQuery({ name: 'userId', required: false })
  @ApiQuery({ name: 'eventName', required: false })
  @ApiQuery({ name: 'entityId', required: false })
  @ApiQuery({ name: 'skip', required: false, type: Number })
  @ApiQuery({ name: 'take', required: false, type: Number })
  async getActionHistory(
    @Query('userId') userId?: string,
    @Query('eventName') eventName?: string,
    @Query('entityId') entityId?: string,
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 10,
  ) {
    const where: any = {};
    if (userId) where.userId = userId;
    if (eventName) where.eventName = { contains: eventName };
    if (entityId) where.entity = { path: ['id'], equals: entityId };

    const headers = {
      'Cache-Control': 'public, max-age=3600',
      'ETag': `W/"action-history-${Date.now()}"`,
    };

    const history = await this.prisma.actionHistory.findMany({
      where,
      skip,
      take,
      orderBy: { timestamp: 'desc' },
      select: {
        id: true,
        userId: true,
        eventName: true,
        entity: true,
        timestamp: true,
        isSensitive: true,
      },
    });

    return { data: history, headers };
  }
}