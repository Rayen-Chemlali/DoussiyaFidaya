import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserPreferencesService {
  constructor(private prisma: PrismaService) {}

  // async filterUsersByPreferences(userIds: string[], channel: string): Promise<string[]> {
  //   const preferences = await this.prisma.userNotificationPreference.findMany({
  //     where: {
  //       userId: { in: userIds },
  //       channel,
  //       enabled: true,
  //     },
  //   });
  //   return preferences.map((p) => p.userId);
  // }
}