import * as resolvers from './generated/type-graphql/resolvers/crud';
import { PrismaService } from './prisma.service';

export function createGeneratedResolverProviders(): any[] {
  return Object.values(resolvers).map((ResolverClass: any) => ({
    provide: ResolverClass,
    useFactory: (prisma: PrismaService) => new ResolverClass(prisma),
    inject: [PrismaService],
  }));
}
